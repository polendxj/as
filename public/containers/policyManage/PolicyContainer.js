/**
 * Created by Captain on 2017/8/22.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'
import {ListMiddleModal} from '../../components/Tool/Tool';
import {commonRefresh} from '../../actions/Common';

class PolicyContainer extends Component{
    constructor(props) {
        super(props);
        this.count = 0;
        this.showTemplate = 0;
        this.listFlag = false;
        this._startRefresh=this._startRefresh.bind(this);
    }
    componentDidMount(){
        var that = this;
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
        $(".styled, .multiselect-container input").uniform({
            radioClass: 'choice'
        });
        $(".styled").click(function () {
            that.showTemplate = parseInt($('.choice .checked input[name="homeNotice"]').val());
            that._startRefresh();
        })
    }
    componentWillUnmount(){
        this.count = 0;
        this.showTemplate = 0;
    }
    _startRefresh(){
        this.props.dispatch(commonRefresh())
    }
    showDetail(){
        $("#policy-detail").animate({top: "61px", right:"0px"});
    }
    closeDetail(){
        $("#policy-detail").animate({top: "61px", right:"-500px"});
    }
    detail(e){
        e.stopPropagation();
        browserHistory.push("/policyDetail");
    }
    _createList(){
        this.listFlag = true;
        this._startRefresh();
    }
    _cancel(){
        this.listFlag = false;
        this._startRefresh();
    }
    _save(){
        $("#createPolicyListModal").modal("hide");
    }
    _close(){
        $("#createPolicyListModal").modal("hide");
    }
    _save1(){
        $("#createPolicyModal").modal("hide");
    }
    _close1(){
        $("#createPolicyModal").modal("hide");
    }
    render(){
        var style = {width:"175px"};
        var style1 = {width:"300px"};
        var createPolicyList =
            <div>
                <div className="form-horizontal">
                    <fieldset className="content-group">
                        <legend className="text-bold"/>
                        <div className="form-group">
                            <label className="col-lg-4 control-label"
                                   style={{textAlign: 'right'}}>{"策略集名称"}</label>
                            <div className="col-lg-7">
                                <input id="name" type="text" className="form-control" autoComplete="off" style={style1}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-4 control-label"
                                   style={{
                                       textAlign: 'right'
                                   }}>{"应用名"}</label>
                            <div className="col-lg-7">
                                <select id="classify" className="form-control" style={style1}>
                                    <option value={1}>汇融易_网页</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-4 control-label"
                                   style={{
                                       textAlign: 'right'
                                   }}>{"事件类型"}</label>
                            <div className="col-lg-7">
                                <select id="classify" className="form-control" style={style1}>
                                    <option value={1}>借款事件</option>
                                    <option value={2}>贷后监控事件</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-4 control-label"
                                   style={{textAlign: 'right'}}>{"事件标识"}</label>
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
                                   style={{textAlign: 'center'}}></label>
                            <div className="col-lg-7">
                                <div className="text-right">
                                    <button type="button" className="btn btn-primary"
                                            onClick={this._save.bind(this)}>
                                        {"确定"}
                                    </button>
                                    <button type="button" className="btn btn-primary"
                                            style={{margin:"0 10px"}}
                                            onClick={this._close.bind(this)}>{"取消"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>;
        var createPolicy =
            <div>
                <div className="form-horizontal">
                    <fieldset className="content-group">
                        <legend className="text-bold"/>
                        <div className="form-group">
                            <label className="col-lg-4 control-label"
                                   style={{textAlign: 'right'}}>{"策略名称"}</label>
                            <div className="col-lg-7">
                                <input id="name" type="text" className="form-control" autoComplete="off" style={style1}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-4 control-label"
                                   style={{
                                       textAlign: 'right'
                                   }}>{"风险类型"}</label>
                            <div className="col-lg-7">
                                <select id="classify" className="form-control" style={style1}>
                                    <option value={1}>机构代办</option>
                                    <option value={2}>失信风险</option>
                                    <option value={3}>异常借款</option>
                                    <option value={4}>审核失信风险</option>
                                    <option value={5}>申请行为异常</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-4 control-label"
                                   style={{
                                       textAlign: 'right'
                                   }}>{"使用模板："}</label>
                            <div className="col-lg-7">
                                <label className="radio-inline">
                                    <input type="radio" name="homeNotice" value={1} className="styled" />
                                    是
                                </label>
                                <label className="radio-inline">
                                    <input type="radio" name="homeNotice" value={0} className="styled" checked="checked"/>
                                    否
                                </label>
                            </div>
                        </div>
                        <div className="form-group" style={{display:this.showTemplate===0?"none":"block"}}>
                            <label className="col-lg-4 control-label"
                                   style={{
                                       textAlign: 'right'
                                   }}>{"策略模板"}</label>
                            <div className="col-lg-7">
                                <select id="classify" className="form-control" style={style1}>
                                    <option value={1}>通用借款_机构代办_网站</option>
                                    <option value={2}>三方数据服务</option>
                                    <option value={3}>中小企业信贷风险</option>
                                    <option value={4}>通用借款_异常借款_网站</option>
                                    <option value={5}>通用借款_失信借款_网站</option>
                                    <option value={6}>欺诈行为_网页</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-lg-4 control-label"
                                   style={{
                                       textAlign: 'right'
                                   }}>{"策略模式"}</label>
                            <div className="col-lg-7">
                                <select id="classify" className="form-control" style={style1}>
                                    <option value={1}>首次匹配</option>
                                    <option value={2}>最坏匹配</option>
                                    <option value={3}>权重模式</option>
                                </select>
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
        var modifyRuleList = <div>
            <div className="form-horizontal">
                <fieldset className="content-group">
                    <legend className="text-bold"/>
                    <div className="form-group">
                        <label className="col-lg-4 control-label"
                               style={{
                                   textAlign: 'right'
                               }}>{"规则所属分组"}</label>
                        <div className="col-lg-7">
                            <select id="classify" className="form-control" style={style}>
                                <option value={1}>个人基本信息核查</option>
                                <option value={2}>不良信息扫描</option>
                                <option value={3}>多平台借贷申请检测</option>
                                <option value={4}>多平台借贷负债检测</option>
                                <option value={5}>关联人信息扫描</option>
                                <option value={6}>客户行为检测</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-4 control-label"
                               style={{
                                   textAlign: 'right'
                               }}>{"风险定级方式"}</label>
                        <div className="col-lg-7">
                            <select id="classify" className="form-control" style={style}>
                                <option value={1}>命中情况</option>
                                <option value={2}>风险权重</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-4 control-label"
                               style={{
                                   textAlign: 'right'
                               }}>{"风险权重区间"}</label>
                        <div className="col-lg-7">
                            <select id="classify" className="form-control" style={style}>
                                <option value={1}>高</option>
                                <option value={2}>中</option>
                                <option value={3}>低</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-lg-4 control-label"
                               style={{
                                   textAlign: 'right'
                               }}>{"规则描述展示"}</label>
                        <div className="col-lg-7">
                            <select id="classify" className="form-control" style={style}>
                                <option value={1}>是</option>
                                <option value={2}>否</option>
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
        var ruleListManage = <div className="padding-wrap pform">
            <button className="btn btn-primary" style={{marginLeft: "30px"}} onClick={this._createList.bind(this)}>新建分组</button>
            <div className="ruleGroup-table">
                <table>
                    <thead>
                    <tr>
                        <th style={{width: "10%"}}>排序</th>
                        <th style={{width: "50%"}}>分组名称</th>
                        <th>操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>个人基本信息核查</td>
                        <td>
                            <button className="ruleGroup-button ruleGroup-edit blue" style={{marginRight:'8px'}}>修改</button>
                            <button className="ruleGroup-button ruleGroup-delete gray" data-code="baseInfo">删除</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>不良信息扫描</td>
                        <td>
                            <button className="ruleGroup-button ruleGroup-edit blue" style={{marginRight:'8px'}}>修改</button>
                            <button className="ruleGroup-button ruleGroup-delete gray" data-code="badRecord">删除</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>多平台借贷申请检测</td>
                        <td>
                            <button className="ruleGroup-button ruleGroup-edit blue" style={{marginRight:'8px'}}>修改</button>
                            <button className="ruleGroup-button ruleGroup-delete gray" data-code="multiPlatformApply">删除</button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>多平台借贷负债检测</td>
                        <td>
                            <button className="ruleGroup-button ruleGroup-edit blue" style={{marginRight:'8px'}}>修改</button>
                            <button className="ruleGroup-button ruleGroup-delete gray" data-code="da181c8321ae44aeb6bc7e54a39f61f0">删除</button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>关联人信息扫描</td>
                        <td>
                            <button className="ruleGroup-button ruleGroup-edit blue" style={{marginRight:'8px'}}>修改</button>
                            <button className="ruleGroup-button ruleGroup-delete gray" data-code="contactInfo">删除</button>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>客户行为检测</td>
                        <td>
                            <button className="ruleGroup-button ruleGroup-edit blue" style={{marginRight:'8px'}}>修改</button>
                            <button className="ruleGroup-button ruleGroup-delete gray" data-code="deviceInfo">删除</button>
                        </td>
                    </tr>

                    <tr style={{display:this.listFlag?"table-row":"none"}}>
                        <td>7</td>
                        <td><input type="text" className="form-control" placeholder="请输入分组名称" /></td>
                        <td>
                            <button className="ruleGroup-button ruleGroup-submit blue" style={{marginRight:'8px'}}>提交</button>
                            <button className="ruleGroup-button ruleGroup-cancel gray" onClick={this._cancel.bind(this)}>取消</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-flat">
                        <div className="panel-body">
                            <div className="tabbable">
                                <ul className="nav nav-pills">
                                    <li className="active"><a href="#basic-pill1" data-toggle="tab">策略集列表</a></li>
                                    <li><a href="#basic-pill2" data-toggle="tab">分组配置</a></li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane active" id="basic-pill1">
                                        <div className="content" style={{marginTop: '20px'}}>
                                            <fieldset className="content-group">
                                                <legend className="text-bold"></legend>
                                                <ul className="list-inline list-inline-condensed no-margin-bottom"
                                                    style={{textAlign: 'right', marginTop: '-59px'}}>
                                                    <li>
                                                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#createPolicyListModal">
                                                            {"新建策略集"}
                                                        </button>
                                                    </li>
                                                </ul>
                                            </fieldset>
                                            <fieldset className="content-group">
                                                <div className="panel-group collapsible-sortable content-group-lg">
                                                    <div className="panel panel-white">
                                                        <div className="panel-heading">
                                                            <h6 className="panel-title">
                                                                <a data-toggle="collapse" href="#collapsible-controls-group1">
                                                                    <span style={{color: "#b4b4b4"}}>[所属应用：汇融易_网页]</span>
                                                                    <span>借款事件</span>
                                                                </a>
                                                            </h6>

                                                            <div className="heading-elements">
                                                                <ul className="icons-list">
                                                                    <li><a><i className="icon-plus2" data-toggle="modal" data-target="#createPolicyModal" style={{fontSize:"18px"}}></i></a></li>
                                                                    <li><a><i className=" icon-pencil5" style={{fontSize:"16px"}}></i></a></li>
                                                                    <li><a data-action="close"></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div id="collapsible-controls-group1" className="panel-collapse collapse">
                                                            <div className="panel-body" onClick={this.showDetail.bind(this)}>
                                                                <span style={{color: "#b4b4b4"}}>[汇融易_网页]</span>
                                                                <a onClick={this.detail.bind(this)}>借款事件1</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="panel panel-white">
                                                        <div className="panel-heading">
                                                            <h6 className="panel-title">
                                                                <a data-toggle="collapse" href="#collapsible-controls-group2">
                                                                    <span style={{color: "#b4b4b4"}}>[所属应用：汇融易_网页]</span>
                                                                    <span>贷后监控</span>
                                                                </a>
                                                            </h6>

                                                            <div className="heading-elements">
                                                                <ul className="icons-list">
                                                                    <li><a><i className="icon-plus2" data-toggle="modal" data-target="#createPolicyModal" style={{fontSize:"18px"}}></i></a></li>
                                                                    <li><a><i className=" icon-pencil5" style={{fontSize:"16px"}}></i></a></li>
                                                                    <li><a data-action="close"></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div id="collapsible-controls-group2" className="panel-collapse collapse">
                                                            <div className="panel-body" onClick={this.showDetail.bind(this)}>
                                                                <span style={{color: "#b4b4b4"}}>[汇融易_网页]</span>
                                                                <a onClick={this.detail.bind(this)}>借款事件2</a>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="panel panel-white">
                                                        <div className="panel-heading">
                                                            <h6 className="panel-title">
                                                                <a data-toggle="collapse" href="#collapsible-controls-group3">
                                                                    <span style={{color: "#b4b4b4"}}>[所属应用：汇融易_网页]</span>
                                                                    <span>借款事件_网站_20170406</span>
                                                                </a>
                                                            </h6>

                                                            <div className="heading-elements">
                                                                <ul className="icons-list">
                                                                    <li><a><i className="icon-plus2" data-toggle="modal" data-target="#createPolicyModal" style={{fontSize:"18px"}}></i></a></li>
                                                                    <li><a><i className=" icon-pencil5" style={{fontSize:"16px"}}></i></a></li>
                                                                    <li><a data-action="close"></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div id="collapsible-controls-group3" className="panel-collapse collapse">
                                                            <div className="panel-body" onClick={this.showDetail.bind(this)}>
                                                                <span style={{color: "#b4b4b4"}}>[汇融易_网页]</span>
                                                                <a onClick={this.detail.bind(this)}>借款事件3</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="basic-pill2">
                                        <div className="content" style={{marginTop: '20px'}}>
                                            <fieldset className="content-group">
                                                <legend className="text-bold"></legend>
                                                <ul className="list-inline list-inline-condensed no-margin-bottom"
                                                    style={{textAlign: 'right', marginTop: '-59px'}}>
                                                    <li> <label>策略集：</label></li>
                                                    <li>
                                                        <select id="typeSelect" className="form-control">
                                                            <option value={1}>借款事件</option>
                                                            <option value={2}>贷前审核_网站_20170819</option>
                                                            <option value={3}>借款事件_网站_20170406</option>
                                                        </select>
                                                    </li>
                                                    <li> <label>策略：</label></li>
                                                    <li>
                                                        <select id="typeSelect" className="form-control">
                                                            <option value={1}>借款事件1</option>
                                                            <option value={2}>借款事件2</option>
                                                            <option value={3}>借款事件3</option>
                                                        </select>
                                                    </li>
                                                    <li>
                                                        <button type="button"
                                                                className="btn btn-primary btn-icon" data-toggle="modal" data-target="#RuleListManageModal">
                                                            分组管理
                                                        </button>
                                                    </li>
                                                </ul>
                                            </fieldset>
                                            <fieldset className="content-group">
                                                <div className="ruleGroup-info">
                                                    <div className="ruleGroup-each">
                                                        <h4>个人基本信息核查</h4>
                                                        <div>
                                                            <div className="rule-each">
                                                                <span className="rule-each-id">[编号：2112653]</span>
                                                                <span className="rule-each-name">身份证格式校验错误</span>
                                                                <span className="rule-each-risk">风险定级方式：命中情况：高</span>
                                                                <button className="rule-edit-button" data-toggle="modal" data-target="#modifyRuleListModal">修改</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ruleGroup-each">
                                                        <h4>未分组规则</h4>
                                                        <div>
                                                            <div className="rule-each">
                                                                <span className="rule-each-id">[编号：2112655]</span>
                                                                <span className="rule-each-name">身份证不是二代身份证</span>
                                                                <span className="rule-each-risk">风险定级方式：－</span>
                                                                <button className="rule-edit-button" data-toggle="modal" data-target="#modifyRuleListModal">修改</button>
                                                            </div>
                                                            <div className="rule-each">
                                                                <span className="rule-each-id">[编号：2112657]</span>
                                                                <span className="rule-each-name">身份证归属地位于高风险较为集中地区</span>
                                                                <span className="rule-each-risk">风险定级方式：－</span>
                                                                <button className="rule-edit-button" data-toggle="modal" data-target="#modifyRuleListModal">修改</button>
                                                            </div>
                                                            <div className="rule-each">
                                                                <span className="rule-each-id">[编号：2112659]</span>
                                                                <span className="rule-each-name">手机号格式校验错误</span>
                                                                <span className="rule-each-risk">风险定级方式：－</span>
                                                                <button className="rule-edit-button"  data-toggle="modal" data-target="#modifyRuleListModal">修改</button>
                                                            </div>
                                                            <div className="rule-each">
                                                                <span className="rule-each-id">[编号：2112661]</span>
                                                                <span className="rule-each-name">手机号命中虚假号码库</span>
                                                                <span className="rule-each-risk">风险定级方式：－</span>
                                                                <button className="rule-edit-button"  data-toggle="modal" data-target="#modifyRuleListModal">修改</button>
                                                            </div>
                                                            <div className="rule-each">
                                                                <span className="rule-each-id">[编号：2112663]</span>
                                                                <span className="rule-each-name">手机号命中通信小号库</span>
                                                                <span className="rule-each-risk">风险定级方式：－</span>
                                                                <button className="rule-edit-button"  data-toggle="modal" data-target="#modifyRuleListModal">修改</button>
                                                            </div>
                                                            <div className="rule-each">
                                                                <span className="rule-each-id">[编号：2112665]</span>
                                                                <span className="rule-each-name">手机号命中诈骗骚扰库</span>
                                                                <span className="rule-each-risk">风险定级方式：－</span>
                                                                <button className="rule-edit-button"  data-toggle="modal" data-target="#modifyRuleListModal">修改</button>
                                                            </div>
                                                            <div className="rule-each">
                                                                <span className="rule-each-id">[编号：2112667]</span>
                                                                <span className="rule-each-name">手机号疑似乱填</span>
                                                                <span className="rule-each-risk">风险定级方式：－</span>
                                                                <button className="rule-edit-button"  data-toggle="modal" data-target="#modifyRuleListModal">修改</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="policy-detail" className="policy-detail" style={{top: "61px", width: "480px", right:"-500px",display:"block"}}>
                    <div className="policy-detail-title">
                        <i className="icon-clipboard6 title-pre"/>
                        <span className="policy-detail-title-text">借款事件1</span>
                        <i className="icon-cross title-close fr" onClick={this.closeDetail.bind(this)} style={{fontSize:"18px"}}/>
                    </div>
                    <div className="policy-detail-base">
                        <div className="policy-detail-group">
                            <label>所属应用</label><span>汇融易_网页</span>
                        </div>
                        <div className="policy-detail-group">
                            <label>事件类型</label><span>借款事件</span>
                        </div>
                        <div className="policy-detail-group">
                            <label>事件标识</label><span>jiekuan</span>
                        </div>
                        <div className="policy-detail-group">
                            <label>风险类型</label><span>异常借款</span>
                        </div>
                        <div className="policy-detail-group">
                            <label>策略模式</label><span>首次匹配</span>
                        </div>
                        <div className="policy-detail-group">
                            <label>风险阈值</label><span></span>
                        </div>
                        <div className="policy-detail-group">
                            <label>策略描述</label><span>暂无描述</span>
                        </div>
                    </div>
                    <div className="policy-detail-modify">
                        <div className="policy-detail-group">
                            <label>最后修改</label><span></span>
                        </div>
                        <div className="policy-detail-group">
                            <label></label><span class="modify-ip"></span><span class="modify-date"></span>
                        </div>
                    </div>
                    <div className="policy-detail-sep"></div>
                    <div className="policy-detail-rule">
                        <h4>规则列表</h4>
                        <div className="policy-detail-status">
                            当前策略规则：<span data-color-="">5</span>条，启用：<span>0</span>条，禁用：<span>5</span>条
                        </div>
                        <ul className="policy-detail-ruleList">
                            <li><a disabled="true" href="javascript:void(0)">身份证格式校验错误</a></li>
                            <li><a disabled="true" href="javascript:void(0)">身份证不是二代身份证</a></li>
                            <li><a disabled="true" href="javascript:void(0)">身份证归属地位于高风险较为集中地区</a></li>
                            <li><a disabled="true" href="javascript:void(0)">手机号格式校验错误</a></li>
                            <li><a disabled="true" href="javascript:void(0)">手机号命中虚假号码库</a></li>
                        </ul>
                    </div>
                </div>
                <ListMiddleModal id="createPolicyListModal" content={createPolicyList}
                                 doAction={""}
                                 tip={"添加策略集"} actionText="添加策略集" hide="true" hideCancel="true"/>
                <ListMiddleModal id="createPolicyModal" content={createPolicy}
                                 doAction={""}
                                 tip={"添加策略"} actionText="添加策略" hide="true" hideCancel="true"/>
                <ListMiddleModal id="modifyRuleListModal" content={modifyRuleList}
                                 doAction={""}
                                 tip={"修改"} actionText="修改" hide="true" hideCancel="true" width={600}/>
                <ListMiddleModal id="RuleListManageModal" content={ruleListManage}
                                 doAction={""}
                                 tip={"修改"} actionText="修改" hide="true" hideCancel="true"/>
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

export default connect(mapStateToProps)(PolicyContainer)