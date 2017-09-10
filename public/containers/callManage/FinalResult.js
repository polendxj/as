/**
 * Created by Captain on 2017/8/30.
 */
/**
 * Created by Captain on 2017/8/30.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class FinalResult extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    render(){
        var {score,status} = this.props;
        return (
            <div className={"finalResult "+status} style={{lineHeight: '26px',float:"left"}}>
                <span className="riskScore">{score}</span>
                <span className="riskStatus">{status.toUpperCase()}</span>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {commonReducer}=state;
    return {

    }
}

export default connect(mapStateToProps)(FinalResult)