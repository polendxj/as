/**
 * Created by Captain on 2017/8/27.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import Pagenation from '../../components/right/Pagenation';
import {ListMiddleModal} from '../../components/Tool/Tool';
import {getListByMutilpCondition} from '../../actions/CommonActions';

export default class ListManage extends Component{
    constructor(props) {
        super(props);
        this.page = 0;
    }
    _save1(){
        $("#listManageModal").modal("hide");
    }
    _close1(){
        $("#listManageModal").modal("hide");
    }
    _changePage(page) {
        this.page = page;
        var params = {page: this.page, size: page_size};
        this.props.dispatch(getListByMutilpCondition(params, "", "", ""));
    }

    _prePage(page) {
        this.page = this.page - 1;
        var params = {page: this.page, size: page_size};
        this.props.dispatch(getListByMutilpCondition(params, "", "", ""));
    }

    _nextPage(page) {
        this.page = this.page + 1;
        var params = {page: this.page, size: page_size};
        this.props.dispatch(getListByMutilpCondition(params, "", "", ""));
    }
    render() {
        var tableHeight = ($(window).height()-240);
        var style1 = {width:"300px"};
        var listManage = <div>
            <div className="form-horizontal">
                <fieldset className="content-group">
                    <legend className="text-bold"/>
                    <div className="form-group">
                        <label className="col-lg-4 control-label"
                               style={{textAlign: 'right'}}>{"列表名称"}</label>
                        <div className="col-lg-7">
                            <input id="name" type="text" className="form-control" autoComplete="off" style={style1}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-4 control-label"
                               style={{textAlign: 'right'}}>{"描述"}</label>
                        <div className="col-lg-7">
                            <textarea id="description" rows="5" cols="5" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-4 control-label"
                               style={{
                                   textAlign: 'right'
                               }}>{"应用"}</label>
                        <div className="col-lg-7">
                            <select id="classify" className="form-control" style={style1}>
                                <option value={1}>全部应用</option>
                                <option value={2}>汇融易_网页</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-4 control-label"
                               style={{
                                   textAlign: 'right'
                               }}>{"列表类型"}</label>
                        <div className="col-lg-7">
                            <select id="classify" className="form-control" style={style1}>
                                <option value={1}>风险名单</option>
                                <option value={1}>白名单</option>
                                <option value={1}>其它</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-4 control-label"
                               style={{textAlign: 'center'}}></label>
                        <div className="col-lg-7">
                            <div className="text-right">
                                <button type="button" className="btn btn-primary"
                                        onClick={this._save1.bind(this)}>
                                    {"确定"}
                                </button>
                                <button type="button" className="btn btn-primary"
                                        style={{margin:"0 10px"}}
                                        onClick={this._close1.bind(this)}>{"取消"}
                                </button>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-flat">
                        <div className="panel-body">
                            <div className="tabbable">
                                <ul className="nav nav-pills">
                                    <li className="active"><a href="#listDefine" data-toggle="tab">列表定义</a></li>
                                    <li><a href="#listData" data-toggle="tab">列表数据</a></li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="listDefine">
                                        <fieldset className="content-group">
                                            <div>
                                                <legend className="text-bold">扩展字段列表区</legend>
                                                <ul className="list-inline list-inline-condensed no-margin-bottom"
                                                    style={{textAlign: 'right', marginTop: '-59px'}}>
                                                    <li>
                                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#listManageModal">新建</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </fieldset>
                                        <div className="table-responsive" style={{height:tableHeight+'px',overflowY:'auto'}}>
                                            <table className="table table-bordered table-hover" style={{marginBottom:'85px'}}>
                                                <thead>
                                                <tr style={{fontWeight:'bold'}}>
                                                    <th className="col-md-1 text-bold text-center">{"列表ID"}</th>
                                                    <th className="col-md-1 text-bold text-center">{"列表名称"}</th>
                                                    <th className="col-md-1 text-bold text-center">{"应用名"}</th>
                                                    <th className="col-md-1 text-bold text-center">{"列表类型"}</th>
                                                    <th className="col-md-2 text-bold text-center">{"描述"}</th>
                                                    <th className="col-md-2 text-bold text-center">{"创建者"}</th>
                                                    <th className="col-md-2 text-bold text-center">{"修改者"}</th>
                                                    <th className="col-md-2 text-bold text-center">{"上次修改时间"}</th>
                                                    <th className="text-center" style={{width: "20px"}}><i
                                                        className="icon-arrow-down12"/></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="text-center">{"1017"}</td>
                                                    <td className="text-center">{"test_list"}</td>
                                                    <td className="text-center">{"汇融易_网页"}</td>
                                                    <td className="text-center">{"风险名单"}</td>
                                                    <td className="text-center">{"test"}</td>
                                                    <td className="text-center">{"13826405310@139.com"}</td>
                                                    <td className="text-center">{"admin"}</td>
                                                    <td className="text-center">{"2017-08-20 20:39:11"}</td>
                                                    <td className="text-center">
                                                        <ul className="icons-list">
                                                            <li className="dropdown">
                                                                <a href="#" className="dropdown-toggle"
                                                                   data-toggle="dropdown" aria-expanded="false"><i
                                                                    className="icon-menu7"/></a>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li style={{display:'block'}}>
                                                                        <a href="javascript:void(0)"><i className="icon-pencil5"/>
                                                                            {"修改"}</a></li>
                                                                    <li style={{display:'block'}}><a
                                                                        href="javascript:void(0)"><i className="icon-trash"/>
                                                                        {"删除"}</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr style={{backgroundColor:"#F8F8F8"}}>
                                                    <td className="text-center">{"1015"}</td>
                                                    <td className="text-center">{"test1_list"}</td>
                                                    <td className="text-center">{"汇融易_网页"}</td>
                                                    <td className="text-center">{"风险名单"}</td>
                                                    <td className="text-center">{"test"}</td>
                                                    <td className="text-center">{"13826405310@139.com"}</td>
                                                    <td className="text-center">{"admin"}</td>
                                                    <td className="text-center">{"2017-08-19 14:22:35"}</td>
                                                    <td className="text-center">
                                                        <ul className="icons-list">
                                                            <li className="dropdown">
                                                                <a href="#" className="dropdown-toggle"
                                                                   data-toggle="dropdown" aria-expanded="false"><i
                                                                    className="icon-menu7"/></a>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li style={{display:'block'}}>
                                                                        <a href="javascript:void(0)"><i className="icon-pencil5"/>
                                                                            {"修改"}</a></li>
                                                                    <li style={{display:'block'}}><a
                                                                        href="javascript:void(0)"><i className="icon-trash"/>
                                                                        {"删除"}</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="listData">
                                        <fieldset className="content-group">
                                            <div style={{paddingBottom:"30px"}}>
                                                <legend className="text-bold">列表数据</legend>
                                                <ul className="list-inline list-inline-condensed no-margin-bottom"
                                                    style={{textAlign: 'right', marginTop: '-59px'}}>
                                                </ul>
                                            </div>
                                        </fieldset>
                                        <div className="table-responsive" style={{height:tableHeight+'px',overflowY:'auto'}}>
                                            <table className="table table-bordered table-hover" style={{marginBottom:'85px'}}>
                                                <thead>
                                                <tr style={{fontWeight:'bold'}}>
                                                    <th className="col-md-1 text-bold text-center">{"数据值"}</th>
                                                    <th className="col-md-1 text-bold text-center">{"列表名称"}</th>
                                                    <th className="col-md-1 text-bold text-center">{"应用名"}</th>
                                                    <th className="col-md-2 text-bold text-center">{"描述"}</th>
                                                    <th className="col-md-2 text-bold text-center">{"创建者"}</th>
                                                    <th className="col-md-2 text-bold text-center">{"修改者"}</th>
                                                    <th className="col-md-2 text-bold text-center">{"上次修改时间"}</th>
                                                    <th className="text-center" style={{width: "20px"}}><i
                                                        className="icon-arrow-down12"/></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="text-center">{"10"}</td>
                                                    <td className="text-center">{"test_list"}</td>
                                                    <td className="text-center">{"汇融易_网页"}</td>
                                                    <td className="text-center">{"test"}</td>
                                                    <td className="text-center">{"13826405310@139.com"}</td>
                                                    <td className="text-center">{"admin"}</td>
                                                    <td className="text-center">{"2017-08-20 20:39:11"}</td>
                                                    <td className="text-center">
                                                        <ul className="icons-list">
                                                            <li className="dropdown">
                                                                <a href="#" className="dropdown-toggle"
                                                                   data-toggle="dropdown" aria-expanded="false"><i
                                                                    className="icon-menu7"/></a>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li style={{display:'block'}}>
                                                                        <a href="javascript:void(0)"><i className="icon-pencil5"/>
                                                                            {"修改"}</a></li>
                                                                    <li style={{display:'block'}}><a
                                                                        href="javascript:void(0)"><i className="icon-trash"/>
                                                                        {"删除"}</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr style={{backgroundColor:"#F8F8F8"}}>
                                                    <td className="text-center">{"12"}</td>
                                                    <td className="text-center">{"test1_list"}</td>
                                                    <td className="text-center">{"汇融易_网页"}</td>
                                                    <td className="text-center">{"test"}</td>
                                                    <td className="text-center">{"13826405310@139.com"}</td>
                                                    <td className="text-center">{"admin"}</td>
                                                    <td className="text-center">{"2017-08-19 14:22:35"}</td>
                                                    <td className="text-center">
                                                        <ul className="icons-list">
                                                            <li className="dropdown">
                                                                <a href="#" className="dropdown-toggle"
                                                                   data-toggle="dropdown" aria-expanded="false"><i
                                                                    className="icon-menu7"/></a>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li style={{display:'block'}}>
                                                                        <a href="javascript:void(0)"><i className="icon-pencil5"/>
                                                                            {"修改"}</a></li>
                                                                    <li style={{display:'block'}}><a
                                                                        href="javascript:void(0)"><i className="icon-trash"/>
                                                                        {"删除"}</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">{"16"}</td>
                                                    <td className="text-center">{"test_list"}</td>
                                                    <td className="text-center">{"汇融易_网页"}</td>
                                                    <td className="text-center">{"test"}</td>
                                                    <td className="text-center">{"13826405310@139.com"}</td>
                                                    <td className="text-center">{"admin"}</td>
                                                    <td className="text-center">{"2017-08-19 14:22:35"}</td>
                                                    <td className="text-center">
                                                        <ul className="icons-list">
                                                            <li className="dropdown">
                                                                <a href="#" className="dropdown-toggle"
                                                                   data-toggle="dropdown" aria-expanded="false"><i
                                                                    className="icon-menu7"/></a>
                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                    <li style={{display:'block'}}>
                                                                        <a href="javascript:void(0)"><i className="icon-pencil5"/>
                                                                            {"修改"}</a></li>
                                                                    <li style={{display:'block'}}><a
                                                                        href="javascript:void(0)"><i className="icon-trash"/>
                                                                        {"删除"}</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ListMiddleModal id="listManageModal" content={listManage}
                                         doAction={""}
                                         tip={"添加自定义列表"} actionText="添加自定义列表" hide="true" hideCancel="true"/>
                    </div>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    const {commonReducer}=state;
    return {
        refresh: commonReducer.refresh
    }
}


export default connect(mapStateToProps)(ListManage)