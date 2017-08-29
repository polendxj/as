/**
 * Created by Administrator on 2016/10/11.
 */
import React, {Component, PropTypes} from 'react';
import classnames from 'classnames';
import {browserHistory} from 'react-router'
import {ObjArrSort} from '../../components/Tool/Tool'

export default class SessionAndUsersChartsComponent extends Component {
    constructor(props) {
        super(props);
        /*attribute*/
        this.successStatus = {marginRight: "5px"};
        this.warningStatus = {
            backgroundColor: "#FE7900",
            color: "white",
            marginRight: "5px"
        };
        this.criticalStatus = {
            backgroundColor: "#E9002B",
            color: "white",
            marginRight: "5px"
        };
        /*event*/
        this._makeDC = this._makeDC.bind(this);
    }

    componentDidMount() {
        setTimeout(function () {
            $('[data-popup="popover"]').popover();
            $('[data-popup="tooltip"]').tooltip();
        }, 1000)

    }

    _makeDC(nodes) {
        var dc = "";
        if (nodes && nodes.length > 0) {
            dc = {};
            nodes.forEach(function (val, key) {
                var tempDC = val.node.location;
                if (dc[tempDC]) {
                    dc[tempDC].push(val);
                } else {
                    dc[tempDC] = [];
                    dc[tempDC] = [val];
                }
            });
        }
        var sdic = Object.keys(dc).sort();
        var result = {};
        for (var i in sdic) {
            result[sdic[i]] = dc[sdic[i]];
        }
        return result;
    }

    render() {
        const {cseStatusInfo, csrStatusInfo, csmStatusInfo}=this.props;
        var cses = this._makeDC(cseStatusInfo);
        var csrs = this._makeDC(csrStatusInfo);
        var csms = this._makeDC(csmStatusInfo);
        var csesTRS = [];
        var csrsTRS = [];
        var self = this;
        if (csrs) {
            for (var cse in csrs) {
                csesTRS.push(
                    <tr key={cse}>
                        <td style={{width: "100px", border: "0 red solid", verticalAlign: "top"}}>
                                                <span
                                                    className="label border-left-primary label-striped">{cse}</span>
                        </td>
                        <td style={{border: "0 red solid", verticalAlign: "top"}}>
                            {csms[cse] ? csms[cse].map(function (val, key) {
                                var status = self.successStatus;   //0-warning,1-normal,2-critical
                                var tempStr = "";
                                val.checks.forEach(function (v, k) {
                                    if (v.Status != "passing") {
                                        tempStr += v.Status;
                                    }
                                });
                                if (tempStr.indexOf("warning") >= 0) {
                                    status = self.warningStatus;
                                } else if (tempStr.indexOf("critical") >= 0) {
                                    status = self.criticalStatus;
                                }
                                return <span key={key} className="label label-striped"
                                             style={status}>{val.node.Node + "-" + val.node.Address}</span>
                            }) : ""}
                            {csrs[cse] ? csrs[cse].map(function (val, key) {
                                var status = self.successStatus;   //0-warning,1-normal,2-critical
                                var tempStr = "";
                                val.checks.forEach(function (v, k) {
                                    if (v.Status != "passing") {
                                        tempStr += v.Status;
                                    }
                                });
                                if (tempStr.indexOf("warning") >= 0) {
                                    status = self.warningStatus;
                                } else if (tempStr.indexOf("critical") >= 0) {
                                    status = self.criticalStatus;
                                }
                                return <span key={key} className="label label-striped"
                                             style={status}>{val.node.Node + "-" + val.node.Address}</span>
                            }) : ""}
                            {cses[cse] ? cses[cse].map(function (val, key) {
                                var status = self.successStatus;   //0-warning,1-normal,2-critical
                                var tempStr = "";
                                val.checks.forEach(function (v, k) {
                                    if (v.Status != "passing") {
                                        tempStr += v.Status;
                                    }
                                });
                                if (tempStr.indexOf("warning") >= 0) {
                                    status = self.warningStatus;
                                } else if (tempStr.indexOf("critical") >= 0) {
                                    status = self.criticalStatus;
                                }
                                return <span key={key} className="label label-striped"
                                             style={status}>{val.node.hostName + "-" + val.node.serverIp}</span>
                            }) : []}
                        </td>
                    </tr>
                );
            }
        }

        return (
            <div className="row">
                <div className="col-lg-12">
                    <div className="panel panel-flat">
                        <div className="panel-heading">
                            <h6 className="panel-title"
                                style={{fontWeight: "bold"}}>{Current_Lang.others.serverProfiles}</h6>
                        </div>

                        <div className="container-fluid" style={{marginTop: "-10px"}}>
                            <div className="row text-center">
                                <div className="col-md-12">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody style={{textAlign: "left"}}>
                                            {csesTRS}

                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}