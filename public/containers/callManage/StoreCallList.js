/**
 * Created by Captain on 2017/9/9.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FinalResult from "./FinalResult"
import {commonRefresh} from '../../actions/Common';
import {browserHistory} from 'react-router'

class UserCallList extends Component{
    constructor(props) {
        super(props);
        this.condition = 1;
        this.sortParam = "事件发生时间";
        this.sort = "降序";
        this._startRefresh=this._startRefresh.bind(this);
    }
    componentDidMount(){
        barVertical('#riskRatio', 400);
        pieMultipleNested('#d3-pie-basic',110,10);
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
    toDetail(e){
        e.preventDefault();
        browserHistory.push("/callDetail");
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
                                                                <div style={{position: 'relative',float:"left",marginLeft:"20px"}}>
                                                                    <select className="selectbox selectbox-auto selectbox-custom-icon">
                                                                        <option value={1}>个人借贷</option>
                                                                        <option value={2}>商户借贷</option>
                                                                        <option value={3}>企业借贷</option>
                                                                    </select>
                                                                </div>
                                                                <div style={{position: 'relative',float:"left",marginLeft:"20px"}}>
                                                                    <select className="selectbox selectbox-auto selectbox-custom-icon">
                                                                        <option value={""}>所有类型</option>
                                                                        <option value={1}>旅游分期</option>
                                                                        <option value={2}>POS贷</option>
                                                                        <option value={3}>现金贷</option>
                                                                        <option value={4}>信用贷</option>
                                                                    </select>
                                                                </div>
                                                                <div style={{position: 'relative',float:"left",display:this.condition!=5?"block":"none",marginLeft:"20px"}}>
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
                                            <fieldset className="content-group">
                                                <div className="panel-body col-md-6">
                                                    <div className="chart-container">
                                                        <div className="chart" id="riskRatio"></div>
                                                    </div>
                                                </div>
                                                <div className="panel-body col-md-6">
                                                    <div className="chart-container text-center">
                                                        <div className="chart svg-center" id="d3-pie-basic"></div>
                                                    </div>
                                                </div>
                                            </fieldset>
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
                                                                            <div style={{position: 'absolute',right: '20px',top:"6px",cursor:"pointer"}} onClick={this.toDetail.bind(this)}>
                                                                                <i className="icon-arrow-right13" style={{fontSize:"26px"}}/>
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
                                                                                    使用贷记卡平均授信额度 （单位：元）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    30,000
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    贷记卡距现在的时间 （单位：天）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    3241
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    24个月查询次数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    181
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    贷记卡平均使用年限
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    0.7
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    贷记卡授信额度为1或者0的账户数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    2
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    经营性贷款平均期限
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    10
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    一次其他贷款距现在的时间 （单位：天）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    45
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    准贷记卡平均授信额度 （单位：元）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    500,000
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    其他贷款笔数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    3
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用贷记卡过去24个月最大逾期数 （单位：期）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    5
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    12个月新开其他贷款的平均金额 （单位：元）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    42,1523.759
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    还款其他贷款过去6个月最大逾期数 （单位：期）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    4
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    还款的经营性贷款456的数目
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    6
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    6个月新开其他贷款的平均期限 （单位：天）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    12,000
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用贷记卡担保方式为其他的数目 （单位：元）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    40,000
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    有房贷
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    否
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用的贷款中经营性贷款担保方式为其他担保的笔数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    12
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用的贷款中其他贷款的担保方式为抵押、质押、保证的笔数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    2
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    卡呆账笔数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    0
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用准贷记卡过去24个月最大逾期数 （单位：期）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    3
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields" style={{cursor:"pointer"}}>
                                                                            <h3>
                                                                                <div style={{lineHeight:"50px",textAlign:"center",color:"lightgray"}}>
                                                                                    <i className=" icon-plus3" style={{fontWeight:"bold"}}></i> 添加属性
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
                                                                            <div style={{position: 'absolute',right: '20px',top:"6px",cursor:"pointer"}} onClick={this.toDetail.bind(this)}>
                                                                                <i className="icon-arrow-right13" style={{fontSize:"26px"}}/>
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
                                                                                    使用贷记卡平均授信额度 （单位：元）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    30,000
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    贷记卡距现在的时间 （单位：天）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    3241
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    24个月查询次数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    181
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    贷记卡平均使用年限
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    0.7
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    贷记卡授信额度为1或者0的账户数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    2
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    经营性贷款平均期限
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    10
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    一次其他贷款距现在的时间 （单位：天）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    45
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    准贷记卡平均授信额度 （单位：元）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    500,000
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    其他贷款笔数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    3
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用贷记卡过去24个月最大逾期数 （单位：期）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    5
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    12个月新开其他贷款的平均金额 （单位：元）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    42,1523.759
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    还款其他贷款过去6个月最大逾期数 （单位：期）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    4
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    还款的经营性贷款456的数目
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    6
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    6个月新开其他贷款的平均期限 （单位：天）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    12,000
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用贷记卡担保方式为其他的数目 （单位：元）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    40,000
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    有房贷
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    否
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用的贷款中经营性贷款担保方式为其他担保的笔数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    12
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用的贷款中其他贷款的担保方式为抵押、质押、保证的笔数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    2
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    卡呆账笔数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    0
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用准贷记卡过去24个月最大逾期数 （单位：期）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    3
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields" style={{cursor:"pointer"}}>
                                                                            <h3>
                                                                                <div style={{lineHeight:"50px",textAlign:"center",color:"lightgray"}}>
                                                                                    <i className=" icon-plus3" style={{fontWeight:"bold"}}></i> 添加属性
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
                                                                            <div style={{position: 'absolute',right: '20px',top:"6px",cursor:"pointer"}} onClick={this.toDetail.bind(this)}>
                                                                                <i className="icon-arrow-right13" style={{fontSize:"26px"}}/>
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
                                                                                    使用贷记卡平均授信额度 （单位：元）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    30,000
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    贷记卡距现在的时间 （单位：天）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    3241
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    24个月查询次数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    181
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    贷记卡平均使用年限
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    0.7
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    贷记卡授信额度为1或者0的账户数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    2
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    经营性贷款平均期限
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    10
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    一次其他贷款距现在的时间 （单位：天）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    45
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    准贷记卡平均授信额度 （单位：元）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    500,000
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    其他贷款笔数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    3
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用贷记卡过去24个月最大逾期数 （单位：期）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    5
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    12个月新开其他贷款的平均金额 （单位：元）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    42,1523.759
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    还款其他贷款过去6个月最大逾期数 （单位：期）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    4
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    还款的经营性贷款456的数目
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    6
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    6个月新开其他贷款的平均期限 （单位：天）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    12,000
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用贷记卡担保方式为其他的数目 （单位：元）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    40,000
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    有房贷
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    否
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用的贷款中经营性贷款担保方式为其他担保的笔数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    12
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用的贷款中其他贷款的担保方式为抵押、质押、保证的笔数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    2
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    卡呆账笔数
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    0
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    使用准贷记卡过去24个月最大逾期数 （单位：期）
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    3
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields" style={{cursor:"pointer"}}>
                                                                            <h3>
                                                                                <div style={{lineHeight:"50px",textAlign:"center",color:"lightgray"}}>
                                                                                    <i className=" icon-plus3" style={{fontWeight:"bold"}}></i> 添加属性
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
function pieMultipleNested(element, radius, margin) {


    // Basic setup
    // ------------------------------

    // Main variables
    var marginTop = 20;

    // Colors
    var colors = d3.scale.category20c();


    // Load data
    // ------------------------------

    d3.csv("assets/demo_data/d3/pies/pies_nesting.csv", function(flights) {

        // Nest the flight data by originating airport
        var airports = d3.nest()
            .key(function(d) { return d.origin; })
            .entries(flights);


        // Create chart
        // ------------------------------

        // Insert an svg element (with margin) for each row in our dataset
        var svg = d3.select(element)
            .selectAll("svg")
            .data(airports)
            .enter()
            .append("svg")
            .attr("width", (radius + margin) * 2)
            .attr("height", (radius + margin + marginTop) * 2)
            .append("g")
            .attr("transform", "translate(" + (radius + margin) + "," + (radius + margin + marginTop) + ")");



        // Construct chart layout
        // ------------------------------

        // Arc
        var arc = d3.svg.arc()
            .innerRadius(0)
            .outerRadius(radius);

        // Pie
        var pie = d3.layout.pie()
            .value(function(d) { return +d.count; })
            .sort(function(a, b) { return b.count - a.count; });


        //
        // Append chart elements
        //

        // Add a label for the airport
        svg.append("text")
            .attr("dy", ".35em")
            .attr("y", -130)
            .style("text-anchor", "middle")
            .style("font-weight", 500)
            .text(function(d) { return d.key; });


        // Pass the nested values to the pie layout
        var g = svg.selectAll("g")
            .data(function(d) { return pie(d.values); })
            .enter()
            .append("g")
            .attr("class", "d3-arc");


        // Add a colored arc path, with a mouseover title showing the count
        g.append("path")
            .attr("d", arc)
            .style("stroke", "#fff")
            .style("fill", function(d) { return colors(d.data.carrier); })
            .append("title")
            .text(function(d) { return d.data.carrier + ": " + d.data.count; });


        // Add a label to the larger arcs, translated to the arc centroid and rotated
        g.filter(function(d) { return d.endAngle - d.startAngle > .2; }).append("text")
            .attr("dy", ".35em")
            .attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")rotate(" + angle(d) + ")"; })
            .style("fill", "#fff")
            .style("font-size", 12)
            .style("text-anchor", "middle")
            .text(function(d) { return d.data.carrier; });

        // Computes the label angle of an arc, converting from radians to degrees
        function angle(d) {
            var a = (d.startAngle + d.endAngle) * 90 / Math.PI - 90;
            return a > 90 ? a - 180 : a;
        }
    });
}
function barVertical(element, height) {


    // Basic setup
    // ------------------------------

    // Define main variables
    var d3Container = d3.select(element),
        margin = {top: 5, right: 10, bottom: 20, left: 40},
        width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right,
        height = height - margin.top - margin.bottom - 5;



    // Construct scales
    // ------------------------------

    // Horizontal
    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .5, .5);

    // Vertical
    var y = d3.scale.linear()
        .range([height, 0]);

    // Color
    var color = d3.scale.category20c();



    // Create axes
    // ------------------------------

    // Horizontal
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    // Vertical
    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");
    // .ticks(10, "%");



    // Create chart
    // ------------------------------

    // Add SVG element
    var container = d3Container.append("svg");

    // Add SVG group
    var svg = container
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");



    // Load data
    // ------------------------------

    d3.tsv("assets/demo_data/d3/bars/bars_basic_risk.tsv", function(error, data) {

        // Pull out values
        data.forEach(function(d) {
            d.frequency = +d.frequency;
        });


        // Set input domains
        // ------------------------------

        // Horizontal
        x.domain(data.map(function(d) { return d.letter; }));

        // Vertical
        y.domain([0, d3.max(data, function(d) { return d.frequency; })]);


        //
        // Append chart elements
        //

        // Append axes
        // ------------------------------

        // Horizontal
        svg.append("g")
            .attr("class", "d3-axis d3-axis-horizontal d3-axis-strong")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        // Vertical
        var verticalAxis = svg.append("g")
            .attr("class", "d3-axis d3-axis-vertical d3-axis-strong")
            .call(yAxis);

        // Add text label
        verticalAxis.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 10)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .style("fill", "#999")
            .style("font-size", 12)
            .text("区间风险系数分布总量");


        // Add bars
        svg.selectAll(".d3-bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "d3-bar")
            .attr("x", function(d) { return x(d.letter); })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { return y(d.frequency); })
            .attr("height", function(d) { return height - y(d.frequency); })
            .style("fill", function(d) { return color(d.letter); });
    });



    // Resize chart
    // ------------------------------

    // Call function on window resize
    $(window).on('resize', resize);

    // Call function on sidebar width change
    $('.sidebar-control').on('click', resize);

    // Resize function
    //
    // Since D3 doesn't support SVG resize by default,
    // we need to manually specify parts of the graph that need to
    // be updated on window resize
    function resize() {

        // Layout variables
        width = d3Container.node().getBoundingClientRect().width - margin.left - margin.right;


        // Layout
        // -------------------------

        // Main svg width
        container.attr("width", width + margin.left + margin.right);

        // Width of appended group
        svg.attr("width", width + margin.left + margin.right);


        // Axes
        // -------------------------

        // Horizontal range
        x.rangeRoundBands([0, width], .1, .5);

        // Horizontal axis
        svg.selectAll('.d3-axis-horizontal').call(xAxis);


        // Chart elements
        // -------------------------

        // Line path
        svg.selectAll('.d3-bar').attr("x", function(d) { return x(d.letter); }).attr("width", x.rangeBand());
    }
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

export default connect(mapStateToProps)(UserCallList)