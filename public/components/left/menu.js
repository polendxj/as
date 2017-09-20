/**
 * Created by Administrator on 2016/8/19.
 */
import React, {Component, PropTypes} from 'react';
import {browserHistory} from 'react-router'
import {roleApplicationUse} from '../../components/Tool/Tool'

class MainMenu extends Component {
    constructor() {
        super()
    }

    componentDidUpdate() {
        $(".left").on("click", function () {
            $(".left").removeClass("active");
            $(this).addClass("active");
            if ($(this).find("ul").length <= 0) {
                $(".hidden-ul").css("display", "none")

            }
        })

        $(".hidden-ul li").on("click", function () {
            $(".hidden-ul li a").css("backgroundColor", "transparent");
            $(".hidden-ul li a").css("borderRight", "0 #2C4B77 solid");
            $(".hidden-ul li a").css("color", "rgba(255,255,255,0.75)");
            $(this).find("a").css("backgroundColor", "#132640");
            $(this).find("a").css("color", "white");
            $(this).find("a").css("borderRight", "4px #2C4B77 solid");
            sessionStorage["routerType"] = "";
        })
    }

    componentDidMount() {
        $(".hidden-ul li").on("click", function () {
            $(".hidden-ul li a").css("backgroundColor", "transparent");
            $(".hidden-ul li a").css("borderRight", "0 #2C4B77 solid");
            $(".hidden-ul li a").css("color", "rgba(255,255,255,0.75)");
            $(this).find("a").css("backgroundColor", "#132640");
            $(this).find("a").css("color", "white");
            $(this).find("a").css("borderRight", "4px #2C4B77 solid");
            sessionStorage["routerType"] = "";
        })
        // Adjust page height on sidebar control button click
        $(document).on('click', '.sidebar-control', function (e) {
            var availableHeight = $(window).height() - $('body > .navbar').outerHeight() - $('body > .navbar + .navbar').outerHeight() - $('body > .navbar + .navbar-collapse').outerHeight();

            $('.page-container').attr('style', 'min-height:' + (availableHeight - 46) + 'px');
        });
        $('.sidebar-main-toggle').on('click', function (e) {
            e.preventDefault();
            $('#logoText').toggle();
            // Toggle min sidebar class
            $('body').toggleClass('sidebar-xs');
        });
    }

    render() {
        var mainMenu;
        switch (this.props.selected) {
            case 0:
                mainMenu = <PerformanceMonitoringMenu _changeLeftMenu={this.props._changeLeftMenu}/>
                break;
            case 1:
                mainMenu = <SystemConfiguration _changeLeftMenu={this.props._changeLeftMenu}/>
                break;
            case 2:
                mainMenu = <Elastic />
                break;
            case 3:
                mainMenu = <UserCenter />
                break;
            case 4:
                mainMenu = <AlarmManage />
                break;
        }
        return (
            <div className="sidebar sidebar-main " style={{borderRight: '0 red solid'}}>
                <div className="sidebar-content">
                    <div className="sidebar-category sidebar-category-visible">
                        <div className="category-content no-padding">
                            {mainMenu}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class SystemConfiguration extends Component {
    _leftMenuClick(path) {
        browserHistory.push(path)
    }

    componentDidMount() {
        $('.navigation-main').find('li').has('ul').children('a').on('click', function (e) {
            e.preventDefault();

            // Collapsible
            $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).toggleClass('active').children('ul').slideToggle(250);

            // Accordion
            if ($('.navigation-main').hasClass('navigation-accordion')) {
                $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(250);
            }
        });
    }

    render() {
        return (
            <ul className="navigation navigation-main navigation-accordion">

                <li className="navigation-header"><span>{"决策引擎"}</span> <i className="icon-menu" title=""
                                                                           data-original-title="实时监控"></i>
                </li>
                <li className="left active" onClick={this._leftMenuClick.bind(this, '/statisticalReport')}><a
                    href="javascript:void(0)"><i
                    className="icon-stats-bars2"></i> <span>{"统计报表"}</span></a></li>
                <li className="left" onClick={this._leftMenuClick.bind(this, '/policyManage')}><a
                    href="javascript:void(0)"><i
                    className=" icon-strategy"></i> <span>{"策略管理"}</span></a></li>
                <li className="left" onClick={this._leftMenuClick.bind(this, '/fieldsManage')}><a
                    href="javascript:void(0)"><i
                    className="icon-file-word"></i> <span>{"字段管理"}</span></a></li>
                <li className="left" onClick={this._leftMenuClick.bind(this, '/listManage')}><a
                    href="javascript:void(0)"><i
                    className="icon-list2"></i> <span>{"列表管理"}</span></a></li>
                <li className="left" onClick={this._leftMenuClick.bind(this, '/callManage')}><a
                    href="javascript:void(0)"><i
                    className=" icon-megaphone"></i> <span>{"调用管理"}</span></a></li>
                <ul className="navigation navigation-main navigation-accordion">
                    <li className="navigation-header"><span>{"风险预警"}</span> <i className="icon-menu" title=""
                                                                               data-original-title="实时监控"></i>
                    </li>
                    <li className="left" onClick={this._leftMenuClick.bind(this, '/userRisk')}><a
                        href="javascript:void(0)"> <i
                        className="  icon-user-block"></i> <span>{"个人预警"}</span></a></li>
                    <li className="left" onClick={this._leftMenuClick.bind(this, '/storeRisk')}><a
                        href="javascript:void(0)"> <i
                        className=" icon-cart5"></i> <span>{"商户预警"}</span></a></li>
                </ul>

            </ul>
        )
    }
}

class PerformanceMonitoringMenu extends Component {
    _leftMenuClick(path) {
        browserHistory.push(path)
    }

    componentDidMount() {
        $('.navigation-main').find('li').has('ul').children('a').on('click', function (e) {
            e.preventDefault();

            // Collapsible
            $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).toggleClass('active').children('ul').slideToggle(250);

            // Accordion
            if ($('.navigation-main').hasClass('navigation-accordion')) {
                $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(250);
            }
        });
    }

    render() {
        return (
            <ul className="navigation navigation-main navigation-accordion">

                <li className="navigation-header"><span>{"大盘概览"}</span> <i className="icon-menu" title=""
                                                                           data-original-title="实时监控"></i>
                </li>
                <li className="left active" onClick={this._leftMenuClick.bind(this, '/dashboard')}><a
                    href="javascript:void(0)"><i
                    className=" icon-stats-growth2"></i> <span>{"风险趋势"}</span></a></li>
                <li className="left" onClick={this._leftMenuClick.bind(this, '/dashboard')}><a
                    href="javascript:void(0)"><i
                    className="icon-target2"></i> <span>{"风险指标"}</span></a></li>
            </ul>

        )
    }
}

class Elastic extends Component {
    _leftMenuClick(path) {
        browserHistory.push(path)
    }

