import React,{Component} from 'react'
import {NavBar,List,WingBlank,WhiteSpace,InputItem,Radio,Button} from 'antd-mobile'

import Logo from '../../components/logo/logo'

export default class Register extends Component(){
    state = {
        username: '',
        password: '',
        password2: '',
        type: 'dashen'
    }
    toLogin = () => {
        this.props.history.replace('./login')
    }

    register = () => {
        console.log(this.state);
    }

    handleChange = (name,val) => {
        this.setState({
            [name]: val
        })
    }
    render(){
        return (
            <div>
                <NavBar>用户注册</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem type='test' placeholder='please input username'
                           onChange={(val) => this.handleChange('username',val)}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='test' placeholder='please input your password'
                           onChange={(val) => this.handleChange('password',val)}>密码：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='test' placeholder='please input your password again'
                           onChange={(val) => this.handleChange('password2',val)}>确认密码：</InputItem>
                        <WhiteSpace/>
                        <List.Item>
                            <span>用户类型：</span>&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='laoban'} onChange={() =>{this.handleChange('type','laoban')}}>老板</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='dashen'} onChange={() => {this.handleChange('type','dashen')}}>大神</Radio>
                        </List.Item>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.handleChange()}>注&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}