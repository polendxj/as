/**
 * Created by Captain on 2017/8/28.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FinalResult from "./FinalResult"

class CallDetail extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        function initMap(){
            createMap();//创建地图
            setMapEvent();//设置地图事件
            addMapControl();//向地图添加控件
            addMarker();//向地图中添加marker
        }

        //创建地图函数：
        function createMap(){
            var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
            var point = new BMap.Point(113.871998,22.657299);//定义一个中心点坐标
            map.centerAndZoom(point,18);//设定地图的中心点和坐标并将地图显示在地图容器中
            window.map = map;//将map变量存储在全局
        }

        //地图事件设置函数：
        function setMapEvent(){
            map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
            map.enableScrollWheelZoom();//启用地图滚轮放大缩小
            map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
            map.enableKeyboard();//启用键盘上下左右键移动地图
        }

        //地图控件添加函数：
        function addMapControl(){
            //向地图中添加缩放控件
            var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_SMALL});
            map.addControl(ctrl_nav);
        }

        //标注点数组
        var markerArr = [{title:"",content:"",point:"113.871566|22.657115",isOpen:0,icon:{w:23,h:25,l:46,t:21,x:9,lb:12}}
        ];
        //创建marker
        function addMarker(){
            for(var i=0;i<markerArr.length;i++){
                var json = markerArr[i];
                var p0 = json.point.split("|")[0];
                var p1 = json.point.split("|")[1];
                var point = new BMap.Point(p0,p1);
                var iconImg = createIcon(json.icon);
                var marker = new BMap.Marker(point,{icon:iconImg});
                var iw = createInfoWindow(i);
                var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
                marker.setLabel(label);
                map.addOverlay(marker);
                label.setStyle({
                    borderColor:"#808080",
                    color:"#333",
                    cursor:"pointer"
                });

                (function(){
                    var index = i;
                    var _iw = createInfoWindow(i);
                    var _marker = marker;
                    _marker.addEventListener("click",function(){
                        this.openInfoWindow(_iw);
                    });
                    _iw.addEventListener("open",function(){
                        _marker.getLabel().hide();
                    })
                    _iw.addEventListener("close",function(){
                        _marker.getLabel().show();
                    })
                    label.addEventListener("click",function(){
                        _marker.openInfoWindow(_iw);
                    })
                    if(!!json.isOpen){
                        label.hide();
                        _marker.openInfoWindow(_iw);
                    }
                })()
            }
        }
        //创建InfoWindow
        function createInfoWindow(i){
            var json = markerArr[i];
            var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
            return iw;
        }
        //创建一个Icon
        function createIcon(json){
            var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
            return icon;
        }

        initMap();//创建和初始化地图
    }
    componentWillUnmount(){

    }
    _search(){

    }

    render(){
        var tableHeight = ($(window).height() - 130);
        var style = {width:"200px"};
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-flat">
                        <div className="panel-heading">
                            <h6 className="panel-title">调用详情</h6>
                        </div>

                        <div className="panel-body">
                            <div className="tabbable">
                                <div className="panel panel-white">
                                    <div className="panel-heading">
                                        <h6 className="panel-title">
                                            <div data-toggle="collapse" data-parent="#accordion-control-right" href="#call-1">
                                                <div style={{position:"relative"}}>
                                                    <FinalResult score={89} status={"reject"}/>
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
                                </div>
                                <ul className="nav nav-tabs nav-tabs-highlight">
                                    <li className="active"><a href="#left-icon-tab1" data-toggle="tab"><i className="icon-grid6 position-left"></i> 属性</a></li>
                                    <li><a href="#left-icon-tab2" data-toggle="tab"><i className="icon-address-book position-left"></i> 信息</a></li>
                                    <li><a href="#left-icon-tab3" data-toggle="tab"><i className="icon-location4 position-left"></i> 位置</a></li>
                                    <li><a href="#left-icon-tab4" data-toggle="tab"><i className="icon-coin-yen position-left"></i> 贷款申请</a></li>
                                    <li><a href="#left-icon-tab5" data-toggle="tab"><i className="icon-pushpin position-left"></i> 规则分析</a></li>

                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane active" id="left-icon-tab1">
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

                                    <div className="tab-pane" id="left-icon-tab2">
                                        <div className="table-responsive">
                                            <table className="table table-lg">
                                                <tbody>
                                                <tr>
                                                    <td>
                                                        <h6 className="no-margin">姓名 </h6>
                                                        <span className="text-muted">李海全</span>
                                                    </td>
                                                    <td>
                                                        <h6 className="no-margin">性别</h6>
                                                        <span className="text-muted">男</span>
                                                    </td>
                                                    <td>
                                                        <h6 className="no-margin">年龄</h6>
                                                        <span className="text-muted">40</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 className="no-margin">家庭住址</h6>
                                                        <span className="text-muted">陕西省江宁区筒子骨镇3号街区1182号</span>
                                                    </td>
                                                    <td>
                                                        <h6 className="no-margin">学历</h6>
                                                        <span className="text-muted">博士</span>
                                                    </td>
                                                    <td>
                                                        <h6 className="no-margin">婚姻状况</h6>
                                                        <span className="text-muted">已婚</span>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="left-icon-tab3">
                                        <div className="row invoice-payment">
                                            <div className="col-sm-5">
                                                <div className="content-group">
                                                    <h6>最近登录位置</h6>
                                                    <div className="table-responsive no-border">
                                                        <table className="table">
                                                            <tbody>
                                                            <tr>
                                                                <th>中国 四川 成都</th>
                                                            </tr>
                                                            <tr>
                                                                <th>中国 四川 绵阳</th>
                                                            </tr>
                                                            <tr>
                                                                <th>中国 四川 绵阳</th>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <h6>最近贷款位置</h6>
                                                    <div className="table-responsive no-border">
                                                        <table className="table">
                                                            <tbody>
                                                            <tr>
                                                                <th>四川省成都市武侯区益州大道北段207号</th>
                                                                <td className="text-right">成都银行</td>
                                                            </tr>
                                                            <tr>
                                                                <th>成都市锦江区琉璃路558号</th>
                                                                <td className="text-right">成都银行</td>
                                                            </tr>
                                                            <tr>
                                                                <th>成都市锦江区琉璃路558号</th>
                                                                <td className="text-right">成都银行</td>
                                                            </tr>
                                                            <tr>
                                                                <th>四川省成都市锦江区永安路299号</th>
                                                                <td className="text-right">华夏银行</td>
                                                            </tr>
                                                            <tr>
                                                                <th>清江中路52号附2号金沙·西街洋楼1层</th>
                                                                <td className="text-right">华夏银行</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-7">
                                                <div className="content-group">
                                                    <h6>地理位置</h6>
                                                    <div className="mb-15 mt-15">
                                                        <div style={{width:"100%",height:"550px",border:"#ccc solid 1px"}} id="dituContent"></div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="tab-pane" id="left-icon-tab4">
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <thead>
                                                <tr>
                                                    <th style={{width:"50px"}}>#</th>
                                                    <th>贷款号</th>
                                                    <th>贷款金额</th>
                                                    <th>申请日期</th>
                                                    <th>贷款渠道</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>321B78A952C41E6X</td>
                                                    <td>300,000</td>
                                                    <td>2017/09/10 14:26:31</td>
                                                    <td>手机应用</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>4231B78A932C41B6X</td>
                                                    <td>650,000</td>
                                                    <td>2017/09/06 12:15:12</td>
                                                    <td>贷款机构</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>4231B78A932C41B6X</td>
                                                    <td>650,000</td>
                                                    <td>2017/09/06 12:15:12</td>
                                                    <td>贷款机构</td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>4231B78A932C41B6X</td>
                                                    <td>650,000</td>
                                                    <td>2017/09/06 12:15:12</td>
                                                    <td>贷款机构</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>4231B78A932C41B6X</td>
                                                    <td>650,000</td>
                                                    <td>2017/09/06 12:15:12</td>
                                                    <td>贷款机构</td>
                                                </tr>
                                                <tr>
                                                    <td>6</td>
                                                    <td>4231B78A932C41B6X</td>
                                                    <td>650,000</td>
                                                    <td>2017/09/06 12:15:12</td>
                                                    <td>贷款机构</td>
                                                </tr>
                                                <tr>
                                                    <td>7</td>
                                                    <td>4231B78A932C41B6X</td>
                                                    <td>650,000</td>
                                                    <td>2017/09/06 12:15:12</td>
                                                    <td>贷款机构</td>
                                                </tr>
                                                <tr>
                                                    <td>8</td>
                                                    <td>4231B78A932C41B6X</td>
                                                    <td>650,000</td>
                                                    <td>2017/09/06 12:15:12</td>
                                                    <td>贷款机构</td>
                                                </tr>
                                                <tr>
                                                    <td>9</td>
                                                    <td>4231B78A932C41B6X</td>
                                                    <td>650,000</td>
                                                    <td>2017/09/06 12:15:12</td>
                                                    <td>贷款机构</td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="left-icon-tab5">
                                        <div className="timeline timeline-left content-group">
                                            <div className="timeline-container">
                                                <div className="timeline-row">
                                                    <div className="panel panel-flat timeline-content">
                                                        <div className="panel-heading">
                                                            <h6 className="panel-title">身份证号码不合法</h6>
                                                            <div className="heading-elements">
                                                                <span className="heading-text"><i className="icon-history position-left text-success"></i> 2017-09-09 22:14:56</span>
                                                            </div>
                                                        </div>

                                                        <div className="panel-body">
                                                            身份证号 ：34089841256321521X
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="timeline-row">
                                                    <div className="panel panel-flat timeline-content">
                                                        <div className="panel-heading">
                                                            <h6 className="panel-title">3个月内贷款银行过多</h6>
                                                            <div className="heading-elements">
                                                                <span className="heading-text"><i className="icon-history position-left text-success"></i> 2017-09-09 22:14:56</span>
                                                            </div>
                                                        </div>

                                                        <div className="panel-body">
                                                            5 家
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="timeline-row">

                                                    <div className="panel panel-flat timeline-content">
                                                        <div className="panel-heading">
                                                            <h6 className="panel-title">三个月新开经营性贷款笔数过多</h6>
                                                            <div className="heading-elements">
                                                                <span className="heading-text"><i className="icon-history position-left text-success"></i> 2017-09-09 22:14:56</span>
                                                            </div>
                                                        </div>

                                                        <div className="panel-body">
                                                            17 笔
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="timeline-row">

                                                    <div className="panel panel-flat timeline-content">
                                                        <div className="panel-heading">
                                                            <h6 className="panel-title">还款其他贷款过去24个月超过最大逾期数</h6>
                                                            <div className="heading-elements">
                                                                <span className="heading-text"><i className="icon-history position-left text-success"></i> 2017-09-09 22:14:56</span>
                                                            </div>
                                                        </div>

                                                        <div className="panel-body">
                                                            16 次
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="timeline-row">

                                                    <div className="panel panel-flat timeline-content">
                                                        <div className="panel-heading">
                                                            <h6 className="panel-title">还款其他贷款数目过多</h6>
                                                            <div className="heading-elements">
                                                                <span className="heading-text"><i className="icon-history position-left text-success"></i> 2017-09-09 22:14:56</span>
                                                            </div>
                                                        </div>

                                                        <div className="panel-body">
                                                            7 笔
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="timeline-row">

                                                    <div className="panel panel-flat timeline-content">
                                                        <div className="panel-heading">
                                                            <h6 className="panel-title">其他贷款平均年薪过长</h6>
                                                            <div className="heading-elements">
                                                                <span className="heading-text"><i className="icon-history position-left text-success"></i> 2017-09-09 22:14:56</span>
                                                            </div>
                                                        </div>

                                                        <div className="panel-body">
                                                            30 年
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

function mapStateToProps(state) {
    const {commonReducer}=state;
    return {

    }
}

export default connect(mapStateToProps)(CallDetail)