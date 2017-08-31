/**
 * Created by Captain on 2017/8/28.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FinalResult from "./FinalResult"

class CallManage extends Component{
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
    showDetail(status,score){
        $("#slideInfoDetail").animate({top: "61px", right:"-1500px"});
        $("#riskCoefficient").text(score);
        $("#riskStatus").removeClass();
        $("#riskStatus").addClass(status);
        $("#riskStatus").text(status.toUpperCase());
        $("#slideInfoDetail").animate({top: "61px", right:"0px"});
        progressCounter('#goal-progress', 50, 5, "#E6C85A", score/100);
    }
    closeDetail(){
        $("#slideInfoDetail").animate({top: "61px", right:"-1500px"});
    }
    render(){
        var tableHeight = ($(window).height() - 130);
        var style = {width:"200px"};
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-flat">
                        <div className="panel-body">
                            <div className="tabbable">
                                <ul className="nav nav-pills">
                                    <li className="active"><a href="#callLog" data-toggle="tab">调用日志</a></li>
                                    <li><a href="#manuCall" data-toggle="tab">手工调用</a></li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane active" id="callLog">
                                        <div className="content" style={{marginTop: '20px',margin:0}}>
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
                                                        <label className="control-label" style={{paddingRight:"6px"}}>时间类型</label>
                                                        <select id="typeSelect" className="form-control">
                                                            <option value={""}>全部事件</option>
                                                            <option value={1}>借款事件</option>
                                                            <option value={2}>贷后监控事件</option>
                                                        </select>
                                                    </li>
                                                    <li className="form-inline">
                                                        <label className="control-label" style={{paddingRight:"6px"}}>策略集名称</label>
                                                        <select id="straListSelect" className="form-control">
                                                            <option value={""}>全部策略集</option>
                                                            <option value={1}>借款事件</option>
                                                            <option value={1}>贷后监控</option>
                                                            <option value={2}>借款事件_网站_20170406</option>
                                                            <option value={2}>贷前审核_网站_20170819</option>
                                                        </select>
                                                    </li>
                                                    <li className="form-inline">
                                                        <label className="control-label" style={{paddingRight:"6px"}}>风险类型</label>
                                                        <select id="straSelect" placeholder="请选择策略" className="form-control">
                                                            <option value={""}>全部</option>
                                                            <option value={1}>机构代办</option>
                                                            <option value={2}>失信风险</option>
                                                            <option value={2}>异常借款</option>
                                                            <option value={2}>审核失信风险</option>
                                                            <option value={2}>申请行为异常</option>
                                                        </select>
                                                    </li>
                                                    <li className="form-inline">
                                                        <label className="control-label" style={{paddingRight:"6px"}}>评估结果</label>
                                                        <select id="straSelect" placeholder="请选择策略" className="form-control">
                                                            <option value={""}>全部</option>
                                                            <option value={1}>通过</option>
                                                            <option value={2}>拒绝</option>
                                                            <option value={2}>人工审核</option>
                                                        </select>
                                                    </li>
                                                    <li>
                                                        <button onClick={this._search.bind(this)} type="button"
                                                                className="btn btn-primary btn-icon"><i
                                                            className="icon-search4"/>搜索</button>
                                                    </li>
                                                </ul>
                                            </fieldset>
                                            <div className="table-responsive" style={{height:tableHeight+'px',overflowY:'auto'}}>
                                                <table className="table table-bordered table-hover" style={{marginBottom:'85px'}}>
                                                    <thead>
                                                    <tr style={{fontWeight:'bold'}}>
                                                        <th className="col-md-2 text-bold text-center">{"事件发生时间"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"策略集名称"}</th>
                                                        <th className="col-md-2 text-bold text-center">{"评估结果"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"审核结果"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"事件类型"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"账户"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"设备ID"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"来源IP"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"地理位置"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"应用名称"}</th>
                                                        <th className="text-center" style={{width: "20px"}}><i
                                                            className="icon-arrow-down12"/></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr onClick={this.showDetail.bind(this,"accept",5)}>
                                                        <td className="text-center">{"2017-08-27"}</td>
                                                        <td className="text-center">{"借款事件_网站_20170406"}</td>
                                                        <td className="text-center">
                                                            <FinalResult score={5} status={"accept"}/>
                                                        </td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"借款事件"}</td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"汇融易_网页"}</td>
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
                                                    <tr onClick={this.showDetail.bind(this,"review",45)} style={{backgroundColor:"#F8F8F8"}}>
                                                        <td className="text-center">{"2017-08-27"}</td>
                                                        <td className="text-center">{"借款事件"}</td>
                                                        <td className="text-center"><FinalResult score={45} status={"review"}/></td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"借款事件"}</td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"汇融易_网页"}</td>
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
                                                    <tr onClick={this.showDetail.bind(this,"reject",80)}>
                                                        <td className="text-center">{"2017-08-27"}</td>
                                                        <td className="text-center">{"借款事件"}</td>
                                                        <td className="text-center"><FinalResult score={80} status={"reject"}/></td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"借款事件"}</td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"- -"}</td>
                                                        <td className="text-center">{"汇融易_网页"}</td>
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
                                    <div className="tab-pane" id="manuCall">
                                        <legend className="text-bold"></legend>
                                        <div className="content" style={{marginTop: '2px',padding:0}}>
                                            <div className="panel-body" style={{marginTop: '5px',padding:0}}>
                                                <div className="tabbable" style={{textAlign:"center"}}>
                                                    <ul className="nav nav-pills">
                                                        <li className="active"><a href="#subManuCall" data-toggle="tab">手工调用</a></li>
                                                        <li><a href="#batchCall" data-toggle="tab">批量调用</a></li>
                                                    </ul>
                                                    <div className="tab-content">
                                                        <div className="tab-pane active" id="subManuCall">
                                                            <div className="content" style={{marginTop: '2px',margin:"0"}}>
                                                                <form id="registerClassifyForm" className="form-horizontal" action="#">
                                                                    <div className="row" style={{height: tableHeight + 'px', overflowY: 'auto'}}>
                                                                        <div className="col-sm-12">
                                                                            <form id="registerClassifyForm" className="form-horizontal" action="#">
                                                                                <div className="row" style={{height: tableHeight + 'px', overflowY: 'auto'}}>
                                                                                    <div id="policyRules-hd"><h4 style={{marginLeft:"204px"}}>手工调用</h4></div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-2 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"应用名"}</label>
                                                                                        <div className="col-lg-4">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>汇融易_网页</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-2 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"事件类型"}</label>
                                                                                        <div className="col-lg-4">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>借款事件</option>
                                                                                                <option value={1}>贷后监控事件</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-2 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"事件标识"}</label>
                                                                                        <div className="col-lg-4">
                                                                                            <select id="classify" className="form-control" style={style}>
                                                                                                <option value={1}>Loan_web_20170406</option>
                                                                                                <option value={1}>jiekuan</option>
                                                                                                <option value={1}>jiekuan1</option>
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-2 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"事件时间"}</label>
                                                                                        <div className="col-lg-4">
                                                                                            <input id="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="form-group">
                                                                                        <label className="col-lg-2 control-label"
                                                                                               style={{
                                                                                                   textAlign: 'right'
                                                                                               }}>{"借款人工作单位"}</label>
                                                                                        <div className="col-lg-4">
                                                                                            <input id="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane" id="batchCall">
                                                            <div className="content" style={{marginTop: '2px',margin:"0"}}>
                                                                <form id="registerClassifyForm" className="form-horizontal" action="#">
                                                                    <div className="row" style={{height: tableHeight + 'px', overflowY: 'auto'}}>
                                                                        <div className="form-group">
                                                                            <label className="col-lg-2 control-label"
                                                                                   style={{
                                                                                       textAlign: 'right'
                                                                                   }}>{"应用名"}</label>
                                                                            <div className="col-lg-4">
                                                                                <select id="classify" className="form-control" style={style}>
                                                                                    <option value={1}>汇融易_网页</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label className="col-lg-2 control-label"
                                                                                   style={{
                                                                                       textAlign: 'right'
                                                                                   }}>{"事件类型"}</label>
                                                                            <div className="col-lg-4">
                                                                                <select id="classify" className="form-control" style={style}>
                                                                                    <option value={1}>借款事件</option>
                                                                                    <option value={1}>贷后监控事件</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label className="col-lg-2 control-label"
                                                                                   style={{
                                                                                       textAlign: 'right'
                                                                                   }}>{"事件标识"}</label>
                                                                            <div className="col-lg-4">
                                                                                <select id="classify" className="form-control" style={style}>
                                                                                    <option value={1}>Loan_web_20170406</option>
                                                                                    <option value={1}>jiekuan</option>
                                                                                    <option value={1}>jiekuan1</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
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
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="slideInfoDetail" style={{height: tableHeight+"px", width: "1413px",top: "61px",right:"-1500px",display:"block"}}>
                    <div className="slideInfoContent">
                        <div className="column-left">
                            <section id="baseInfo" className="box activity">
                                <div className="activity-title">
                                    <h2>风险决策</h2>
                                </div>
                                <div className="activity-content">
                                    <div className="activity-base">
                                        <div className="canvas-score-wp">
                                            <div className="canvas-score">
                                                <div className="content-group-sm svg-center position-relative" id="goal-progress"></div>
                                            </div>
                                        </div>
                                        <ul className="activity-list">
                                            <li>
                                                <label>sequenceID</label>
                                                <span id="sequence_id">1503970256666280T0B5655405742149</span></li>
                                            <li>
                                                <label>事件标识</label>
                                                <span id="eventId">Loan_web_20170406</span></li>
                                        </ul>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="activity-hit">
                                        <div className="activity-hit-title">
                                            <h5>风险详情</h5>
                                        </div>
                                        <div className="activity-hit-content hit-list">
                                            <ul className="activity-list activity-hit-policy" style={{overflow: "hidden", marginTop: "10px", marginBottom: "10px"}}>
                                                <li><label>策略名称</label><span>异常借款</span></li><li><label>风险状态</label><span id="riskStatus" className="accept">Accept</span></li>
                                                <li><label>风险系数</label><span id="riskCoefficient">5</span></li><li><label>风险类型</label><span>异常借款</span></li>
                                                <li><label>命中规则：</label><ul className="hit-policy-rule-list has-detail"><li>
                                                    <a>7天内设备或身份证或手机号申请次数过多</a></li></ul></li></ul></div>
                                    </div>
                                </div>
                            </section>
                            <div className="column-right">
                                <section id="ipInfo" className="box activity">
                                    <div className="activity-title">
                                        <h2>IP信息</h2>
                                    </div>
                                    <div className="activity-content">
                                        <ul className="activity-list ip-list">

                                            <li>
                                                <label>来源IP</label>
                                                <span id="ipAddress" className="font-color-blue">-</span></li>
                                            <li>
                                                <label>地理位置</label>
                                                <span id="ipGeoLocation">-</span></li>
                                            <li>
                                                <label>经度</label>
                                                <span id="ipLongitude">-</span></li>
                                            <li>
                                                <label>纬度</label>
                                                <span id="ipLatitude">-</span></li>
                                            <li>
                                                <label>运营商</label>
                                                <span id="ipIsp">-</span></li>
                                            <li>
                                                <label>IP类型</label>
                                                <span id="ipType">未知</span></li>
                                            <li>
                                                <label>IP风险评分</label>
                                                <span id="ipRiskScore">0</span></li>
                                        </ul>
                                        <ul className="activity-list ip-list ipJudge">
                                            <li>
                                                <label>真实IP</label>
                                                <span id="trueIpAddress" className="font-color-blue">-</span></li>
                                            <li>
                                                <label>地理位置</label>
                                                <span id="trueGeoLocation">-</span></li>
                                            <li>
                                                <label>经度</label>
                                                <span id="trueIpLongitude">-</span></li>
                                            <li>
                                                <label>纬度</label>
                                                <span id="trueIpLatitude">-</span></li>
                                            <li>
                                                <label>运营商</label>
                                                <span id="trueIpIsp">-</span></li>
                                            <li>
                                                <label>IP类型</label>
                                                <span id="trueIpType">未知</span></li>
                                            <li>
                                                <label>IP风险评分</label>
                                                <span id="trueIpRiskScore">0</span></li>
                                        </ul>
                                        <ul className="activity-list ip-list ipJudge">
                                            <li>
                                                <label>代理检测</label>
                                                <span id="proxyIs">否</span></li>
                                            <li>
                                                <label>代理类型</label>
                                                <span id="proxyType">-</span></li>
                                            <li>
                                                <label>代理端口</label>
                                                <span id="proxyPort">-</span></li>
                                            <li>
                                                <label>行为历史</label>
                                                <span id="proxyHistory">-</span></li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div id="mobilePhoneInfo" className="box activity">
                            <div className="activity-title">
                                <h2>手机号信息</h2>
                            </div>
                            <div className="activity-content">
                                <ul className="activity-list mobile-list">
                                    <li>
                                        <label>手机号</label>
                                        <span id="mobileNumber" className="font-color-blue">15145175976</span>
                                    </li>
                                    <li>
                                        <label>运营商</label>
                                        <span id="mobileCarriers">-</span>
                                    </li>
                                </ul>
                                <ul className="activity-list mobile-list">
                                    <li>
                                        <label>归属地</label>
                                        <span id="mobileAttributions">-</span>
                                    </li>
                                    <li>
                                        <label>卡种</label>
                                        <span id="mobileCardType">-</span>
                                    </li>
                                </ul>
                                <ul className="activity-list mobile-list">
                                    <li>
                                        <label>虚假号码</label>
                                        <span id="mobileUnrealNumber">否</span>
                                    </li>
                                    <li>
                                        <label>通信小号</label>
                                        <span id="mobileTrumpet">否</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div id="deviceInfo" className="box activity">
                            <div className="activity-title">
                                <h2>设备环境</h2>
                            </div>
                            <div className="activity-content">
                                <div id="device_exception">获取失败; 没有传递设备指纹参数</div>
                            </div>
                        </div>
                        <section id="fieldInfo" className="box activity">
                            <div className="activity-title">
                                <h2>业务数据</h2>
                            </div>
                            <div className="activity-content">
                                <ul className="activity-list field-base-info tem-hide">
                                    <li>
                                        <label>设备智能ID</label>
                                        <span id="smartId"></span></li>
                                    <li>
                                        <label>事件时间</label>
                                        <span id="eventTime">2017-08-29 09:30:56</span></li>
                                </ul>
                                <ul className="activity-list field-other-info">
                                    <li><label>身份证归属区县</label><span id="idCardCounty">肇东市</span></li>
                                    <li className="tem-hide"><label>合作方标示</label><span id="partnerCode">huiry</span></li>
                                    <li><label>借款人手机</label><span id="accountMobile">15145175976</span></li><li><label>借款人姓名</label><span id="accountName">霍志敏</span></li>
                                    <li><label>手机号格式校验</label><span id="mobileFormatVerify">true</span></li><li><label>借款人身份证</label><span id="idNumber">232303196605203239</span></li>
                                    <li><label>调用ID</label><span id="sequenceId">1503970256666280T0B5655405742149</span></li><li><label>手机归属城市</label><span id="mobileAddressCity">哈尔滨市</span></li>
                                    <li><label>身份证解析年龄</label><span id="idAge">51</span></li><li><label>合作方密钥</label><span id="partnerKey">0a0c5a7e14b743fcbf9fab94b2e0d224</span></li>
                                    <li><label>事件发生星期</label><span id="eventOccurWeek">2</span></li><li><label>身份证归属省份</label><span id="idCardProvince">黑龙江省</span></li>
                                    <li className="tem-hide"><label>应用名</label><span id="appName">huiry_web</span></li><li><label>手机号后8位</label><span id="mobileL8">45175976</span></li>
                                    <li><label>手机归属省份</label><span id="mobileAddressProvince">黑龙江省</span></li><li><label>身份证格式校验</label><span id="idFormatVerify">true</span></li>
                                    <li><label>身份证归属城市</label><span id="idCardCity">绥化地区</span></li>
                                </ul>
                            </div>
                        </section>
                    </div>
                    <a href="javascript:void(0);" id="slideControler" onClick={this.closeDetail.bind(this)} style={{top: "159.5px"}}/>
                </div>
            </div>
        )
    }
}
function progressCounter(element, radius, border, color, end) {


    // Basic setup
    // ------------------------------

    // Main variables
    var d3Container = d3.select(element),
        startPercent = 0,
        iconSize = 32,
        endPercent = end,
        twoPi = Math.PI * 2,
        formatPercent = d3.format('.0%'),
        boxSize = radius * 2;

    // Values count
    var count = Math.abs((endPercent - startPercent) / 0.01);

    // Values step
    var step = endPercent < startPercent ? -0.01 : 0.01;



    // Create chart
    // ------------------------------

    // Add SVG element
    var container = d3Container.append('svg');

    // Add SVG group
    var svg = container
        .attr('width', boxSize)
        .attr('height', boxSize)
        .append('g')
        .attr('transform', 'translate(' + (boxSize / 2) + ',' + (boxSize / 2) + ')');



    // Construct chart layout
    // ------------------------------

    // Arc
    var arc = d3.svg.arc()
        .startAngle(0)
        .innerRadius(radius)
        .outerRadius(radius - border);



    //
    // Append chart elements
    //

    // Paths
    // ------------------------------

    // Background path
    svg.append('path')
        .attr('class', 'd3-progress-background')
        .attr('d', arc.endAngle(twoPi))
        .style('fill', '#eee');

    // Foreground path
    var foreground = svg.append('path')
        .attr('class', 'd3-progress-foreground')
        .attr('filter', 'url(#blur)')
        .style('fill', color)
        .style('stroke', color);

    // Front path
    var front = svg.append('path')
        .attr('class', 'd3-progress-front')
        .style('fill', color)
        .style('fill-opacity', 1);



    // Text
    // ------------------------------

    // Percentage text value

    // Icon
    d3.select(element)
        .append("div")
        .attr("class", "counter-icon")
        .attr('style', 'top: ' + ((boxSize - iconSize) / 2 - 9) + 'px')
        .text(count);

    // Animation
    // ------------------------------

    // Animate path
    function updateProgress(progress) {
        foreground.attr('d', arc.endAngle(twoPi * progress));
        front.attr('d', arc.endAngle(twoPi * progress));
    }

    // Animate text
    var progress = startPercent;
    (function loops() {
        updateProgress(progress);
        if (count > 0) {
            count--;
            progress += step;
            setTimeout(loops, 10);
        }
    })();
}
function mapStateToProps(state) {
    const {commonReducer}=state;
    return {

    }
}

export default connect(mapStateToProps)(CallManage)