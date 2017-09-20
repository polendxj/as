/**
 * Created by Captain on 2017/8/28.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'

class CallManage extends Component{
    constructor(props) {
        super(props);
        this.data1 = [
            {
                "browser": "个人正常借贷",
                "value": 1556,
                "color" : "#66BB6A"
            },
            {
                "browser": "个人欺诈借贷",
                "value": 400,
                "color" : "red"
            },
            {
                "browser": "个人人工审核借贷",
                "value": 200,
                "color" : "yellow"
            },
        ];
        this.data2 = [
            {
                "browser": "商户正常借贷",
                "value": 716,
                "color" : "#66BB6A"
            },
            {
                "browser": "商户欺诈借贷",
                "value": 50,
                "color" : "red"
            },
            {
                "browser": "商户人工审核借贷",
                "value": 34,
                "color" : "yellow"
            }
        ];
        this.data3 = [
            {
                "browser": "企业正常借贷",
                "value": 1200,
                "color" : "#66BB6A"
            },
            {
                "browser": "企业欺诈借贷",
                "value": 200,
                "color" : "red"
            },
            {
                "browser": "企业人工审核借贷",
                "value": 500,
                "color" : "yellow"
            }
        ];
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
        campaignDonut('#campaigns-donut',this.data1, 42);
        campaignDonut('#campaigns-donut1',this.data2, 42);
        campaignDonut('#campaigns-donut2',this.data3, 42);
    }
    componentWillUnmount(){

    }
    _search(){

    }
    locationTo(path){
        browserHistory.push(path);
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
                                    <li className="active"><a href="#basic-pill1" data-toggle="tab">借贷列表</a></li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane active" id="basic-pill1">
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
                                                    <li>
                                                        <select id="typeSelect" className="form-control">
                                                            <option value={""}>全部事件</option>
                                                            <option value={1}>借款事件</option>
                                                            <option value={2}>贷前审核事件</option>
                                                            <option value={3}>贷后监控事件</option>
                                                        </select>
                                                    </li>
                                                    <li>
                                                        <select id="straListSelect" className="form-control">
                                                            <option value={""}>全部策略集</option>
                                                            <option value={1}>借款策略集</option>
                                                            <option value={2}>信贷策略集</option>
                                                        </select>
                                                    </li>
                                                    <li>
                                                        <select id="straSelect" className="form-control">
                                                            <option value={""}>全部</option>
                                                            <option value={1}>通过</option>
                                                            <option value={2}>拒绝</option>
                                                            <option value={3}>人工审核</option>
                                                        </select>
                                                    </li>
                                                    <li>
                                                        <button onClick={this._search.bind(this)} type="button"
                                                                className="btn btn-primary btn-icon"><i
                                                            className="icon-search4"></i>搜索</button>
                                                    </li>
                                                </ul>
                                            </fieldset>
                                            <div className="table-responsive">
                                                <table className="table table-lg text-nowrap">
                                                    <tbody>
                                                    <tr>
                                                        <td className="col-md-5">
                                                            <div className="media-left">
                                                                <div id="campaigns-donut"></div>
                                                            </div>

                                                            <div className="media-left" onClick={this.locationTo.bind(this,"/userCall")} style={{cursor:"pointer"}}>
                                                                <h5 className="text-semibold no-margin">个人借贷：{2156} 笔</h5>
                                                                <ul className="list-inline list-inline-condensed no-margin">
                                                                    <li>
                                                                        <span className="text-muted">欺诈比例：{"18.55%"}</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>

                                                        <td className="col-md-5">
                                                            <div className="media-left">
                                                                <div id="campaigns-donut1"></div>
                                                            </div>

                                                            <div className="media-left" onClick={this.locationTo.bind(this,"/storeCall")} style={{cursor:"pointer"}}>
                                                                <h5 className="text-semibold no-margin">商户借贷：{800} 笔</h5>
                                                                <ul className="list-inline list-inline-condensed no-margin">
                                                                    <li>
                                                                        <span className="text-muted">欺诈比例：{"6.25%"}</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td className="col-md-5">
                                                            <div className="media-left">
                                                                <div id="campaigns-donut2"></div>
                                                            </div>

                                                            <div className="media-left" onClick={this.locationTo.bind(this,"/companyCall")} style={{cursor:"pointer"}}>
                                                                <h5 className="text-semibold no-margin">企业借贷：{1900} 笔</h5>
                                                                <ul className="list-inline list-inline-condensed no-margin">
                                                                    <li>
                                                                        <span className="text-muted">欺诈比例：{"10.53%"}</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="table-responsive">
                                                <table className="table">
                                                    <thead>
                                                    <tr>
                                                        <th className="col-md-4">借贷类型</th>
                                                        <th className="col-md-2 text-center">借贷独立用户数</th>
                                                        <th className="col-md-2 text-center">借贷总次数</th>
                                                        <th className="col-md-2 text-center">同比上月涨幅 （欺诈目标）</th>
                                                        <th className="col-md-2 text-center">欺诈比率</th>

                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className="active border-double">
                                                        <td colSpan="5" style={{fontSize:"18px"}}><i className="icon-user" style={{fontSize:"14px",fontWeight:"bold"}}> 个人借贷</i></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:void(0)" style={{color:"#2196F3"}}  onClick={this.locationTo.bind(this,"/userCall")}>旅游分期</a></td>
                                                        <td className="text-center">54</td>
                                                        <td className="text-center">486</td>
                                                        <td className="text-center">
                                                            <span className="text-success-600"><i className="icon-stats-growth2 position-left"></i> 2.43%</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <h6 className="text-semibold">5.24%</h6>
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:void(0)" style={{color:"#2196F3"}}  onClick={this.locationTo.bind(this,"/userCall")}>POS贷</a></td>
                                                        <td className="text-center">23</td>
                                                        <td className="text-center">196</td>
                                                        <td className="text-center">
                                                            <span className="text-danger"><i className="icon-stats-decline2 position-left"></i> - 8.02%</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <h6 className="text-semibold">5.24%</h6>
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:void(0)" style={{color:"#2196F3"}}  onClick={this.locationTo.bind(this,"/userCall")}>现金贷</a></td>
                                                        <td className="text-center">87</td>
                                                        <td className="text-center">674</td>
                                                        <td className="text-center">
                                                            <span className="text-danger"><i className="icon-stats-decline2 position-left"></i> - 34.58%</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <h6 className="text-semibold">1.124%</h6>
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:void(0)" style={{color:"#2196F3"}}  onClick={this.locationTo.bind(this,"/userCall")}>信用贷</a></td>
                                                        <td className="text-center">67</td>
                                                        <td className="text-center">768</td>
                                                        <td className="text-center">
                                                            <span className="text-success-600"><i className="icon-stats-growth2 position-left"></i> 2.43%</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <h6 className="text-semibold">6.1%</h6>
                                                        </td>

                                                    </tr>

                                                    <tr className="active border-double">
                                                        <td colSpan="5" style={{fontSize:"18px"}}><i className="icon-store" style={{fontSize:"14px",fontWeight:"bold"}}> 商户借贷</i></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:void(0)" style={{color:"#2196F3"}}  onClick={this.locationTo.bind(this,"/storeCall")}>POS贷</a></td>
                                                        <td className="text-center">26</td>
                                                        <td className="text-center">168</td>
                                                        <td className="text-center">
                                                            <span className="text-danger"><i className="icon-stats-decline2 position-left"></i> - 1.02%</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <h6 className="text-semibold">5.6%</h6>
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:void(0)" style={{color:"#2196F3"}}  onClick={this.locationTo.bind(this,"/storeCall")}>现金贷</a></td>
                                                        <td className="text-center">65</td>
                                                        <td className="text-center">548</td>
                                                        <td className="text-center">
                                                            <span className="text-success-600"><i className="icon-stats-growth2 position-left"></i> 2.43%</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <h6 className="text-semibold">3.8%</h6>
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:void(0)" style={{color:"#2196F3"}}  onClick={this.locationTo.bind(this,"/storeCall")}>信用贷</a></td>
                                                        <td className="text-center">43</td>
                                                        <td className="text-center">363</td>
                                                        <td className="text-center">
                                                            <span className="text-success-600"><i className="icon-stats-growth2 position-left"></i> 17.3%</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <h6 className="text-semibold">7.3%</h6>
                                                        </td>

                                                    </tr>

                                                    <tr className="active border-double">
                                                        <td colSpan="5" style={{fontSize:"18px"}}><i className="icon-store" style={{fontSize:"14px",fontWeight:"bold"}}> 企业借贷</i></td>
                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:void(0)" style={{color:"#2196F3"}}  onClick={this.locationTo.bind(this,"/userCall")}>POS贷</a></td>
                                                        <td className="text-center">12</td>
                                                        <td className="text-center">86</td>
                                                        <td className="text-center">
                                                            <span className="text-danger"><i className="icon-stats-decline2 position-left"></i> - 18.32%</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <h6 className="text-semibold">13.3%</h6>
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:void(0)" style={{color:"#2196F3"}}  onClick={this.locationTo.bind(this,"/userCall")}>现金贷</a></td>
                                                        <td className="text-center">54</td>
                                                        <td className="text-center">452</td>
                                                        <td className="text-center">
                                                            <span className="text-success-600"><i className="icon-stats-growth2 position-left"></i> 7.78%</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <h6 className="text-semibold">4.2%</h6>
                                                        </td>

                                                    </tr>
                                                    <tr>
                                                        <td><a href="javascript:void(0)" style={{color:"#2196F3"}}  onClick={this.locationTo.bind(this,"/userCall")}>信用贷</a></td>
                                                        <td className="text-center">87</td>
                                                        <td className="text-center">983</td>
                                                        <td className="text-center">
                                                            <span className="text-success-600"><i className="icon-stats-growth2 position-left"></i> 12.59%</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <h6 className="text-semibold">4.2%</h6>
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
function campaignDonut(element, data, size) {


    // Basic setup
    // ------------------------------

    // Main variables
    var d3Container = d3.select(element),
        distance = 2, // reserve 2px space for mouseover arc moving
        radius = (size/2) - distance,
        sum = d3.sum(data, function(d) { return d.value; })



    // Tooltip
    // ------------------------------

    var tip = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .direction('e')
        .html(function (d) {
            if(d.data.browser){
                return "<ul class='list-unstyled mb-5'>" +
                    "<li>" + "<div class='text-size-base mb-5 mt-5'>" + d.data.browser + "</div>" + "</li>" +
                    "<li>" + "数量: &nbsp;" + "<span class='text-semibold pull-right'>" + d.value + "</span>" + "</li>" +
                    "<li>" + "占比: &nbsp;" + "<span class='text-semibold pull-right'>" + (100 / (sum / d.value)).toFixed(2) + "%" + "</span>" + "</li>" +
                    "</ul>";
            }
        })



    // Create chart
    // ------------------------------

    // Add svg element
    var container = d3Container.append("svg").call(tip);

    // Add SVG group
    var svg = container
        .attr("width", size)
        .attr("height", size)
        .append("g")
        .attr("transform", "translate(" + (size / 2) + "," + (size / 2) + ")");



    // Construct chart layout
    // ------------------------------

    // Pie
    var pie = d3.layout.pie()
        .sort(null)
        .startAngle(Math.PI)
        .endAngle(3 * Math.PI)
        .value(function (d) {
            return d.value;
        });

    // Arc
    var arc = d3.svg.arc()
        .outerRadius(radius)
        .innerRadius(radius / 2);



    //
    // Append chart elements
    //

    // Group chart elements
    var arcGroup = svg.selectAll(".d3-arc")
        .data(pie(data))
        .enter()
        .append("g")
        .attr("class", "d3-arc")
        .style('stroke', '#fff')
        .style('cursor', 'pointer');

    // Append path
    var arcPath = arcGroup
        .append("path")
        .style("fill", function (d) { return d.data.color; });

    // Add tooltip
    arcPath
        .on('mouseover', function (d, i) {

            // Transition on mouseover
            d3.select(this)
                .transition()
                .duration(500)
                .ease('elastic')
                .attr('transform', function (d) {
                    d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
                    var x = Math.sin(d.midAngle) * distance;
                    var y = -Math.cos(d.midAngle) * distance;
                    return 'translate(' + x + ',' + y + ')';
                });
        })

        .on("mousemove", function (d) {

            // Show tooltip on mousemove
            if(d.data.browser){
                tip.show(d)
                    .style("top", (d3.event.pageY - 40) + "px")
                    .style("left", (d3.event.pageX + 30) + "px");
            }
        })

        .on('mouseout', function (d, i) {

            // Mouseout transition
            d3.select(this)
                .transition()
                .duration(500)
                .ease('bounce')
                .attr('transform', 'translate(0,0)');

            // Hide tooltip
            tip.hide(d);
        });

    // Animate chart on load
    arcPath
        .transition()
        .delay(function(d, i) { return i * 500; })
        .duration(500)
        .attrTween("d", function(d) {
            var interpolate = d3.interpolate(d.startAngle,d.endAngle);
            return function(t) {
                d.endAngle = interpolate(t);
                return arc(d);
            };
        });
}
function mapStateToProps(state) {
    const {commonReducer}=state;
    return {

    }
}

export default connect(mapStateToProps)(CallManage)