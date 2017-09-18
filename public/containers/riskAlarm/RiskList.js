/**
 * Created by Captain on 2017/9/19.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'

class RiskList extends Component{
    constructor(props) {
        super(props);
        this.data1 = [
            {
                "browser": "个人所占比例",
                "value": 128,
                "color" : "#66BB6A"
            }, {
                "browser": "",
                "value": 324,
                "color": "#999"
            }
        ];
        this.data2 = [
            {
                "browser": "商户所占比例",
                "value": 200,
                "color" : "#66BB6A"
            }, {
                "browser": "",
                "value": 352,
                "color": "#999"
            }
        ];
        this.data3 = [
            {
                "browser": "企业所占比例",
                "value": 124,
                "color" : "#66BB6A"
            }, {
                "browser": "",
                "value": 328,
                "color": "#999"
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
                                    <li className="active"><a href="#basic-pill1" data-toggle="tab">风险名单列表</a></li>
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

                                                            <div className="media-left" onClick={this.locationTo.bind(this,"/userRisk")} style={{cursor:"pointer"}}>
                                                                <h5 className="text-semibold no-margin">个人借贷：{this.data1[0].value}比</h5>
                                                                <ul className="list-inline list-inline-condensed no-margin">
                                                                    <li>
                                                                        <span className="text-muted">个人所占比例：{"33.3%"}</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>

                                                        <td className="col-md-5">
                                                            <div className="media-left">
                                                                <div id="campaigns-donut1"></div>
                                                            </div>

                                                            <div className="media-left" onClick={this.locationTo.bind(this,"/storeRisk")} style={{cursor:"pointer"}}>
                                                                <h5 className="text-semibold no-margin">商户借贷：{this.data2[0].value}比</h5>
                                                                <ul className="list-inline list-inline-condensed no-margin">
                                                                    <li>
                                                                        <span className="text-muted">商户所占比例：{"40%"}</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                        <td className="col-md-5">
                                                            <div className="media-left">
                                                                <div id="campaigns-donut2"></div>
                                                            </div>

                                                            <div className="media-left" onClick={this.locationTo.bind(this,"/companyCall")} style={{cursor:"pointer"}}>
                                                                <h5 className="text-semibold no-margin">企业借贷：{this.data3[0].value}比</h5>
                                                                <ul className="list-inline list-inline-condensed no-margin">
                                                                    <li>
                                                                        <span className="text-muted">企业所占比例：{"26.7%"}</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>

                                            <div className="table-responsive">
                                                <table className="table text-nowrap">
                                                    <thead>
                                                    <tr>
                                                        <th className="col-md-4">借贷人名称</th>
                                                        <th className="col-md-4">欺诈次数</th>
                                                        <th className="col-md-4">借贷总次数</th>
                                                        <th className="text-center" style={{width: "20px"}}><i className="icon-arrow-down12"/></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className="active border-double">
                                                        <td colSpan="5" style={{fontSize:"18px"}}><i className="icon-user" style={{fontSize:"18px"}}/>个人借贷</td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="media-left">张三</div></td>
                                                        <td>6</td>
                                                        <td>8</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li><a href="#"><i className="icon-redo2"/>详情</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="media-left">李四</div></td>
                                                        <td>5</td>
                                                        <td>12</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li><a href="#"><i className="icon-redo2"/>详情</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>

                                                    <tr className="active border-double">
                                                        <td colSpan="5" style={{fontSize:"18px"}}><i className="icon-store" style={{fontSize:"18px"}}/>商户借贷</td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="media-left">商户1</div></td>
                                                        <td>5</td>
                                                        <td>6</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li><a href="#"><i className="icon-redo2"/>详情</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="media-left">商户2</div></td>
                                                        <td>1</td>
                                                        <td>3</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li><a href="#"><i className="icon-redo2"/>详情</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>

                                                    <tr className="active border-double">
                                                        <td colSpan="5" style={{fontSize:"18px"}}><i className="icon-office" style={{fontSize:"18px"}}/>企业借贷</td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="media-left">企业1</div></td>
                                                        <td>1</td>
                                                        <td>4</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li><a href="#"><i className="icon-redo2"/>详情</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><div className="media-left">企业2</div></td>
                                                        <td>2</td>
                                                        <td>8</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-menu7"></i></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li><a href="#"><i className="icon-redo2"/>详情</a></li>
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

export default connect(mapStateToProps)(RiskList)