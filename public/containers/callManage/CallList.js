/**
 * Created by Captain on 2017/9/9.
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

    }
    _search(){

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
                                                                                    &nbsp;
                                                                                    {"事件类型 借款事件"}&nbsp;&nbsp;
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
                                                                                    电话号码
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    15108492769
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    电话号码
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    15108492769
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    电话号码
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    15108492769
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    电话号码
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    15108492769
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                    </ul>
                                                                    <ul>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    电话号码
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    15108492769
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    电话号码
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    15108492769
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    电话号码
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    15108492769
                                                                                </div>
                                                                            </h3>
                                                                        </li>
                                                                        <li className="call-fields">
                                                                            <h3>
                                                                                <small className="display-block" style={{fontSize: "6px",padding:"6px"}}>
                                                                                    电话号码
                                                                                </small>
                                                                                <div style={{lineHeight:"50px",marginLeft:"20px"}}>
                                                                                    15108492769
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
                                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
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
                                                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
                                                                </div>
                                                            </div>
                                                        </div>
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