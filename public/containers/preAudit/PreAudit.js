/**
 * Created by Captain on 2017/8/27.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class PreAudit extends Component{
    constructor(props) {
        super(props);
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
                        <div className="panel-body">
                            <div className="tabbable">
                                <ul className="nav nav-pills">
                                    <li className="active"><a href="#singleAudit" data-toggle="tab">单笔审核</a></li>
                                    <li><a href="#batchAudit" data-toggle="tab">批量审核</a></li>
                                    <li><a href="#auditList" data-toggle="tab">历史审核列表</a></li>
                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane active" id="singleAudit">
                                        <div className="content" style={{marginTop: '20px'}}>
                                            <form id="registerClassifyForm" className="form-horizontal" action="#">
                                                <div className="row" style={{height: tableHeight + 'px', overflowY: 'auto'}}>
                                                    <div className="col-sm-12">
                                                        <fieldset className="content-group">
                                                            <p className="single-apply-title">借款信息</p>
                                                            <div className="single-line"></div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"申请借款金额"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                    <span style={{paddingLeft:"10px"}}>元</span>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"申请借款期限"}</label>
                                                                <div className="col-lg-3">
                                                                    <div className="input-group">
                                                                        <input type="text" className="form-control"/>
                                                                            <div className="input-group-btn">
                                                                                <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">月
                                                                                    <span className="caret"/>
                                                                                </button>
                                                                                <ul className="dropdown-menu dropdown-menu-right">
                                                                                    <li><a href="#">月</a></li>
                                                                                    <li><a href="#">天</a></li>
                                                                                </ul>
                                                                            </div>
                                                                    </div>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"申请借款日期"}</label>
                                                                <div className="col-lg-3">
                                                                    <input id="daterange-single" type="text"
                                                                           className="form-control daterange-single"
                                                                           placeholder="选择日期" style={style}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"借款用途"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"进件省份"}</label>
                                                                <div className="col-lg-3">
                                                                    <select id="classify" className="form-control" style={style}>
                                                                        <option value={1}>北京市</option>
                                                                        <option value={2}>天津市</option>
                                                                        <option value={2}>河北省</option>
                                                                        <option value={2}>江苏省</option>
                                                                        <option value={2}>四川省</option>
                                                                        <option value={2}>重庆市</option>
                                                                        <option value={2}>广东省</option>
                                                                        <option value={2}>福建省</option>
                                                                        <option value={2}>台湾省</option>
                                                                    </select>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"进件城市"}</label>
                                                                <div className="col-lg-3">
                                                                    <select id="classify" className="form-control" style={style}>
                                                                        <option value={1}>北京市</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"进件渠道"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                </div>
                                                            </div>
                                                        </fieldset>
                                                        <fieldset className="content-group">
                                                            <p className="single-apply-title">借款人信息</p>
                                                            <div className="single-line"></div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-1 control-label"
                                                                             style={{
                                                                                 textAlign: 'right'
                                                                             }}>{"姓名"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                    <span style={{paddingLeft:"10px"}}>元</span>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"身份证号"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                    <span style={{paddingLeft:"10px"}}>元</span>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"手机号码"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                    <span style={{paddingLeft:"10px"}}>元</span>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"银行卡号"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"单位座机"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"家庭座机"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"QQ号"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"电子邮箱"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"学历"}</label>
                                                                <div className="col-lg-3">
                                                                    <select id="classify" className="form-control" style={style}>
                                                                        <option value={1}>高中以下</option>
                                                                        <option value={1}>高中/中专</option>
                                                                        <option value={1}>大专</option>
                                                                        <option value={1}>本科</option>
                                                                        <option value={1}>研究生</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"婚姻"}</label>
                                                                <div className="col-lg-3">
                                                                    <select id="classify" className="form-control" style={style}>
                                                                        <option value={1}>未婚</option>
                                                                        <option value={1}>已婚</option>
                                                                        <option value={1}>离异</option>
                                                                        <option value={1}>丧偶</option>
                                                                        <option value={1}>再婚</option>
                                                                        <option value={1}>复婚</option>
                                                                    </select>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"房产情况"}</label>
                                                                <div className="col-lg-3">
                                                                    <select id="classify" className="form-control" style={style}>
                                                                        <option value={1}>无房</option>
                                                                        <option value={1}>有房有贷款</option>
                                                                        <option value={1}>有房无贷款</option>
                                                                        <option value={1}>其他</option>
                                                                    </select>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"房产类型"}</label>
                                                                <div className="col-lg-3">
                                                                    <select id="classify" className="form-control" style={style}>
                                                                        <option value={1}>商品房</option>
                                                                        <option value={1}>经济适用房</option>
                                                                        <option value={1}>商住两用房</option>
                                                                        <option value={1}>回迁房</option>
                                                                        <option value={1}>拆迁房</option>
                                                                        <option value={1}>自建房</option>
                                                                        <option value={1}>宅基地</option>
                                                                        <option value={1}>临建房</option>
                                                                        <option value={1}>期房</option>
                                                                        <option value={1}>预售房</option>
                                                                        <option value={1}>其他</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"户籍地址"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"家庭地址"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"通讯地址"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"职业"}</label>
                                                                <div className="col-lg-3">
                                                                    <select id="classify" className="form-control" style={style}>
                                                                        <option value={1}>政府官员/公务员</option>
                                                                        <option value={1}>专业人员</option>
                                                                        <option value={1}>企业高中级主管</option>
                                                                        <option value={1}>军官</option>
                                                                        <option value={1}>企业负责人、股东</option>
                                                                        <option value={1}>企业基层主管</option>
                                                                        <option value={1}>警察、消防员</option>
                                                                        <option value={1}>操作人员</option>
                                                                        <option value={1}>现役军人</option>
                                                                        <option value={1}>个体商店老板</option>
                                                                        <option value={1}>农林牧业</option>
                                                                        <option value={1}>实习生</option>
                                                                        <option value={1}>退休</option>
                                                                        <option value={1}>家庭主妇</option>
                                                                        <option value={1}>学生</option>
                                                                        <option value={1}>失业</option>
                                                                    </select>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"申请人员类别"}</label>
                                                                <div className="col-lg-3">
                                                                    <select id="classify" className="form-control" style={style}>
                                                                        <option value={1}>在职</option>
                                                                        <option value={1}>学生</option>
                                                                    </select>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"工作时间"}</label>
                                                                <div className="col-lg-3">
                                                                    <select id="classify" className="form-control" style={style}>
                                                                        <option value={1}>1年以下</option>
                                                                        <option value={1}>1年</option>
                                                                        <option value={1}>2年</option>
                                                                        <option value={1}>3-4年</option>
                                                                        <option value={1}>5-7年</option>
                                                                        <option value={1}>8-9年</option>
                                                                        <option value={1}>10年以上</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"工作单位"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"单位地址"}</label>
                                                                <div className="col-lg-3">
                                                                    <input name="name" type="text" className="form-control" autoComplete="off" style={style}/>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"公司行业"}</label>
                                                                <div className="col-lg-3">
                                                                    <select id="classify" className="form-control" style={style}>
                                                                        <option value={1}>农、林、牧、渔业</option>
                                                                        <option value={1}>采掘业</option>
                                                                        <option value={1}>制作业</option>
                                                                        <option value={1}>金融业</option>
                                                                        <option value={1}>信息服务业</option>
                                                                        <option value={1}>电力、燃气业</option>
                                                                        <option value={1}>建筑业</option>
                                                                        <option value={1}>教育</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="form-group form-inline">
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"公司性质"}</label>
                                                                <div className="col-lg-3">
                                                                    <select id="classify" className="form-control" style={style}>
                                                                        <option value={1}>机关事业</option>
                                                                        <option value={1}>国有股份</option>
                                                                        <option value={1}>合资</option>
                                                                        <option value={1}>私营</option>
                                                                        <option value={1}>个体</option>
                                                                        <option value={1}>其他</option>
                                                                    </select>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"职位"}</label>
                                                                <div className="col-lg-3">
                                                                    <select id="classify" className="form-control" style={style}>
                                                                        <option value={1}>高级资深人员</option>
                                                                        <option value={1}>中级技术人员</option>
                                                                        <option value={1}>初级助理人员</option>
                                                                        <option value={1}>见习专员</option>
                                                                        <option value={1}>高层管理人员</option>
                                                                        <option value={1}>中层管理人员</option>
                                                                        <option value={1}>基层管理人员</option>
                                                                        <option value={1}>普通员工</option>
                                                                    </select>
                                                                </div>
                                                                <label className="col-lg-1 control-label"
                                                                       style={{
                                                                           textAlign: 'right'
                                                                       }}>{"年收入"}</label>
                                                                <div className="col-lg-3">
                                                                    <select id="classify" className="form-control" style={style}>
                                                                        <option value={1}>10000以下</option>
                                                                        <option value={1}>10000-50000</option>
                                                                        <option value={1}>50000-100000</option>
                                                                        <option value={1}>100000-200000</option>
                                                                        <option value={1}>200000以上</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                        </fieldset>

                                                        <div className="form-group" >
                                                            <div className="col-lg-11 text-right" style={{marginTop: "50px"}}>
                                                                <button type="button" className="btn btn-primary">{"保存"}
                                                                </button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="tab-pane" id="batchAudit">
                                        <div className="content" style={{marginTop: '20px'}}>
                                            <form id="registerClassifyForm" className="form-horizontal" action="#">
                                                <div className="row" style={{height: tableHeight + 'px', overflowY: 'auto'}}>
                                                    <div className="col-sm-12">
                                                        <fieldset className="content-group">
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
                                                        </fieldset>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="auditList">
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
                                                    <li className="form-inline">
                                                        <label className="control-label" style={{paddingRight:"6px"}}>查询方式</label>
                                                        <select id="typeSelect" className="form-control">
                                                            <option value={""}>全部类型</option>
                                                            <option value={1}>手动单笔</option>
                                                            <option value={2}>手动批量</option>
                                                            <option value={3}>接口调用</option>
                                                        </select>
                                                    </li>
                                                    <li className="form-inline">
                                                        <label className="control-label" style={{paddingRight:"6px"}}>扫描建议</label>
                                                        <select id="straListSelect" className="form-control">
                                                            <option value={""}>全部类型</option>
                                                            <option value={1}>人工审核</option>
                                                            <option value={2}>通过</option>
                                                            <option value={2}>拒绝</option>
                                                        </select>
                                                    </li>
                                                    <li className="form-inline">
                                                        <label className="control-label" style={{paddingRight:"6px"}}>分组信息</label>
                                                        <select id="straSelect" placeholder="请选择策略" className="form-control">
                                                            <option value={""}>全部类型</option>
                                                            <option value={1}>个人基本信息核查</option>
                                                            <option value={2}>不良信息扫描</option>
                                                            <option value={2}>多平台借贷申请检测</option>
                                                            <option value={2}>多平台借贷负债检测</option>
                                                            <option value={2}>关联人信息扫描</option>
                                                            <option value={2}>客户行为检测</option>
                                                        </select>
                                                    </li>
                                                    <li>
                                                        <button onClick={this._search.bind(this)} type="button"
                                                                className="btn btn-primary btn-icon"><i
                                                            className="icon-search4"></i>搜索</button>
                                                    </li>
                                                </ul>
                                            </fieldset>
                                            <div className="table-responsive" style={{height:tableHeight+'px',overflowY:'auto'}}>
                                                <table className="table table-bordered table-hover" style={{marginBottom:'85px'}}>
                                                    <thead>
                                                    <tr style={{fontWeight:'bold'}}>
                                                        <th className="col-md-1 text-bold text-center">{"扫描时间"}</th>
                                                        <th className="col-md-3 text-bold text-center">{"任务编号/报告编号/申请编号"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"姓名"}</th>
                                                        <th className="col-md-1 text-bold text-center">{"查询方式"}</th>
                                                        <th className="col-md-2 text-bold text-center">{"所属应用"}</th>
                                                        <th className="col-md-2 text-bold text-center">{"操作人"}</th>
                                                        <th className="col-md-2 text-bold text-center">{"扫描建议"}</th>
                                                        <th className="text-center" style={{width: "20px"}}><i
                                                            className="icon-arrow-down12"/></th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td className="text-center">{"2017-08-27"}</td>
                                                        <td className="text-center">{"2112723"}</td>
                                                        <td className="text-center">{"张三"}</td>
                                                        <td className="text-center">{"手动单笔"}</td>
                                                        <td className="text-center">{"汇融易_网页"}</td>
                                                        <td className="text-center">{"admin"}</td>
                                                        <td className="text-center">{"人工审核"}</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle"
                                                                       data-toggle="dropdown" aria-expanded="false"><i
                                                                        className="icon-menu7"/></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li style={{display:'block'}}>
                                                                            <a href="javascript:void(0)"><i className="icon-pencil5"/>
                                                                                {"修改"}</a></li>
                                                                        <li style={{display:'block'}}><a
                                                                            href="javascript:void(0)"><i className="icon-trash"/>
                                                                            {"删除"}</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr style={{backgroundColor:"#F8F8F8"}}>
                                                        <td className="text-center">{"2017-08-27"}</td>
                                                        <td className="text-center">{"2112724"}</td>
                                                        <td className="text-center">{"李四"}</td>
                                                        <td className="text-center">{"手动批量"}</td>
                                                        <td className="text-center">{"汇融易_网页"}</td>
                                                        <td className="text-center">{"admin"}</td>
                                                        <td className="text-center">{"通过"}</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle"
                                                                       data-toggle="dropdown" aria-expanded="false"><i
                                                                        className="icon-menu7"/></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li style={{display:'block'}}>
                                                                            <a href="javascript:void(0)"><i className="icon-pencil5"/>
                                                                                {"修改"}</a></li>
                                                                        <li style={{display:'block'}}><a
                                                                            href="javascript:void(0)"><i className="icon-trash"/>
                                                                            {"删除"}</a></li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">{"2017-08-27"}</td>
                                                        <td className="text-center">{"2112725"}</td>
                                                        <td className="text-center">{"付大海"}</td>
                                                        <td className="text-center">{"接口调用"}</td>
                                                        <td className="text-center">{"汇融易_网页"}</td>
                                                        <td className="text-center">{"admin"}</td>
                                                        <td className="text-center">{"拒绝"}</td>
                                                        <td className="text-center">
                                                            <ul className="icons-list">
                                                                <li className="dropdown">
                                                                    <a href="#" className="dropdown-toggle"
                                                                       data-toggle="dropdown" aria-expanded="false"><i
                                                                        className="icon-menu7"/></a>
                                                                    <ul className="dropdown-menu dropdown-menu-right">
                                                                        <li style={{display:'block'}}>
                                                                            <a href="javascript:void(0)"><i className="icon-pencil5"/>
                                                                                {"修改"}</a></li>
                                                                        <li style={{display:'block'}}><a
                                                                            href="javascript:void(0)"><i className="icon-trash"/>
                                                                            {"删除"}</a></li>
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

function mapStateToProps(state) {
    const {commonReducer}=state;
    return {

    }
}

export default connect(mapStateToProps)(PreAudit)