/**
 * Created by Captain on 2017/9/9.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FinalResult from "./FinalResult"
import {commonRefresh} from '../../actions/Common';

class CallList extends Component{
    constructor(props) {
        super(props);
        this.condition = 1;
        this.sortParam = "事件发生时间";
        this.sort = "降序";
        this._startRefresh=this._startRefresh.bind(this);
    }
    componentDidMount(){
        $(".selectbox-custom-icon").selectBoxIt({
            autoWidth: false,
            // Set a custom down arrow icon by adding new CSS class(s)
            downArrowIcon: "none"
        });
    }
    _startRefresh(){
        this.props.dispatch(commonRefresh())
    }
    _search(){

    }
    changeCondition(){
        $("#setValue").val("");
        this.condition = $("#condition").val();
        this._startRefresh();
    }
    changeValue1(){
        var value = "";
        value = value + $("#condition").find("option:selected").text();
        value = value + $("#logic2").find("option:selected").text();
        value = value + $("#conditionValue1").val();
        $("#setValue").val(value);
    }
    changeValue(){
        var last = "";
        if(this.condition==1){
            last = "次";
        }else if(this.condition==2||this.condition==3){
            last = "个";
        }else if(this.condition==4){
            last = "万元";
        }
        var value = "";
        value = value + $("#condition").find("option:selected").text();
        value = value + $("#logic").find("option:selected").text();
        value = value + $("#conditionValue").val()+last;
        $("#setValue").val(value);
        $("#setValue").width(textWidth($("#setValue").val()));
    }
    changeLogic(){
        var last = "";
        if(this.condition==1){
            last = "次";
        }else if(this.condition==2||this.condition==3){
            last = "个";
        }else if(this.condition==4){
            last = "万元";
        }
        var value = "";
        value = value + $("#condition").find("option:selected").text();
        value = value + $("#logic").find("option:selected").text();
        value = value + $("#conditionValue").val()+last;
        $("#setValue").val(value);
        $("#setValue").width(textWidth($("#setValue").val()));
    }
    changeLogic2(){
        var value = "";
        value = value + $("#condition").find("option:selected").text();
        value = value + $("#logic2").find("option:selected").text();
        value = value + $("#conditionValue1").val();
        $("#setValue").val(value);
    }
    changeSortParam(){
        var value = "";
        value = value + $("#sortParam").find("option:selected").text();
        $("#sortParamInput").val(value);
    }
    changeSort(){
        var value = "";
        value = value + $("#sort").find("option:selected").text();
        $("#sortInput").val(value);
    }
    render(){
        var tableHeight = ($(window).height() - 130);
        var style = {width:"200px"};
        return(
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
                                            <div className="panel panel-white">
                                                <div className="panel-heading">
                                                    <h6 className="panel-title">
                                                        <div>
                                                            <div>
                                                                <div style={{position: 'relative',float:"left",display:this.condition!=5?"block":"none"}}>
                                                                    <select className="selectbox selectbox-auto selectbox-custom-icon">
                                                                        <option value={1}>1天</option>
                                                                        <option value={2}>7天</option>
                                                                        <option value={3}>1个月</option>
                                                                        <option value={4}>3个月</option>
                                                                        <option value={5}>12个月</option>
                                                                        <option value={6}>24个月</option>
                                                                    </select>
                                                                </div>
                                                                <div style={{position: 'relative',float:"left",marginLeft:"20px",lineHeight:"35px",display:this.condition!=5?"block":"none"}}>内</div>
                                                                <div style={{position: 'relative',left:"120px",float:"left"}}>
                                                                    <input id="setValue" className="form-control" style={{position: 'relative',left:"-100px",width:"auto"}}/>
                                                                </div>
                                                                <div style={{position: 'relative',float:"left",marginLeft:"40px",lineHeight:"35px"}}>按</div>
                                                                <input id="sortParamInput" className="form-control" value={this.sortParam} style={{position: 'relative',left:"20px",float:"left",width:"120px"}}/>
                                                                <input id="sortInput" className="form-control" value={this.sort} style={{position: 'relative',left:"40px",width:"60px"}}/>
                                                            </div>
                                                        </div>
                                                        <div style={{position: 'absolute',top:"6px",right:"20px"}} data-toggle="collapse" data-parent="#accordion-control-right" href="#search">
                                                            <i className={"icon-list"}/>
                                                        </div>
                                                    </h6>
                                                </div>
                                                <div id="search" className="panel-collapse collapse">
                                                    <div className="panel-body">
                                                        <div className="col-lg-12 form-inline" style={{padding:"20px 0 10px 164px"}}>
                                                            <label className="control-label">筛选条件</label>
                                                            <select id="condition" className="form-control" style={{width:"240px",marginLeft:"10px"}} onChange={this.changeCondition.bind(this)}>
                                                                <option value={1}>查询次数</option>
                                                                <option value={2}>使用贷记卡的数目</option>
                                                                <option value={3}>使用贷记卡担保方式为信用免担保的数目</option>
                                                                <option value={4}>贷款经营贷的平均贷款金额</option>
                                                                <option value={5}>手机号码</option>
                                                            </select>
                                                            <select id="logic" onChange={this.changeLogic.bind(this)} className="form-control" style={{display:this.condition!=5?"inline-block":"none",width:"240px",marginLeft:"10px"}}>
                                                                <option value={1}>等于</option>
                                                                <option value={2}>小于等于</option>
                                                                <option value={2}>小于</option>
                                                                <option value={2}>不等于</option>
                                                                <option value={3}>大于</option>
                                                                <option value={4}>大于等于</option>
                                                            </select>
                                                            <select id="logic2" onChange={this.changeLogic2.bind(this)} className="form-control" style={{display:this.condition==5?"inline-block":"none",width:"240px",marginLeft:"10px"}}>
                                                                <option value={1}>包含</option>
                                                                <option value={2}>不包含</option>
                                                            </select>
                                                            <input id="conditionValue1" onChange={this.changeValue1.bind(this)} type="text" className="form-control" style={{display:this.condition!=5?"none":"inline-block",width:"240px",marginLeft:"10px"}}/>
                                                            <div className="input-group" style={{display:this.condition==5?"none":"inline-table"}}>
                                                                <input id="conditionValue" onChange={this.changeValue.bind(this)} type="text" className="form-control" style={{width:"240px",marginLeft:"10px"}}/>
                                                                <div className="input-group-addon">
                                                                    <span style={{display:this.condition==1?"inline-block":"none"}}>次</span>
                                                                    <span style={{display:this.condition==2||this.condition==3?"inline-block":"none"}}>个</span>
                                                                    <span style={{display:this.condition==4?"inline-block":"none"}}>万元</span>
                                                                </div>
                                                            </div>
                                                            <i className="icon-trash" style={{cursor:"pointer",marginLeft:"10px",color:"red"}}/>
                                                            <i className="icon-plus2" style={{cursor:"pointer",marginLeft:"10px"}}/>
                                                        </div>
                                                        <div className="col-lg-12 form-inline" style={{padding:"20px 0 10px 164px"}}>
                                                            <label className="control-label" style={{marginLeft:"27px"}}>排序</label>
                                                            <select id="sortParam" onChange={this.changeSortParam.bind(this)} className="form-control" style={{width:"240px",marginLeft:"10px"}}>
                                                                <option value={1}>事件发生时间</option>
                                                                <option value={2}>事件类型</option>
                                                                <option value={3}>应用名称</option>
                                                            </select>
                                                            <select id="sort" onChange={this.changeSort.bind(this)} className="form-control" style={{width:"240px",marginLeft:"10px"}}>
                                                                <option value={1}>降序</option>
                                                                <option value={2}>升序</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <table className="table table-call" style={{marginBottom:'85px'}}>
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="panel panel-white">
                                                            <div className="panel-heading">
                                                                <h6 className="panel-title">
                                                                    <div data-toggle="collapse" data-parent="#accordion-control-right" href="#call-1">
                                                                        <div style={{position:"relative"}}>
                                                                            <FinalResult score={5} status={"accept"}/>
                                                                            <div style={{position: 'relative',left: '20px'}}>
                                                                                <div>
                                                                                    {"借款事件_网站_20170406"}
                                                                                </div>
                                                                                <small className="display-block" style={{fontSize: "6px"}}>
                                                                                    {"事件发生时间 2017-08-12"}&nbsp;&nbsp;
                                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                    {"事件类型 借款事件"}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                                    {"应用名称 汇融易_网页"}
                                                                                </small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </h6>
                                                            </div>
                                                            <div id="call-1" className="panel-collapse collapse">
                                                                <div className="panel-body">
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    事件标识
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    Loan_web_20170406
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    风险系数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    5
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    命中规则
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    1个月内查询次数过多
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    代理检测
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    否
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    来源IP
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    10.10.10.10
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    地理位置
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    成都市高新区
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    经度
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    128.12
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    纬度
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    25.2
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    运营商
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    卫士通
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    IP类型
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    未知
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    IP风险评分
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    0
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    真实IP
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    10.10.10.10
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    手机号
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    15108492765
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    手机运营商
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    联通
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    归属地
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    成都
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    卡种
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    --
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    虚假号码
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    否
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    通信小号
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    否
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    事件时间
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    2017-08-29 09:30:56
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    身份证归属区县
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    肇东市
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    借款人手机
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    15145175976
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    借款人姓名
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    霍志敏
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    手机号格式校验
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    true
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    借款人身份证
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    232303196605203239
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="panel panel-white">
                                                            <div className="panel-heading">
                                                                <h6 className="panel-title">
                                                                    <div data-toggle="collapse" data-parent="#accordion-control-right" href="#call-2">
                                                                        <div style={{position:"relative"}}>
                                                                            <FinalResult score={45} status={"review"}/>
                                                                            <div style={{position: 'relative',left: '20px'}}>
                                                                                <div>
                                                                                    {"借款事件"}
                                                                                </div>
                                                                                <small className="display-block" style={{fontSize: "6px"}}>
                                                                                    {"事件发生时间 2017-08-27"}&nbsp;&nbsp;
                                                                                    &nbsp;
                                                                                    {"事件类型 借款事件"}&nbsp;&nbsp;
                                                                                    {"应用名称 汇融易_网页"}
                                                                                </small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </h6>
                                                            </div>
                                                            <div id="call-2" className="panel-collapse collapse">
                                                                <div className="panel-body">
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    事件标识
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    Loan_web_20170406
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    风险系数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    45
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    命中规则
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    1个月内查询次数过多
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    代理检测
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    否
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    来源IP
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    10.10.10.10
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    地理位置
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    成都市高新区
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    经度
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    128.12
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    纬度
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    25.2
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    运营商
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    卫士通
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    IP类型
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    未知
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    IP风险评分
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    0
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    真实IP
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    10.10.10.10
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    手机号
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    15108492765
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    手机运营商
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    联通
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    归属地
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    成都
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    卡种
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    --
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    虚假号码
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    否
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    通信小号
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    否
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    事件时间
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    2017-08-29 09:30:56
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    身份证归属区县
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    肇东市
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    借款人手机
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    15145175976
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    借款人姓名
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    霍志敏
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    手机号格式校验
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    true
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    借款人身份证
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    232303196605203239
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="panel panel-white">
                                                            <div className="panel-heading">
                                                                <h6 className="panel-title">
                                                                    <div data-toggle="collapse" data-parent="#accordion-control-right" href="#call-3">
                                                                        <div style={{position:"relative"}}>
                                                                            <FinalResult score={80} status={"reject"}/>
                                                                            <div style={{position: 'relative',left: '20px'}}>
                                                                                <div>
                                                                                    {"借款事件"}
                                                                                </div>
                                                                                <small className="display-block" style={{fontSize: "6px"}}>
                                                                                    {"事件发生时间 2017-08-23"}&nbsp;&nbsp;
                                                                                    &nbsp;
                                                                                    {"事件类型 借款事件"}&nbsp;&nbsp;
                                                                                    {"应用名称 汇融易_网页"}
                                                                                </small>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </h6>
                                                            </div>
                                                            <div id="call-3" className="panel-collapse collapse">
                                                                <div className="panel-body">
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    事件标识
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    Loan_web_20170406
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    风险系数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    80
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    命中规则
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    1个月内查询次数过多
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    代理检测
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    否
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    来源IP
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    10.10.10.10
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    地理位置
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    成都市高新区
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    经度
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    128.12
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    纬度
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    25.2
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    运营商
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    卫士通
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    IP类型
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    未知
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    IP风险评分
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    0
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    真实IP
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    10.10.10.10
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    手机号
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    15108492765
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    手机运营商
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    联通
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    归属地
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    成都
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    卡种
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    --
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    虚假号码
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    否
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    通信小号
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    否
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    事件时间
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    2017-08-29 09:30:56
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    身份证归属区县
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    肇东市
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    借款人手机
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    15145175976
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    借款人姓名
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    霍志敏
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    手机号格式校验
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    true
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    借款人身份证
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    232303196605203239
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
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
function textWidth(text){
    var sensor = $('<pre>'+ text +'</pre>').css({display: 'none'});
    $('body').append(sensor);
    var width = sensor.width();
    sensor.remove();
    return width;
}

function mapStateToProps(state) {
    const {commonReducer}=state;
    return {
        refresh: commonReducer.refresh
    }
}

export default connect(mapStateToProps)(CallList)