import React,{Component} from 'react'
import PropTypes from 'prop-types'
import {Grid,List} from 'antd-mobile'

export default class HeaderSelector extends Component {
    static propTypes = {
        setHeader: PropTypes.func.isRequired
    };
    state = {// 当前选择的头像图片对象
        icon: null
    };

    setHeader = ({icon,text}) => { // item: {icon, text}
        this.setState({icon});
        this.props.setHeader(text)
    };
    constructor(props){
        super(props);
        //初始化需要显示列表数据
        this.headerList = [];
        for (var i = 0 ; i < 20; i ++){
            const text = `头像${i+1}`;
            const icon = require(`./images/${text}.png`);
            this.headerList.push({icon,text})
        }
    }
    render(){
        const {icon} = this.state;
        const head = icon ? <div>已选择头像：<img src={icon}/></div>:'请选择头像';

        return (
            <List renderHeader = {() => head}>
                <Grid data = {this.headerList}
                       columnNum = {5}
                        onClick = {this.selectHeader}/>
            </List>
        )
    }
}