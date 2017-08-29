/**
 * Created by Administrator on 2016/8/22.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Highcharts from 'highcharts'
import SessionAndUsersChartsComponent from '../components/charts/SessionAndUsersChartsComponent'
import {commonRefresh} from '../actions/Common'

import {alarmTargetTypeFilter, warningLevelFilter, warningLevelColorFilter} from '../components/Tool/Tool'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.SessionAndUsersContainerTimer = ""
        this.ServerUseStatusContainerTimer = ""
        this.CSRMonitorStatusContainerTimer = ""
        this.CSMMonitorStatusContainerTimer = ""
        this.iframeHeightTimer = "";
        this.alarmHistoryContainerTimer = ""
        this.groups = []
        this.cseStatusInfo = "";
        this.csrStatusInfo = "";
        this.csmStatusInfo = "";
    }

    _startRefresh() {
        this.props.dispatch(commonRefresh())
    }


    componentDidMount() {
        var that = this
        Highcharts.setOptions({
            global: {
                useUTC: false
            }
        });

        $('#layer').on('scroll', function () {
            // div 滚动了
            if ($('#layer').scrollTop() <= 51) {
                // 滚动到底部了
                $("#ll").css("height", 51 - $('#layer').scrollTop());
            } else {
                $("#ll").css("height", 0);
            }
        });

        $("#iframeId").on("load", function () {
            setTimeout(function () {
                $("#ll").css("width", ($("#ll").width() - 70) + "px");
            }, 500);
        });

    }

    componentWillUnmount() {
        clearInterval(this.SessionAndUsersContainerTimer);
        clearInterval(this.ServerUseStatusContainerTimer);
        clearInterval(this.CSRMonitorStatusContainerTimer);
        clearInterval(this.CSMMonitorStatusContainerTimer);
    }

    render() {
        var tableHeight = ($(window).height() - 180);
        return (
            <div>
                <div className="content" style={{position: "relative", padding: "0"}}>
                    <SessionAndUsersChartsComponent cseStatusInfo={this.cseStatusInfo}
                                                    csrStatusInfo={this.csrStatusInfo}
                                                    csmStatusInfo={this.csmStatusInfo}/>
                    <div>

                    </div>
                    <div id="layer" style={{width: "100%", height: tableHeight + "px", overflowY: "auto"}}>
                        <div id="ll" style={{
                            width: "100%",
                            height: "51px",
                            backgroundColor: "#f8f8f8",
                            position: "absolute",
                        }}></div>
                        <iframe src={grafana_url+"/dashboard/db/dashboard?orgId=1"} frameBorder="0"
                                scrolling="no" id="iframeId" width="100%" height={"1400px"}></iframe>
                    </div>

                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const {commonReducer}=state
    return {
        refresh: commonReducer.refresh

    }
}


export default connect(mapStateToProps)(Dashboard)