/*
* 包含n个接口请求函数的对象模块
* 每个函数的返回值是promise
* */

import ajax from './ajax'

const BASE = '';

export const reqRegister = ({username,password,type}) => ajax(BASE+'/register',{username,password,type},'POST');

export const reqLogin = ({username,password}) => ajax(BASE+'/login',{username,password},'POST');

export const reqUpdateUser = (user) => ajax(BASE+'./update',user,'POST');
