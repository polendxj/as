/**
 * Created by Captain on 2017/8/31.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class FieldsSelect extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){

    }
    componentWillUnmount(){

    }
    render(){
        var {datas,showIndex} = this.props;
        return (
            <select id="classify" className="form-control" style={{width:"240px",marginLeft:"10px"}} defaultValue={datas[showIndex].id}>
                {datas.map(function (data,index) {
                    return <option key={"select"+index} value={data.id}>{data.data}</option>
                })}
                <option value={21}>{"[系统][字段] test"}</option>
                <option value={22}>{"[系统][字段] test2"}</option>
                <option value={23}>{"[系统][字段] test3"}</option>
            </select>
        )
    }
}

function mapStateToProps(state) {
    const {commonReducer}=state;
    return {

    }
}

export default connect(mapStateToProps)(FieldsSelect)