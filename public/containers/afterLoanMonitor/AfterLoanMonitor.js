/**
 * Created by Captain on 2017/8/28.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class AfterLoanMonitor extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        $('.daterange-single').daterangepicker({
            singleDatePicker: true,
            applyClass: 'bg-slate-600',
            cancelClass: 'btn-default',
            autoUpdateInput: false,
            format: "yyyy-mm-dd",
            locale: dateLocale
        });
        $('.daterange-two').daterangepicker({
            maxDate: moment(), //最大时间
            format: "YYYY-MM-DD",
            opens: "left",
            applyClass: 'bg-slate-600',
            cancelClass: 'btn-default',
            ranges: rangesLocale,
            startDate: '2016/01/01',
            endDate: moment(),
            locale: dateLocale
        });
        $('#file-input').fileinput({
            uploadUrl: 'http://dev.xysy.tech/rsapp/file/news',
            language: 'zh',
            showUpload: false,
            showPreview: true,
            browseIcon: '<i class="icon-folder-open"></i>&nbsp;',
            removeIcon: '<i class="icon-trash"></i>',
            enctype: 'multipart/form-data',
            allowedFileExtensions: ['xls']
        });
    }
    componentWillUnmount(){

    }
    _search(){

    }
    render(){
        var tableHeight = ($(window).height() - 130);
        var style = {width:"200px"};
        var style1 = {width:"50px"};
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-flat">
                        <div className="panel-body">
                            <div className="tabbable">
                                <ul className="nav nav-pills">
                                    <li className="active"><a href="#addMonitor" data-toggle="tab">添加监控</a></li>
                                    <li><a href="#batchAdd" data-toggle="tab">批量添加</a></li>
                                    <li><a href="#monitorList" data-toggle="tab">监控列表</a></li>
                                    <li><a href="#monitorSet" data-toggle="tab">监控设置</a></li>
                                    <li><a href="#riskList" data-toggle="tab">风险列表</a></li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane active" id="addMonitor">
                                        <div className="content" style={{marginTop: '20px'}}>
                                            <form id="registerClassifyForm" className="form-horizontal" action="#">
                                                <div className="row" style={{height: tableHeight + 'px', overflowY: 'auto'}}>
                                                    <div className="col-sm-12">
                                                        <fieldset className="content-group">
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-2 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"报告编号"}</label>
                                                                <div className="col-lg-6">
                                                                    <input id="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-2 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"放款日期"}</label>
                                                                <div className="col-lg-6">
                                                                    <input id="daterange-single" type="text"
                                                                           className="form-control daterange-single"
                                                                           placeholder="选择日期" style={style}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-2 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"放款金额"}</label>
                                                                <div className="col-lg-6">
                                                                    <div className="input-group">
                                                                        <input name="rewardPoints" type="number" className="form-control" style={style}/>
                                                                        <span className="input-group-addon">元</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-2 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"放款期限"}</label>
                                                                <div className="col-lg-6">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control" style={style}/>
                                                                        <div className="input-group-btn">
                                                                            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">月
                                                                                <span className="caret"/>
                                                                            </button>
                                                                            <ul className="dropdown-menu dropdown-menu-right">
                                                                                <li><a href="#">月</a></li>
                                                                                <li><a href="#">天</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-2 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"监控开始时间"}</label>
                                                                <div className="col-lg-6">
                                                                    <input id="daterange-single" type="text"
                                                                           className="form-control daterange-single"
                                                                           placeholder="选择日期" style={style}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-2 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"监控结束时间"}</label>
                                                                <div className="col-lg-6">
                                                                    <input id="daterange-single" type="text"
                                                                           className="form-control daterange-single"
                                                                           placeholder="选择日期" style={style}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-2 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"扫描周期"}</label>
                                                                <div className="col-lg-6">
                                                                    <div className="input-group">
                                                                        <input name="rewardPoints" type="number" className="form-control" style={style}/>
                                                                        <span className="input-group-addon">天</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </fieldset>

                                                        <div className="form-group" >
                                                            <div className="col-lg-5 text-right" style={{marginTop: "50px"}}>
                                                                <button type="button" className="btn btn-primary">{"保存"}
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="batchAdd">
                                        <div className="content" style={{marginTop: '20px'}}>
                                            <form id="registerClassifyForm" className="form-horizontal" action="#">
                                                <div className="row" style={{height: tableHeight + 'px', overflowY: 'auto'}}>
                                                    <div className="col-sm-12">
                                                        <fieldset className="content-group">
                                                            <div className="form-group" >
                                                                <label className="col-lg-2 control-label"
                                                                       style={{
                                                                           textAlign: 'right',
                                                                       }}>{"文件上传"}</label>
                                                                <div className="col-lg-6">
                                                                    <input type="file" name="file" id="file-input"
                                                                           multiple/>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="monitorList">
                                        <div className="content" style={{marginTop: '20px'}}>
                                            <fieldset className="content-group">
                                                <legend className="text-bold">搜索区</legend>
                                                <ul className="list-inline list-inline-condensed no-margin-bottom"
                                                    style={{textAlign: 'right', marginTop: '-59px'}}>
                                                    <li className="form-inline">
                                                        <input id="statistical_report" type="text"
                                                               className="form-control daterange-two"
                                                               placeholder="选择日期" style={style}/>
                                                    </li>
                                                    <li className="form-inline">
                                                        <label className="control-label" style={{paddingRight:"6px"}}>监控状态</label>
                                                        <select id="typeSelect" className="form-control">
                                                            <option value={""}>全部状态</option>
                                                            <option value={1}>监控中</option>
                                                            <option value={2}>监控结束</option>
                                                        </select>
                                                    </li>
                                                    <li className="form-inline">
                                                        <label className="control-label" style={{paddingRight:"6px"}}>添加方式</label>
                                                        <select id="straListSelect" className="form-control">
                                                            <option value={""}>全部状态</option>
                                                            <option value={1}>手动单笔</option>
                                                            <option value={2}>手动批量</option>
                                                            <option value={2}>接口调用</option>
                                                        </select>
                                                    </li>
                                                    <li>
                                                        <button onClick={this._search.bind(this)} type="button"
                                                                className="btn btn-primary btn-icon"><i
                                                            className="icon-search4"></i>搜索</button>
                                                    </li>
                                                </ul>
                                            </fieldset>
                                            <div className="table-responsive" style={{height:tableHeight+'px',overflowY:'auto'}}>
                                                <table className="table table-bordered table-hover" style={{marginBottom:'85px'}}>
                                                    <thead>
                                                    <tr style={{fontWeight:'bold'}}>
                                                        <th className="col-md-2 text-bold text-center">{"报告编号/sequenceId/申请编号"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"姓名"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"操作人"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"放款日期"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"添加时间"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"添加方式"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"监控开始时间"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"监控结束时间"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"应用名"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"监控状态"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"监控报告"}</th>
                                                        <th className="text-center" style={{width: "20px"}}><i
                                                            className="icon-arrow-down12"/></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="text-center">{"211223452"}</td>
                                                        <td className="text-center">{"白丹"}</td>
                                                        <td className="text-center">{"系统管理员"}</td>
                                                        <td className="text-center">{"2017-06-04"}</td>
                                                        <td className="text-center">{"2017-06-04"}</td>
                                                        <td className="text-center">{"手动单笔"}</td>
                                                        <td className="text-center">{"2017-06-04"}</td>
                                                        <td className="text-center">{"2017-06-04"}</td>
                                                        <td className="text-center">{"汇融易_网页"}</td>
                                                        <td className="text-center">{"监控中"}</td>
                                                        <td className="text-center">{"正常"}</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle"
                                                                       data-toggle="dropdown" aria-expanded="false"><i
                                                                        className="icon-menu7"/></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li style={{display:'block'}}><a
                                                                            href="javascript:void(0)"><i className="icon-trash"/>
                                                                            {"删除"}</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr style={{backgroundColor:"#F8F8F8"}}>
                                                        <td className="text-center">{"211223465"}</td>
                                                        <td className="text-center">{"方舟"}</td>
                                                        <td className="text-center">{"系统管理员"}</td>
                                                        <td className="text-center">{"2017-07-04"}</td>
                                                        <td className="text-center">{"2017-07-04"}</td>
                                                        <td className="text-center">{"手动批量"}</td>
                                                        <td className="text-center">{"2017-07-04"}</td>
                                                        <td className="text-center">{"2017-07-04"}</td>
                                                        <td className="text-center">{"汇融易_网页"}</td>
                                                        <td className="text-center">{"监控中"}</td>
                                                        <td className="text-center">{"正常"}</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle"
                                                                       data-toggle="dropdown" aria-expanded="false"><i
                                                                        className="icon-menu7"/></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li style={{display:'block'}}><a
                                                                            href="javascript:void(0)"><i className="icon-trash"/>
                                                                            {"删除"}</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">{"211223465"}</td>
                                                        <td className="text-center">{"付大海"}</td>
                                                        <td className="text-center">{"系统管理员"}</td>
                                                        <td className="text-center">{"2017-07-24"}</td>
                                                        <td className="text-center">{"2017-07-24"}</td>
                                                        <td className="text-center">{"接口调用"}</td>
                                                        <td className="text-center">{"2017-07-24"}</td>
                                                        <td className="text-center">{"2017-07-24"}</td>
                                                        <td className="text-center">{"汇融易_网页"}</td>
                                                        <td className="text-center">{"监控结束"}</td>
                                                        <td className="text-center">{"正常"}</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle"
                                                                       data-toggle="dropdown" aria-expanded="false"><i
                                                                        className="icon-menu7"/></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
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
                                    <div className="tab-pane" id="monitorSet">
                                        <h3 className="condition-conf-label">请选择您要关注的风险</h3>
                                        <div className="content" style={{marginTop: '20px'}}>
                                            <form id="registerClassifyForm" className="form-horizontal" action="#">
                                                <div className="row" style={{height: tableHeight + 'px', overflowY: 'auto'}}>
                                                    <div className="col-sm-12">
                                                        <fieldset className="content-group">
                                                            <div className="form-group" >
                                                                <div className="col-lg-2" style={{textAlign: 'right'}}>
                                                                    <label className="checkbox-inline" style={{paddingRight: "27px"}}>
                                                                        <input type="checkbox" className="styled"/>
                                                                            风险名单
                                                                    </label>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{textAlign: 'right'}}>{"阈值："}</label>
                                                                <div className="col-lg-1" style={{textAlign: 'left'}}>
                                                                    <input name="name" type="text" className="form-control" defaultValue={5} style={style1}/>
                                                                </div>
                                                                <div className="col-lg-2" style={{textAlign: 'right'}}>
                                                                    <label className="checkbox-inline" style={{paddingRight: "13px"}}>
                                                                        <input type="checkbox" className="styled" />
                                                                        模糊名单
                                                                    </label>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{textAlign: 'right'}}>{"阈值："}</label>
                                                                <div className="col-lg-1" style={{textAlign: 'left'}}>
                                                                    <input name="name" type="text" className="form-control" defaultValue={2} style={style1}/>
                                                                </div>
                                                                <div className="col-lg-2" style={{textAlign: 'right'}}>
                                                                    <label className="checkbox-inline" style={{paddingRight: "13px"}}>
                                                                        <input type="checkbox" className="styled" />
                                                                        关注名单
                                                                    </label>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"阈值："}</label>
                                                                <div className="col-lg-1" style={{textAlign: 'left'}}>
                                                                    <input name="name" type="text" className="form-control" defaultValue={2} style={style1}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group" >
                                                                <div className="col-lg-2" style={{textAlign: 'right'}}>
                                                                    <label className="checkbox-inline">
                                                                        <input type="checkbox" className="styled"/>
                                                                        信贷逾期名单
                                                                    </label>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{textAlign: 'right'}}>{"阈值："}</label>
                                                                <div className="col-lg-1" style={{textAlign: 'left'}}>
                                                                    <input name="name" type="text" className="form-control" defaultValue={1} style={style1}/>
                                                                </div>
                                                                <div className="col-lg-2" style={{textAlign: 'right'}}>
                                                                    <label className="checkbox-inline">
                                                                        <input type="checkbox" className="styled" />
                                                                        多平台申请
                                                                    </label>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{textAlign: 'right'}}>{"阈值："}</label>
                                                                <div className="col-lg-1" style={{textAlign: 'left'}}>
                                                                    <input name="name" type="text" className="form-control" defaultValue={1} style={style1}/>
                                                                </div>
                                                                <div className="col-lg-2" style={{textAlign: 'right'}}>
                                                                    <label className="checkbox-inline">
                                                                        <input type="checkbox" className="styled" />
                                                                        多平台负债
                                                                    </label>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"阈值："}</label>
                                                                <div className="col-lg-1" style={{textAlign: 'left'}}>
                                                                    <input name="name" type="text" className="form-control" defaultValue={1} style={style1}/>
                                                                </div>
                                                            </div>
                                                            <h4 className="condition-conf-label">️注：阈值用来设置触发预警的规则命中数量</h4>
                                                            <div className="form-group form-inline" >
                                                                <label className="col-lg-1 control-label"
                                                                       style={{textAlign: 'right'}}>{"收件人："}</label>
                                                                <div className="col-lg-2" style={{textAlign: 'left'}}>
                                                                    <input name="name" type="text" className="form-control" placeholder="多个邮箱用英文分号隔开" style={{width:"320px"}}/>
                                                                </div>
                                                                <div className="col-lg-1" style={{textAlign: 'left'}}>
                                                                    <button className="btn btn-primary">保存</button>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <fieldset className="content-group">
                                                            <div className="condition-form operate-rules-form">
                                                                <button className="btn btn-primary">初始化规则</button>
                                                            </div>
                                                            <h3 className="condition-conf-label" style={{paddingLeft:"30px"}}>风险名单</h3>
                                                            <div className="panel-group collapsible-sortable content-group-lg" style={{marginLeft:"30px"}}>
                                                                <div className="panel panel-white">
                                                                    <div className="panel-heading">
                                                                        <h6 className="panel-title">
                                                                            <a data-toggle="collapse" href="#risk_1">
                                                                                <span>手机号命中诈骗骚扰库</span>
                                                                            </a>
                                                                        </h6>

                                                                        <div className="heading-elements">
                                                                            <ul className="icons-list">
                                                                                <li><a data-action="close"></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div id="risk_1" className="panel-collapse collapse">
                                                                        <div className="panel-body">
                                                                            <div className="form-horizontal">
                                                                                <fieldset className="content-group">
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"匹配字段"}</label>
                                                                                        <div className="col-lg-3">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>姓名</option>
                                                                                                <option value={2}>手机号</option>
                                                                                                <option value={2}>身份证号</option>
                                                                                                <option value={2}>邮箱</option>
                                                                                                <option value={2}>QQ</option>
                                                                                                <option value={2}>银行卡</option>
                                                                                                <option value={2}>座机号</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"证据类型"}</label>
                                                                                        <div className="col-lg-3">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>姓名</option>
                                                                                                <option value={2}>手机号</option>
                                                                                                <option value={2}>身份证号</option>
                                                                                                <option value={2}>邮箱</option>
                                                                                                <option value={2}>QQ</option>
                                                                                                <option value={2}>银行卡</option>
                                                                                                <option value={2}>座机号</option>
                                                                                                <option value={2}>设备ID</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"风险类型"}</label>
                                                                                        <div className="col-lg-3">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>盗用账户</option>
                                                                                                <option value={2}>商户欺诈</option>
                                                                                                <option value={2}>刑事犯罪</option>
                                                                                                <option value={2}>举报欺诈</option>
                                                                                                <option value={2}>游戏消费失信</option>
                                                                                                <option value={2}>攻击型IP</option>
                                                                                                <option value={2}>虚假号码</option>
                                                                                                <option value={2}>盗卡欺诈</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"证据来源"}</label>
                                                                                        <div className="col-lg-3">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>全局（包含本合作方）</option>
                                                                                                <option value={1}>全局（本合作方除外）</option>
                                                                                                <option value={2}>合作方</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{textAlign: 'center'}}></label>
                                                                                        <div className="col-lg-2">
                                                                                            <div className="text-right">
                                                                                                <button type="button" className="btn btn-primary">
                                                                                                    {"保存"}
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </fieldset>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-white">
                                                                    <div className="panel-heading">
                                                                        <h6 className="panel-title">
                                                                            <a data-toggle="collapse" href="#risk_1">
                                                                                <span>第一联系人身份证命中法院执行名单</span>
                                                                            </a>
                                                                        </h6>

                                                                        <div className="heading-elements">
                                                                            <ul className="icons-list">
                                                                                <li><a data-action="close"></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div id="risk_1" className="panel-collapse collapse">
                                                                        <div className="panel-body">
                                                                            <div className="form-horizontal">
                                                                                <fieldset className="content-group">
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"匹配字段"}</label>
                                                                                        <div className="col-lg-3">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>姓名</option>
                                                                                                <option value={2}>手机号</option>
                                                                                                <option value={2}>身份证号</option>
                                                                                                <option value={2}>邮箱</option>
                                                                                                <option value={2}>QQ</option>
                                                                                                <option value={2}>银行卡</option>
                                                                                                <option value={2}>座机号</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"证据类型"}</label>
                                                                                        <div className="col-lg-3">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>姓名</option>
                                                                                                <option value={2}>手机号</option>
                                                                                                <option value={2}>身份证号</option>
                                                                                                <option value={2}>邮箱</option>
                                                                                                <option value={2}>QQ</option>
                                                                                                <option value={2}>银行卡</option>
                                                                                                <option value={2}>座机号</option>
                                                                                                <option value={2}>设备ID</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"风险类型"}</label>
                                                                                        <div className="col-lg-3">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>盗用账户</option>
                                                                                                <option value={2}>商户欺诈</option>
                                                                                                <option value={2}>刑事犯罪</option>
                                                                                                <option value={2}>举报欺诈</option>
                                                                                                <option value={2}>游戏消费失信</option>
                                                                                                <option value={2}>攻击型IP</option>
                                                                                                <option value={2}>虚假号码</option>
                                                                                                <option value={2}>盗卡欺诈</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"证据来源"}</label>
                                                                                        <div className="col-lg-3">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>全局（包含本合作方）</option>
                                                                                                <option value={1}>全局（本合作方除外）</option>
                                                                                                <option value={2}>合作方</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{textAlign: 'center'}}></label>
                                                                                        <div className="col-lg-2">
                                                                                            <div className="text-right">
                                                                                                <button type="button" className="btn btn-primary">
                                                                                                    {"保存"}
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </fieldset>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="panel panel-white">
                                                                    <div className="panel-heading">
                                                                        <h6 className="panel-title">
                                                                            <a data-toggle="collapse" href="#risk_1">
                                                                                <span>第一联系人身份证命中法院失信名单</span>
                                                                            </a>
                                                                        </h6>

                                                                        <div className="heading-elements">
                                                                            <ul className="icons-list">
                                                                                <li><a data-action="close"></a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div id="risk_1" className="panel-collapse collapse">
                                                                        <div className="panel-body">
                                                                            <div className="form-horizontal">
                                                                                <fieldset className="content-group">
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"匹配字段"}</label>
                                                                                        <div className="col-lg-3">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>姓名</option>
                                                                                                <option value={2}>手机号</option>
                                                                                                <option value={2}>身份证号</option>
                                                                                                <option value={2}>邮箱</option>
                                                                                                <option value={2}>QQ</option>
                                                                                                <option value={2}>银行卡</option>
                                                                                                <option value={2}>座机号</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"证据类型"}</label>
                                                                                        <div className="col-lg-3">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>姓名</option>
                                                                                                <option value={2}>手机号</option>
                                                                                                <option value={2}>身份证号</option>
                                                                                                <option value={2}>邮箱</option>
                                                                                                <option value={2}>QQ</option>
                                                                                                <option value={2}>银行卡</option>
                                                                                                <option value={2}>座机号</option>
                                                                                                <option value={2}>设备ID</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"风险类型"}</label>
                                                                                        <div className="col-lg-3">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>盗用账户</option>
                                                                                                <option value={2}>商户欺诈</option>
                                                                                                <option value={2}>刑事犯罪</option>
                                                                                                <option value={2}>举报欺诈</option>
                                                                                                <option value={2}>游戏消费失信</option>
                                                                                                <option value={2}>攻击型IP</option>
                                                                                                <option value={2}>虚假号码</option>
                                                                                                <option value={2}>盗卡欺诈</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"证据来源"}</label>
                                                                                        <div className="col-lg-3">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>全局（包含本合作方）</option>
                                                                                                <option value={1}>全局（本合作方除外）</option>
                                                                                                <option value={2}>合作方</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-1 control-label"
                                                                                               style={{textAlign: 'center'}}></label>
                                                                                        <div className="col-lg-2">
                                                                                            <div className="text-right">
                                                                                                <button type="button" className="btn btn-primary">
                                                                                                    {"保存"}
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </fieldset>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="riskList">
                                        <div className="content" style={{marginTop: '20px'}}>
                                            <fieldset className="content-group">
                                                <legend className="text-bold">搜索区</legend>
                                                <ul className="list-inline list-inline-condensed no-margin-bottom"
                                                    style={{textAlign: 'right', marginTop: '-59px'}}>
                                                    <li >
                                                        <input id="statistical_report" type="text"
                                                               className="form-control daterange-two"
                                                               placeholder="选择日期" style={style}/>
                                                    </li>
                                                    <li className="form-inline">
                                                        <label className="control-label" style={{paddingRight:"6px"}}>风险类型</label>
                                                        <select id="typeSelect" className="form-control">
                                                            <option value={""}>全部类型</option>
                                                            <option value={1}>风险名单</option>
                                                            <option value={2}>模糊名单</option>
                                                            <option value={3}>灰名单</option>
                                                            <option value={3}>信贷逾期名单</option>
                                                            <option value={3}>多平台申请</option>
                                                            <option value={3}>多平台负债</option>
                                                        </select>
                                                    </li>
                                                    <li>
                                                        <button onClick={this._search.bind(this)} type="button"
                                                                className="btn btn-primary btn-icon"><i
                                                            className="icon-search4"></i>搜索</button>
                                                    </li>
                                                    <li>
                                                        <button onClick={this._search.bind(this)} type="button"
                                                                className="btn btn-primary btn-icon"><i
                                                            className="icon-redo2"></i>导出</button>
                                                    </li>
                                                </ul>
                                            </fieldset>
                                            <div className="table-responsive" style={{height:tableHeight+'px',overflowY:'auto'}}>
                                                <table className="table table-bordered table-hover" style={{marginBottom:'85px'}}>
                                                    <thead>
                                                    <tr style={{fontWeight:'bold'}}>
                                                        <th className="col-md-2 text-bold text-center">{"报告编号/sequenceId/申请编号"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"姓名"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"操作人"}</th>
                                                        <th className="col-md-2 text-bold text-center">{"放款日期"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"逾期风险等级"}</th>
                                                        <th className="col-md-2 text-bold text-center">{"扫描时间"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"应用名"}</th>
                                                        <th className="col-md-2 text-bold text-center">{"风险情况"}</th>
                                                        <th className="text-center" style={{width: "20px"}}><i
                                                            className="icon-arrow-down12"/></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="text-center">{"2112723"}</td>
                                                        <td className="text-center">{"张三"}</td>
                                                        <td className="text-center">{"admin"}</td>
                                                        <td className="text-center">{"2017-06-04"}</td>
                                                        <td className="text-center">{"高"}</td>
                                                        <td className="text-center">{"2017-06-04"}</td>
                                                        <td className="text-center">{"汇融易_网页"}</td>
                                                        <td className="text-center">{""}</td>
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
                                                        <td className="text-center">{"2112732"}</td>
                                                        <td className="text-center">{"李四"}</td>
                                                        <td className="text-center">{"admin"}</td>
                                                        <td className="text-center">{"2017-06-04"}</td>
                                                        <td className="text-center">{"中"}</td>
                                                        <td className="text-center">{"2017-06-04"}</td>
                                                        <td className="text-center">{"汇融易_网页"}</td>
                                                        <td className="text-center">{""}</td>
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
                                                        <td className="text-center">{"2112754"}</td>
                                                        <td className="text-center">{"赵重阳"}</td>
                                                        <td className="text-center">{"admin"}</td>
                                                        <td className="text-center">{"2017-07-24"}</td>
                                                        <td className="text-center">{"中"}</td>
                                                        <td className="text-center">{"2017-07-24"}</td>
                                                        <td className="text-center">{"汇融易_网页"}</td>
                                                        <td className="text-center">{""}</td>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {commonReducer}=state;
    return {

    }
}

export default connect(mapStateToProps)(AfterLoanMonitor)