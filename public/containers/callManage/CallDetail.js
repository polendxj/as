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
                                <ul className="nav nav-tabs nav-tabs-highlight">
                                    <li className="active"><a href="#left-icon-tab1" data-toggle="tab"><i className="icon-menu7 position-left"></i> 属性</a></li>
                                    <li><a href="#left-icon-tab2" data-toggle="tab"><i className="icon-mention position-left"></i> 信息</a></li>
                                    <li><a href="#left-icon-tab3" data-toggle="tab"><i className="icon-mention position-left"></i> 地理位置</a></li>
                                    <li><a href="#left-icon-tab4" data-toggle="tab"><i className="icon-mention position-left"></i> 贷款</a></li>
                                    <li><a href="#left-icon-tab5" data-toggle="tab"><i className="icon-mention position-left"></i> 活动</a></li>

                                </ul>

                                <div className="tab-content">
                                    <div className="tab-pane active" id="left-icon-tab1">
                                        Add icon markup <code>before</code> tab nav text to display icons on the left side.
                                    </div>

                                    <div className="tab-pane" id="left-icon-tab2">
                                        Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid laeggin.
                                    </div>

                                    <div className="tab-pane" id="left-icon-tab3">
                                        DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg whatever.
                                    </div>

                                    <div className="tab-pane" id="left-icon-tab4">
                                        Aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthet.
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