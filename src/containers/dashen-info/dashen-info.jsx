import React,{Component} from 'react'
import {connect} from 'react-redux'

class DashenInfo extends Component{
    render(){
        return(
            <div>
                DasehenInfo
            </div>
        )
    }
}
export default connect(
    state =>({}),
    {}
)(DashenInfo)
