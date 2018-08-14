/*
包含n个action的模块(本质是创建action的action creator)
1. 同步action
2. 异步action
 */
import {
    reqRegister,
    reqLogin,
    reqUpdateUser
} from "../api";
import {
    AUTH_SUCCESS,
    ERROR_MSG,
    RECEIVE_USER,
    RESET_USER
} from "./action-type";

//注册/登录成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS,data: user});
//显示错误信息的同步action
const errorMsg = (msg) => ({type: ERROR_MSG,data: msg});
//接受用户消息的同步action
const receiveUser = (user) => ({type:RECEIVE_USER,data:user});
//重置用户信息
const resetUser = (msg) => ({type:RESET_USER,data:msg});


//注册的异步action
export function register({username,password,password2,type}) {
    if (!username){
        return errorMsg('用户名必须填写')
    }else if(!password){
        return errorMsg('密码必须填写')
    }else if (password2 !== password){
        return errorMsg('2次密码必须一致')
    }else if (!type){
        return errorMsg('类型必须填写')
    }

    return async dispatch => {
        //执行异步（发送ajax请求）
        const response = await reqRegister({username, password, type});
        //一步得到结果
        const result = response.data; //{code: 0,data: user} | {code: 1,msg: 'xxx' }
        if (result.code === 0) {// success
            //分发同步action（成功）
            const user = result.data;
            dispatch(authSuccess(user))
        } else { //失败
            //分发同步action（成功）
            const msg = result.msg;
            dispatch(errorMsg(msg))
        }
    }
}

/*
* 登录异步的action
* */
export function login(username,password) {
    return async dispatch => {
        //进行前台表单验证
        if (!username){
            return dispatch(errorMsg('用户名必须填写'))
        }else if (!password){
            return dispatch(errorMsg('密码必须填写'))
        }
        //执行异步（发送ajax请求）
       const response =  await reqLogin(username,password);
       const result = response.data;// {code: 0, data: user} | {code: 1, msg: 'xxx'}
        if (result.code === 0){
            const user = result.data;
            dispatch(authSuccess(user))
        }else {
            const msg = result.msg;
            dispatch(errorMsg(msg))
        }
    }
}
//完善更新用户信息
export function updateUser(user) {
    return async dispatch => {
        //发送异步的ajax请求
        const response = await reqUpdateUser(user);
        const result = response.data;
        //根据结果分发同步action
        if(result.code === 0){
            dispatch(receiveUser(result.data))
        }else {
            dispatch(resetUser(result.msg))
        }

    }
}