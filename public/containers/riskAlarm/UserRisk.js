/**
 * Created by Captain on 2017/9/19.
 */
/**
 * Created by Captain on 2017/9/9.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {commonRefresh} from '../../actions/Common';
import {browserHistory} from 'react-router'

class UserRisk extends Component{
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
                                    <li className="active"><a href="#callLog" data-toggle="tab">风险详细列表</a></li>
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

                                            <div className="table-responsive" style={{height:tableHeight+'px',overflowY:'auto'}}>
                                                <table className="table table-bordered table-hover" style={{marginBottom:'85px'}}>
                                                    <thead>
                                                    <tr style={{fontWeight:'bold'}}>
                                                        <th className="col-md-2 text-bold text-center">{"借贷人名称"}</th>
                                                        <th className="col-md-3 text-bold text-center">{"借贷实体"}</th>
                                                        <th className="col-md-3 text-bold text-center">{"借贷类型"}</th>
                                                        <th className="col-md-2 text-bold text-center">{"欺诈次数"}</th>
                                                        <th className="col-md-2 text-bold text-center">{"借贷总次数"}</th>
                                                        <th className="text-center" style={{width: "20px"}}><i
                                                            className="icon-arrow-down12"/></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="text-center">{"张三"}</td>
                                                        <td className="text-center">{"个人借贷"}</td>
                                                        <td className="text-center">{"POS贷"}</td>
                                                        <td className="text-center">{"1"}</td>
                                                        <td className="text-center">{"3"}</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle"
                                                                       data-toggle="dropdown" aria-expanded="false"><i
                                                                        className="icon-menu7"/></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li style={{display:'block'}} onClick={this.toDetail.bind(this)}>
                                                                            <a href="javascript:void(0)"><i className="icon-pencil5"/>
                                                                                {"修改"}</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">{"张三"}</td>
                                                        <td className="text-center">{"个人借贷"}</td>
                                                        <td className="text-center">{"现金贷"}</td>
                                                        <td className="text-center">{"2"}</td>
                                                        <td className="text-center">{"3"}</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle"
                                                                       data-toggle="dropdown" aria-expanded="false"><i
                                                                        className="icon-menu7"/></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li style={{display:'block'}} onClick={this.toDetail.bind(this)}>
                                                                            <a href="javascript:void(0)"><i className="icon-pencil5"/>
                                                                                {"修改"}</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">{"张三"}</td>
                                                        <td className="text-center">{"个人借贷"}</td>
                                                        <td className="text-center">{"旅游分期"}</td>
                                                        <td className="text-center">{"1"}</td>
                                                        <td className="text-center">{"3"}</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle"
                                                                       data-toggle="dropdown" aria-expanded="false"><i
                                                                        className="icon-menu7"/></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li style={{display:'block'}} onClick={this.toDetail.bind(this)}>
                                                                            <a href="javascript:void(0)"><i className="icon-pencil5"/>
                                                                                {"修改"}</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">{"李四"}</td>
                                                        <td className="text-center">{"个人借贷"}</td>
                                                        <td className="text-center">{"POS贷"}</td>
                                                        <td className="text-center">{"2"}</td>
                                                        <td className="text-center">{"3"}</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle"
                                                                       data-toggle="dropdown" aria-expanded="false"><i
                                                                        className="icon-menu7"/></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li style={{display:'block'}} onClick={this.toDetail.bind(this)}>
                                                                            <a href="javascript:void(0)"><i className="icon-pencil5"/>
                                                                                {"修改"}</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">{"李四"}</td>
                                                        <td className="text-center">{"个人借贷"}</td>
                                                        <td className="text-center">{"现金"}</td>
                                                        <td className="text-center">{"1"}</td>
                                                        <td className="text-center">{"2"}</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle"
                                                                       data-toggle="dropdown" aria-expanded="false"><i
                                                                        className="icon-menu7"/></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li style={{display:'block'}} onClick={this.toDetail.bind(this)}>
                                                                            <a href="javascript:void(0)"><i className="icon-pencil5"/>
                                                                                {"修改"}</a></li>
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

export default connect(mapStateToProps)(UserRisk)