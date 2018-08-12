import React,{Component} from 'react'
import {NavBar,List,WingBlank,WhiteSpace,InputItem,Radio,Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'

export default class Login extends Component(){
    state = {
        username: '',
        password: ''
    };
    toRegister = () => {
        this.props.history.replace('./register')
    };

    login = () => {
        console.log(this.state);
    };
    handleChange = (name,val) => {
        this.setState({
            [name]: val
        })
    };

    render(){
        return (
            <div>
                <NavBar>用户登录</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem type='test' placeholder='please input username'
                          onChange={(val) => this.handleChange('username',val)}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='test' placeholder='please input your password'
                          onChange={(val) => this.handleChange('password',val)}>密码：</InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.handleChange()}>登&nbsp;&nbsp;陆</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}