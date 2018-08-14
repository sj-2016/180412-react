import React,{Component} from 'react'
import {NavBar,List,WingBlank,WhiteSpace,InputItem,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import Logo from '../../components/logo/logo'
import {login} from '../../redux/actions'
//登录路由组件
 class Login extends Component{
    //初始化状态
    state = {
        username: '',
        password: ''
    };
    //跳转到注册
    toRegister = () => {
        //编程式路由导航（通过纯js实现路由跳转）
        this.props.history.replace('./register')
    };
//请求登录
    login = () => {
        console.log(this.state);
        this.props.login(this.state)
    };
    //点击后触发的回调函数
    handleChange = (name,val) => {
        this.setState({
            [name]: val
        })
    };

    render(){
     //   const {type} = this.state;
        const {msg, redirectTo} = this.props.user;
        // 判断是否需要自动跳转
        if(redirectTo) {
            return <Redirect to={redirectTo}/>  // 在render()中实现自动跳转指定路由
        }

        return (
            <div>
                <NavBar>用户登录</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <p className='error-msg'>{msg}</p>

                        <InputItem type='test' placeholder='please input username'
                          onChange={(val) => this.handleChange('username',val)}>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='test' placeholder='please input your password'
                          onChange={(val) => this.handleChange('password',val)}>密码：</InputItem>
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;陆</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}
export default connect(
    state => ({user: state.user}),  // 向UI组件Login中传入哪些一般属性
    {login} // 向UI组件Login中传入哪些函数属性
   )(Login)