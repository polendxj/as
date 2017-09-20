/**
 * Created by Captain on 2017/8/26.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'
import FieldsSelect from "./FieldsSelect"

class DetailPolicy extends Component{
    constructor(props) {
        super(props);
        this.count = 0;
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
        var switches = Array.prototype.slice.call(document.querySelectorAll('.switch'));
        switches.forEach(function(html) {
            var switchery = new Switchery(html, {color: '#4CAF50'});
        });
        $(".styled, .multiselect-container input").uniform({
            radioClass: 'choice'
        });
    }
    componentWillUnmount(){
        this.count = 0;
    }
    _locationTo(path){
        browserHistory.push(path);
    }

    render(){
        var style = {width:"240px"};
        var panels = [];
        var panels1 = [];
        var datas=[
            {
                id:"rule-1",
                data:"使用贷记卡平均授信额度"
            },{
                id:"rule-2",
                data:"贷记卡平均授信额度"
            },{
                id:"rule-3",
                data:"贷记卡距现在的时间"
            },{
                id:"rule-4",
                data:"24个月查询次数"
            },{
                id:"rule-5",
                data:"使用贷记卡担保方式为信用免担保的数目"
            },{
                id:"rule-6",
                data:"贷记卡平均使用年限"
            },{
                id:"rule-7",
                data:"使用的贷款中其他贷款的平均金额"
            },{
                id:"rule-8",
                data:"使用其他贷款余额占正在使用的其他贷款合同总额的比例"
            },{
                id:"rule-9",
                data:"使用准贷记卡平均授信额度"
            },{
                id:"rule-10",
                data:"贷记卡授信额度为1或者0的账户数"
            },{
                id:"rule-11",
                data:"贷款中其他贷款的平均金额"
            },{
                id:"rule-12",
                data:"贷款经营贷的平均贷款金额"
            },{
                id:"rule-13",
                data:"活贷记卡平均授信额度"
            },{
                id:"rule-14",
                data:"使用的贷款经营贷的平均贷款金额"
            },{
                id:"rule-15",
                data:"经营性贷款平均期限"
            },{
                id:"rule-16",
                data:"使用的经营性贷款平均期限"
            },{
                id:"rule-17",
                data:"3个月新开其他贷款的平均金额"
            },{
                id:"rule-18",
                data:"一次其他贷款距现在的时间"
            },{
                id:"rule-19",
                data:"准贷记卡距现在的时间"
            },{
                id:"rule-20",
                data:"一次经营性贷款距现在的时间"
            }
        ];
        var datas1=[
            {
                id:"rule-define-1",
                data:"2小时内设备关联的ip归属城市"
            },{
                id:"rule-define-2",
                data:"3个月内身份证关联借款信息数"
            },{
                id:"rule-define-3",
                data:"3个月内借款信息关联身份证数"
            },{
                id:"rule-define-4",
                data:"7天内手机号申请次数"
            },{
                id:"rule-define-5",
                data:"7天内身份证申请次数"
            }
        ];
        datas.forEach(function (data,index) {
            var panel = <div className="panel panel-white">
                <div className="panel-heading">
                    <h6 className="panel-title">
                        <a data-toggle="collapse" href={"#"+data.id}>
                            <span style={{color: "#b4b4b4"}}>[编号：2112723]</span>
                            <span>{data.data}</span>
                        </a>
                    </h6>

                    <div className="heading-elements">
                        <ul className="icons-list">
                            <li style={{top:"-13px"}}>
                                <label className="checkbox-inline checkbox-switchery checkbox-right switchery-xs" data-popup="tooltip" title="点击开启/关闭规则">
                                    <input type="checkbox" className="switch"/>
                                </label>
                            </li>
                            <li><a data-action="close"></a></li>
                        </ul>
                    </div>
                </div>
                <div id={data.id} className="panel-collapse collapse">
                    <div style={{position: "relative", margin: "20px",padding: "20px 60px",border: "1px solid #D4D4D4"}}>
                        <h4 className="rule_config">属性配置</h4>
                        <form id="attrConfigForm" className="form-horizontal" action="#">
                            <div className="form-group">
                                <label className="col-lg-2 control-label"
                                       style={{
                                           textAlign: 'center'
                                       }}>{"风险决策"}</label>
                                <div className="col-lg-6">
                                    <select id="classify" className="form-control" style={style}>
                                        <option value={1}>通过</option>
                                        <option value={2}>拒绝</option>
                                        <option value={3}>人工审核</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div style={{position: "relative", margin: "20px",padding: "20px 60px",border: "1px solid #D4D4D4"}}>
                        <h4 className="rule_config">条件配置</h4>
                        <form id="conditionConfigForm" className="form-horizontal" action="#">
                            <div className="form-group">
                                <label className="col-lg-2 control-label"
                                       style={{
                                           textAlign: 'center'
                                       }}>{"执行条件："}</label>
                                <div className="col-lg-6">
                                    <label className="radio-inline">
                                        <input type="radio" name="homeNotice" value={1} className="styled" checked="checked" />
                                        满足以下所有条件
                                    </label>
                                    <label className="radio-inline">
                                        <input type="radio" name="homeNotice" value={0} className="styled" />
                                        满足以下任意条件
                                    </label>
                                </div>
                            </div>
                            <div className="p-rc-cdsm">
                                <div className="form-group condition-single-item" style={{display:index==0?"block":"none",marginLeft:0,marginRight:0}}>
                                    <div className="col-lg-12 form-inline" style={{padding:"20px 0 10px 164px"}}>
                                        <FieldsSelect showIndex={0} datas={datas}/>
                                        <select id="classify" className="form-control" style={{width:"240px",marginLeft:"10px"}}>
                                            <option value={1}>等于</option>
                                            <option value={2}>小于等于</option>
                                            <option value={2}>小于</option>
                                            <option value={2}>不等于</option>
                                            <option value={3}>大于</option>
                                            <option value={4}>大于等于</option>
                                        </select>
                                        <div className="input-group">
                                            <input type="text" className="form-control" defaultValue={20} style={{width:"240px",marginLeft:"10px"}}/>
                                            <div className="input-group-addon">
                                                <span>万元</span>
                                            </div>
                                        </div>
                                        <i className="icon-trash" style={{cursor:"pointer",marginLeft:"10px",color:"red"}}/>
                                        <i className="icon-plus2" style={{cursor:"pointer",marginLeft:"10px"}}/>
                                    </div>
                                </div>
                                <div className="form-group condition-single-item" style={{display:index==1?"block":"none",marginLeft:0,marginRight:0}}>
                                    <div className="col-lg-12 form-inline" style={{padding:"20px 0 10px 164px"}}>
                                        <FieldsSelect showIndex={1} datas={datas}/>
                                        <select id="classify" className="form-control" style={{width:"240px",marginLeft:"10px"}}>
                                            <option value={1}>等于</option>
                                            <option value={2}>小于等于</option>
                                            <option value={2}>小于</option>
                                            <option value={2}>不等于</option>
                                            <option value={3}>大于</option>
                                            <option value={4}>大于等于</option>
                                        </select>
                                        <div className="input-group">
                                            <input type="text" className="form-control" defaultValue={20} style={{width:"240px",marginLeft:"10px"}}/>
                                            <div className="input-group-addon">
                                                <span>万元</span>
                                            </div>
                                        </div>
                                        <i className="icon-trash" style={{cursor:"pointer",marginLeft:"10px",color:"red"}}/>
                                        <i className="icon-plus2" style={{cursor:"pointer",marginLeft:"10px"}}/>
                                    </div>
                                </div>
                                <div className="form-group condition-single-item" style={{display:index==2?"block":"none",marginLeft:0,marginRight:0}}>
                                    <div className="col-lg-12 form-inline" style={{padding:"20px 0 10px 164px"}}>
                                        <FieldsSelect showIndex={2} datas={datas}/>
                                        <select id="classify" className="form-control" style={{width:"240px",marginLeft:"10px"}}>
                                            <option value={1}>等于</option>
                                            <option value={2}>小于等于</option>
                                            <option value={2}>小于</option>
                                            <option value={2}>不等于</option>
                                            <option value={3}>大于</option>
                                            <option value={4}>大于等于</option>
                                        </select>
                                        <div className="input-group">
                                            <input type="text" className="form-control" defaultValue={30} style={{width:"240px",marginLeft:"10px"}}/>
                                            <div className="input-group-addon">
                                                <span>天</span>
                                            </div>
                                        </div>
                                        <i className="icon-trash" style={{cursor:"pointer",marginLeft:"10px",color:"red"}}/>
                                        <i className="icon-plus2" style={{cursor:"pointer",marginLeft:"10px"}}/>
                                    </div>
                                </div>
                                <div className="form-group condition-single-item" style={{display:index==3?"block":"none",marginLeft:0,marginRight:0}}>
                                    <div className="col-lg-12 form-inline" style={{padding:"20px 0 10px 164px"}}>
                                        <FieldsSelect showIndex={3} datas={datas}/>
                                        <select id="classify" className="form-control" style={{width:"240px",marginLeft:"10px"}}>
                                            <option value={1}>等于</option>
                                            <option value={2}>小于等于</option>
                                            <option value={2}>小于</option>
                                            <option value={2}>不等于</option>
                                            <option value={3}>大于</option>
                                            <option value={4}>大于等于</option>
                                        </select>
                                        <div className="input-group">
                                            <input type="text" className="form-control" defaultValue={100} style={{width:"240px",marginLeft:"10px"}}/>
                                            <div className="input-group-addon">
                                                <span>次</span>
                                            </div>
                                        </div>
                                        <i className="icon-trash" style={{cursor:"pointer",marginLeft:"10px",color:"red"}}/>
                                        <i className="icon-plus2" style={{cursor:"pointer",marginLeft:"10px"}}/>
                                    </div>
                                </div>
                                <div className="form-group condition-single-item" style={{display:index==4?"block":"none",marginLeft:0,marginRight:0}}>
                                    <div className="col-lg-12 form-inline" style={{padding:"20px 0 10px 164px"}}>
                                        <FieldsSelect showIndex={4} datas={datas}/>
                                        <select id="classify" className="form-control" style={{width:"240px",marginLeft:"10px"}}>
                                            <option value={1}>等于</option>
                                            <option value={2}>小于等于</option>
                                            <option value={2}>小于</option>
                                            <option value={2}>不等于</option>
                                            <option value={3}>大于</option>
                                            <option value={4}>大于等于</option>
                                        </select>
                                        <div className="input-group">
                                            <input type="text" className="form-control" defaultValue={50} style={{width:"240px",marginLeft:"10px"}}/>
                                            <div className="input-group-addon">
                                                <span>个</span>
                                            </div>
                                        </div>
                                        <i className="icon-trash" style={{cursor:"pointer",marginLeft:"10px",color:"red"}}/>
                                        <i className="icon-plus2" style={{cursor:"pointer",marginLeft:"10px"}}/>
                                    </div>
                                </div>
                                <div className="form-group condition-single-item" style={{display:index==5?"block":"none",marginLeft:0,marginRight:0}}>
                                    <div className="col-lg-12 form-inline" style={{padding:"20px 0 10px 164px"}}>
                                        <FieldsSelect showIndex={5} datas={datas}/>
                                        <select id="classify" className="form-control" style={{width:"240px",marginLeft:"10px"}}>
                                            <option value={1}>等于</option>
                                            <option value={2}>小于等于</option>
                                            <option value={2}>小于</option>
                                            <option value={2}>不等于</option>
                                            <option value={3}>大于</option>
                                            <option value={4}>大于等于</option>
                                        </select>
                                        <div className="input-group">
                                            <input type="text" className="form-control" defaultValue={10} style={{width:"240px",marginLeft:"10px"}}/>
                                            <div className="input-group-addon">
                                                <span>年</span>
                                            </div>
                                        </div>
                                        <i className="icon-trash" style={{cursor:"pointer",marginLeft:"10px",color:"red"}}/>
                                        <i className="icon-plus2" style={{cursor:"pointer",marginLeft:"10px"}}/>
                                    </div>
                                </div>
                                <div className="form-group condition-single-item" style={{display:index==6?"block":"none",marginLeft:0,marginRight:0}}>
                                    <div className="col-lg-12 form-inline" style={{padding:"20px 0 10px 164px"}}>
                                        <FieldsSelect showIndex={6} datas={datas}/>
                                        <select id="classify" className="form-control" style={{width:"240px",marginLeft:"10px"}}>
                                            <option value={1}>等于</option>
                                            <option value={2}>小于等于</option>
                                            <option value={2}>小于</option>
                                            <option value={2}>不等于</option>
                                            <option value={3}>大于</option>
                                            <option value={4}>大于等于</option>
                                        </select>
                                        <div className="input-group">
                                            <input type="text" className="form-control" defaultValue={10} style={{width:"240px",marginLeft:"10px"}}/>
                                            <div className="input-group-addon">
                                                <span>万</span>
                                            </div>
                                        </div>
                                        <i className="icon-trash" style={{cursor:"pointer",marginLeft:"10px",color:"red"}}/>
                                        <i className="icon-plus2" style={{cursor:"pointer",marginLeft:"10px"}}/>
                                    </div>
                                </div>
                                <div className="form-group condition-single-item" style={{display:index==7?"block":"none",marginLeft:0,marginRight:0}}>
                                    <div className="col-lg-12 form-inline" style={{padding:"20px 0 10px 164px"}}>
                                        <FieldsSelect showIndex={7} datas={datas}/>
                                        <select id="classify" className="form-control" style={{width:"240px",marginLeft:"10px"}}>
                                            <option value={1}>等于</option>
                                            <option value={2}>小于等于</option>
                                            <option value={2}>小于</option>
                                            <option value={2}>不等于</option>
                                            <option value={3}>大于</option>
                                            <option value={4}>大于等于</option>
                                        </select>
                                        <div className="input-group">
                                            <input type="text" className="form-control text-right" defaultValue={40} style={{width:"240px",marginLeft:"10px"}}/>
                                            <div className="input-group-addon">
                                                <span>%</span>
                                            </div>
                                        </div>
                                        <i className="icon-trash" style={{cursor:"pointer",marginLeft:"10px",color:"red"}}/>
                                        <i className="icon-plus2" style={{cursor:"pointer",marginLeft:"10px"}}/>
                                    </div>
                                </div>
                                <div className="form-group condition-single-item" style={{display:index==8?"block":"none",marginLeft:0,marginRight:0}}>
                                    <div className="col-lg-12 form-inline" style={{padding:"20px 0 10px 164px"}}>
                                        <FieldsSelect showIndex={8} datas={datas}/>
                                        <select id="classify" className="form-control" style={{width:"240px",marginLeft:"10px"}}>
                                            <option value={1}>等于</option>
                                            <option value={2}>小于等于</option>
                                            <option value={2}>小于</option>
                                            <option value={2}>不等于</option>
                                            <option value={3}>大于</option>
                                            <option value={4}>大于等于</option>
                                        </select>
                                        <div className="input-group">
                                            <input type="text" className="form-control text-right" defaultValue={10} style={{width:"240px",marginLeft:"10px"}}/>
                                            <div className="input-group-addon">
                                                <span>万</span>
                                            </div>
                                        </div>
                                        <i className="icon-trash" style={{cursor:"pointer",marginLeft:"10px",color:"red"}}/>
                                        <i className="icon-plus2" style={{cursor:"pointer",marginLeft:"10px"}}/>
                                    </div>
                                </div>
                                <div className="form-group condition-single-item" style={{display:index==9?"block":"none",marginLeft:0,marginRight:0}}>
                                    <div className="col-lg-12 form-inline" style={{padding:"20px 0 10px 164px"}}>
                                        <FieldsSelect showIndex={9} datas={datas}/>
                                        <select id="classify" className="form-control" style={{width:"240px",marginLeft:"10px"}}>
                                            <option value={1}>等于</option>
                                            <option value={2}>小于等于</option>
                                            <option value={2}>小于</option>
                                            <option value={2}>不等于</option>
                                            <option value={3}>大于</option>
                                            <option value={4}>大于等于</option>
                                        </select>
                                        <div className="input-group">
                                            <input type="text" className="form-control text-right" defaultValue={80} style={{width:"240px",marginLeft:"10px"}}/>
                                            <div className="input-group-addon">
                                                <span>个</span>
                                            </div>
                                        </div>
                                        <i className="icon-trash" style={{cursor:"pointer",marginLeft:"10px",color:"red"}}/>
                                        <i className="icon-plus2" style={{cursor:"pointer",marginLeft:"10px"}}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div style={{position: "relative", margin: "20px",padding: "20px 60px",border: "1px solid #D4D4D4"}}>
                        <h4 className="rule_config">操作配置</h4>
                        <form id="conditionConfigForm" className="form-horizontal" action="#">
                            <div className="p-rc-cdsm">
                                <div className="form-group condition-single-item" style={{marginLeft:0,marginRight:0}}>
                                    <div className="col-lg-12 form-inline" style={{padding:"20px 0 10px 164px"}}>
                                        <label style={{textAlign: 'center'}}>{"设置："}</label>
                                        <select id="classify" className="form-control" style={{width:"240px",marginLeft:"10px"}}>
                                            <option value={1}>[系统][字段] 应用名</option>
                                            <option value={2}>[系统][字段] 事件时间</option>
                                            <option value={3}>[系统][字段] 事件标识</option>
                                            <option value={4}>[系统][字段] 借款人工作单位</option>
                                            <option value={5}>[系统][字段] 借贷金额</option>
                                            <option value={6}>[系统][字段] 借款人账号</option>
                                            <option value={21}>{"[系统][字段] test"}</option>
                                            <option value={22}>{"[系统][字段] test2"}</option>
                                            <option value={23}>{"[系统][字段] test3"}</option>
                                        </select>
                                        <label style={{textAlign: 'center',marginLeft:"10px"}}>{"等于"}</label>
                                        <select id="classify" className="form-control" style={{width:"240px",marginLeft:"10px"}}>
                                            <option value={0}>空值</option>
                                            <option value={1}>[系统][字段] 当前 应用名</option>
                                            <option value={2}>[系统][字段] 当前 事件时间</option>
                                            <option value={3}>[系统][字段] 当前 事件标识</option>
                                            <option value={4}>[系统][字段] 当前 借款人工作单位</option>
                                            <option value={5}>[系统][字段] 当前 借贷金额</option>
                                            <option value={6}>[系统][字段] 当前 借款人账号</option>
                                            <option value={7}>[系统][字段] 当前 test</option>
                                            <option value={7}>[系统][字段] 当前 test2</option>
                                            <option value={7}>[系统][字段] 当前 test3</option>
                                        </select>
                                        <i className="icon-trash" style={{cursor:"pointer",marginLeft:"10px",color:"red"}}/>
                                        <i className="icon-plus2" style={{cursor:"pointer",marginLeft:"10px"}}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>;
            panels.push(panel);
        });
        datas1.forEach(function (data) {
            var panel1 = <div className="panel panel-white">
                <div className="panel-heading">
                    <h6 className="panel-title">
                        <a data-toggle="collapse" href={"#"+data.id}>
                            <span style={{color: "#b4b4b4"}}>[编号：2112723]</span>
                            <span>{data.data}</span>
                        </a>
                    </h6>

                    <div className="heading-elements">
                        <ul className="icons-list">
                            <li style={{top:"-13px"}}>
                                <label className="checkbox-inline checkbox-switchery checkbox-right switchery-xs" data-popup="tooltip" title="点击开启/关闭规则">
                                    <input type="checkbox" className="switch"/>
                                </label>
                            </li>
                            <li><a data-action="close"></a></li>
                        </ul>
                    </div>
                </div>
                <div id={data.id} className="panel-collapse collapse">
                    <div style={{position: "relative", margin: "20px",padding: "20px 60px",border: "1px solid #D4D4D4"}}>
                        <h4 className="rule_config">条件配置</h4>
                        <form id="attrConfigForm" className="form-horizontal" action="#">
                            <div className="form-group">
                                <label className="col-lg-2 control-label"
                                       style={{
                                           textAlign: 'right'
                                       }}>{"描述"}</label>
                                <div className="col-lg-6">
                                    <span className="form-control">主属性在指定时间范围内出现的次数或者关联从属性的个数</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-2 control-label"
                                       style={{
                                           textAlign: 'right'
                                       }}>{"时间片"}</label>
                                <div className="col-lg-3 form-inline">
                                    <input className="form-control" style={{width:"60px",marginRight:"10px"}} defaultValue={2}/>
                                    <select id="classify" className="form-control" style={{width:"170px"}}>
                                        <option value={1}>时</option>
                                        <option value={2}>月</option>
                                        <option value={3}>天</option>
                                        <option value={4}>分</option>
                                        <option value={5}>次</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-2 control-label"
                                       style={{
                                           textAlign: 'right'
                                       }}>{"主属性"}</label>
                                <div className="col-lg-6">
                                    <select id="classify" className="form-control" style={style}>
                                        <option value={1}>[系统][字段]  设备ID</option>
                                        <option value={2}>[系统][字段]  应用名</option>
                                        <option value={3}>[系统][字段]  事件时间</option>
                                        <option value={4}>[系统][字段]  事件标识</option>
                                        <option value={5}>[扩展][字段]  test</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-2 control-label"
                                       style={{
                                           textAlign: 'right'
                                       }}>{"从属性"}</label>
                                <div className="col-lg-6">
                                    <select id="classify" className="form-control" style={style}>
                                        <option value={1}>空值</option>
                                        <option value={2}>[系统][字段]  应用名</option>
                                        <option value={3}>[系统][字段]  事件时间</option>
                                        <option value={4}>[系统][字段]  事件标识</option>
                                        <option value={5}>[系统][字段]  借款人工作单位</option>
                                        <option value={6}>[系统][对象]  test</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-2 control-label"
                                       style={{
                                           textAlign: 'right'
                                       }}>{"计算方式"}</label>
                                <div className="col-lg-6">
                                    <select id="classify" className="form-control" style={style}>
                                        <option value={1}>求关联个数</option>
                                        <option value={2}>求出现次数</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-2 control-label"
                                       style={{
                                           textAlign: 'right'
                                       }}>{"作用域"}</label>
                                <div className="col-lg-6">
                                    <select id="classify" className="form-control" style={style}>
                                        <option value={1}>本应用</option>
                                        <option value={2}>合作方</option>
                                        <option value={3}>全局</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-lg-2"></div>
                                <div className="col-lg-3 text-left" style={{marginTop: "20px"}}>
                                    <button type="button" className="btn btn-primary">{"保存"}</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>;
            panels1.push(panel1);
        });
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-flat">
                        <div className="content" style={{marginTop: '20px'}}>
                            <fieldset className="content-group">
                                <legend className="text-bold"></legend>
                                <ul className="list-inline list-inline-condensed no-margin-bottom"
                                    style={{textAlign: 'right', marginTop: '-59px'}}>
                                    <li>
                                        <button onClick={this._locationTo.bind(this,"/policyManage")} type="button"
                                                className="btn btn-primary">返回策略集列表</button>
                                    </li>
                                </ul>
                            </fieldset>
                        </div>
                        <div className="panel-body">
                            <div className="tabbable">
                                <ul className="nav nav-tabs nav-tabs-solid">
                                    <li className="active"><a href="#solid-tab1" data-toggle="tab">基本设置</a></li>
                                    <li><a href="#solid-tab2" data-toggle="tab">规则管理</a></li>
                                    <li><a href="#solid-tab3" data-toggle="tab">指标定义</a></li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane active" id="solid-tab1">
                                        <form id="registerManualForm" className="form-horizontal" action="#">
                                            <div className="form-group">
                                                <label className="control-label col-lg-2" style={{textAlign: 'center'}}>{"策略名称"}</label>
                                                <div className="col-lg-6">
                                                    <div className="input-group">
                                                        <input id="weight" name="weight" type="text" className="form-control"
                                                               autoComplete="off" value={"借款事件1"} style={style} disabled/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label"
                                                       style={{
                                                           textAlign: 'center'
                                                       }}>{"应用名"}</label>
                                                <div className="col-lg-6">
                                                    <select id="classify" className="form-control" style={style} disabled>
                                                        <option value={1}>汇融易_网页</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label"
                                                       style={{
                                                           textAlign: 'center'
                                                       }}>{"事件类型"}</label>
                                                <div className="col-lg-6">
                                                    <select id="classify" className="form-control" style={style} disabled>
                                                        <option value={1}>借款事件</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label"
                                                       style={{
                                                           textAlign: 'center'
                                                       }}>{"风险类型"}</label>
                                                <div className="col-lg-6">
                                                    <select id="classify" className="form-control" style={style} disabled>
                                                        <option value={1}>异常借款</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label"
                                                       style={{
                                                           textAlign: 'center'
                                                       }}>{"策略模式"}</label>
                                                <div className="col-lg-6">
                                                    <select id="classify" className="form-control" style={style} disabled>
                                                        <option value={1}>首次匹配</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-lg-2 control-label"
                                                       style={{textAlign: 'center'}}>{"描述"}</label>
                                                <div className="col-lg-6">
                                                    <textarea id="description" rows="5" cols="5" className="form-control" disabled>
                                                        汇融易网站借款事件
                                                    </textarea>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="tab-pane" id="solid-tab2">
                                        <div className="panel-group collapsible-sortable content-group-lg">
                                            {panels}
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="solid-tab3">
                                        <div className="panel-group collapsible-sortable content-group-lg">
                                            {panels1}
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

export default connect(mapStateToProps)(DetailPolicy)