    componentDidMount() {
        $('.navigation-main').find('li').has('ul').children('a').on('click', function (e) {
            e.preventDefault();

            // Collapsible
            $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).toggleClass('active').children('ul').slideToggle(250);

            // Accordion
            if ($('.navigation-main').hasClass('navigation-accordion')) {
                $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(250);
            }
        });
    }

    render() {
        return (
            <ul className="navigation navigation-main navigation-accordion">

                <li className="navigation-header"><span>{"信贷服务"}</span> <i className="icon-menu" title=""
                                                                           data-original-title="信贷服务"></i>
                </li>
                <li className="left active" onClick={this._leftMenuClick.bind(this, '/preAudit')}><a
                    href="javascript:void(0)"><i
                    className="icon-pencil5"></i> <span>{"贷前审核"}</span></a></li>
                <li className="left" onClick={this._leftMenuClick.bind(this, '/afterLoanMonitor')}><a
                    href="javascript:void(0)"><i
                    className="icon-laptop"></i> <span>{"贷后监控"}</span></a></li>
            </ul>
        )
    }
}

class UserCenter extends Component {
    _leftMenuClick(path) {
        browserHistory.push(path)
    }

    render() {
        return (
            <ul className="navigation navigation-main navigation-accordion">

                <li className="navigation-header"><span>{Current_Lang.label.management}</span> <i className="icon-menu"
                                                                                                  title=""
                                                                                                  data-original-title="管理"></i>
                </li>
                <li
                    onClick={this._leftMenuClick.bind(this, '/UserManager/Admin')}><a
                    href="javascript:void(0)"><i
                    className="icon-user"></i> <span>{Current_Lang.menus.userManagement}</span></a></li>
                <li style={{display: 'none'}}
                    onClick={this._leftMenuClick.bind(this, '/UserManager/Permission')}><a
                    href="javascript:void(0)"><i
                    className="icon-vcard"></i> <span>权限管理</span></a></li>
                <li className="navigation-header"><span>{Current_Lang.label.operation}</span> <i className="icon-menu"
                                                                                                 title=""
                                                                                                 data-original-title="操作"></i>
                </li>
                <li
                    onClick={this._leftMenuClick.bind(this, '/UserManager/Operation/JobHistoryList')}><a
                    href="javascript:void(0)"><i
                    className="icon-history"></i> <span>{Current_Lang.menus.operationHistory}</span></a></li>


            </ul>
        )
    }
}

class AlarmManage extends Component {
    _leftMenuClick(path) {
        browserHistory.push(path)
    }

    componentDidMount() {
        $('.navigation-main').find('li').has('ul').children('a').on('click', function (e) {
            e.preventDefault();

            // Collapsible
            $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).toggleClass('active').children('ul').slideToggle(250);

            // Accordion
            if ($('.navigation-main').hasClass('navigation-accordion')) {
                $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(250);
            }
        });
    }

    render() {
        return (
            <ul className="navigation navigation-main navigation-accordion">

                <li className="navigation-header"><span>{Current_Lang.menus.alarmManagement}</span> <i
                    className="icon-menu" title=""
                    data-original-title="告警"></i>
                </li>
                <li>
                    <a href="javascript:void(0)"><i className="icon-warning"></i>
                        <span>{Current_Lang.menus.alarmManagement}</span></a></li>
                <li onClick={this._leftMenuClick.bind(this, '/systemConfig/originalSystem/dataCenterOfContentDistribute')}>
                    <a href="javascript:void(0)"><i className="icon-warning"></i>
                        <span>{Current_Lang.menus.alarmHistory}</span></a></li>
                <li onClick={this._leftMenuClick.bind(this, '/Monitor/Alarm/Threshold')}>
                    <a href="javascript:void(0)"><i className="icon-spam"></i>
                        <span>{Current_Lang.menus.alarmHistory}</span></a></li>

            </ul>
        )
    }
}

export default MainMenu