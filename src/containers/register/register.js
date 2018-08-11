import React,{Component} from 'react'
import {NavBar,List,WingBlank,WhiteSpace,InputItem,Radio,Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'

export default class Register extends Component(){
    toLogin = () => {
        this.props.history.replace('./login')
    }
    render(){
        return (
            <div>
                <NavBar>用户注册</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem type='test' placeholder='please input username'>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='test' placeholder='please input your password'>密码：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='test' placeholder='please input your password again'>确认密码：</InputItem>
                        <WhiteSpace/>
                        <List.Item>
                            <span>用户类型：</span>&nbsp;&nbsp;&nbsp;
                            <Radio>老板</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio>大神</Radio>
                        </List.Item>
                        <WhiteSpace/>
                        <Button type='primary'>注&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}