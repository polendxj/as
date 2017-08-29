/**
 * Created by Captain on 2017/8/22.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class StatisticalReportContainer extends Component{
    constructor(props) {
        super(props);
        this.count1 = 0;
        this.count2 = 0;
    }
    componentDidMount(){
        this.barVertical1('#d3-bar-vertical', 400);
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
    }
    componentWillUnmount(){
        this.count1 = 0;
        this.count2 = 0;
    }
    _search(){

    }
    changeTab(type){
        if(type=="1"){
            this.count1++;
            if(this.count1<=0){
                this.barVertical1('#d3-bar-vertical', 400);
            }
        } else{
            this.count2++;
            // Initialize chart
            if(this.count2<=1){
                this.barVertical2('#d3-bar-vertical-risk', 400);
            }
            // Chart setup
        }
    }
    barVertical1(element, height) {

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

    d3.tsv("assets/demo_data/d3/bars/bars_basic.tsv", function(error, data) {

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
            .text("命中次数");


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
    barVertical2(element, height) {


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
    render(){
        var style = {width:"175px"};
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-flat">
                        <div className="panel-body">
                            <div className="tabbable">
                                <ul className="nav nav-pills">
                                    <li className="active" onClick={this.changeTab.bind(this,"1")}><a href="#basic-pill1" data-toggle="tab">规则命中排行</a></li>
                                    <li onClick={this.changeTab.bind(this,"2")}><a href="#basic-pill2" data-toggle="tab">策略风险系数</a></li>
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
                                                        <select id="straSelect" placeholder="请选择策略" className="form-control">
                                                            <option value={1}>事件1</option>
                                                            <option value={2}>事件2</option>
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
                                                        <select id="straSelect" className="form-control">
                                                            <option value={10}>10</option>
                                                            <option value={20}>20</option>
                                                            <option value={30}>30</option>
                                                            <option value={40}>40</option>
                                                            <option value={""}>全部</option>
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
                                            <fieldset className="content-group">
                                                <div className="panel-body col-md-6">
                                                    <div className="chart-container">
                                                        <div className="chart" id="d3-bar-vertical"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="table-responsive">
                                                        <table className="table text-nowrap">
                                                            <thead>
                                                            <tr>
                                                                <th>
                                                                    <h2 style={{fontWeight:"normal",color:"#666666"}}>{"规则命中排行"}</h2>
                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="media-left media-middle">
                                                                        <a href="#" className="btn bg-primary-400 btn-rounded btn-icon btn-xs">
                                                                            <span className="letter-icon">1</span>
                                                                        </a>
                                                                    </div>

                                                                    <div className="media-body">
                                                                        <div className="media-heading">
                                                                            <a href="#" className="letter-icon-title">规则5</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="text-muted text-size-small">2016-06-24</span>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <div className="media-left media-middle">
                                                                        <a href="#" className="btn bg-danger-400 btn-rounded btn-icon btn-xs">
                                                                            <span className="letter-icon">2</span>
                                                                        </a>
                                                                    </div>

                                                                    <div className="media-body">
                                                                        <div className="media-heading">
                                                                            <a href="#" className="letter-icon-title">规则4</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="text-muted text-size-small">2016-09-09</span>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <div className="media-left media-middle">
                                                                        <a href="#" className="btn bg-indigo-400 btn-rounded btn-icon btn-xs">
                                                                            <span className="letter-icon">3</span>
                                                                        </a>
                                                                    </div>

                                                                    <div className="media-body">
                                                                        <div className="media-heading">
                                                                            <a href="#" className="letter-icon-title">规则1</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="text-muted text-size-small">2016-11-12</span>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <div className="media-left media-middle">
                                                                        <a href="#" className="btn btn-rounded btn-icon btn-xs">
                                                                            <span className="letter-icon">4</span>
                                                                        </a>
                                                                    </div>

                                                                    <div className="media-body">
                                                                        <div className="media-heading">
                                                                            <a href="#" className="letter-icon-title">规则3</a>
                                                                        </div>

                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="text-muted text-size-small">2017-01-03</span>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <td>
                                                                    <div className="media-left media-middle">
                                                                        <a href="#" className="btn btn-rounded btn-icon btn-xs">
                                                                            <span className="letter-icon">5</span>
                                                                        </a>
                                                                    </div>

                                                                    <div className="media-body">
                                                                        <div className="media-heading">
                                                                            <a href="#" className="letter-icon-title">规则2</a>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="text-muted text-size-small">2017-03-09</span>
                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="basic-pill2">
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
                                                            <option value={""}>全部策略</option>
                                                            <option value={1}>策略1</option>
                                                            <option value={2}>策略2</option>
                                                            <option value={3}>策略3</option>
                                                        </select>
                                                    </li>
                                                    <li>
                                                        <button onClick={this._search.bind(this)} type="button"
                                                                className="btn btn-primary btn-icon">
                                                            <i className="icon-search4"/>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </fieldset>
                                            <fieldset className="content-group">
                                                <div className="panel-body col-md-12">
                                                    <div className="chart-container">
                                                        <div className="chart" id="d3-bar-vertical-risk"></div>
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
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {commonReducer}=state;
    return {

    }
}

export default connect(mapStateToProps)(StatisticalReportContainer)