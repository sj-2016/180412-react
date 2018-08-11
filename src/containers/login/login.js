import React,{Component} from "react"

export default class Login extends Component(){
    toRegister = () => {
        this.props.history.replace('./register')
    }
    render(){
        return (
            <div>
                <NavBar>用户登录</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <InputItem type='test' placeholder='please input username'>用户名：</InputItem>
                        <WhiteSpace/>
                        <InputItem type='test' placeholder='please input your password'>密码：</InputItem>
                        <WhiteSpace/>
                        <Button type='primary'>注&nbsp;&nbsp;册</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toLogin}>没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}