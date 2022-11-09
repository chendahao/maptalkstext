/*
 * @Author: chenhao
 * @Date: 2022-11-07 10:59:06
 * @LastEditTime: 2022-11-07 11:27:45
 * @FilePath: \maptalkstext\src\plugins\axios.ts
 * @Description: 
 */
'use strict'

import axios from 'axios'
import store from '@/store';
// import { Message } from 'element-ui'
import storagedata from '@/utils/storagedata'

// Full config:  https://github.com/axios/axios#request-config

function errorLog (type: string, err: any) {
  console.log(process.env.NODE_ENV)
  // 打印到控制台
  if (process.env.NODE_ENV === 'development') {
    console.log(err)
  } else {
  }
}

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  timeout: 60 * 1000, // Timeout
  headers: {
    Authorization: ''
  }
  // withCredentials: true, // Check cross-site Access-Control
}

const service = axios.create(config)

// service.interceptors.request.use(
//   function (config) {
//     // 如果用户登录
//     if (storagedata.getUserdata()) {
//       let token = storagedata.getlocalStorage_UserToken()
//       // config.headers.Authorization = 'Bearer ' + token
//     }
//     // if (process.env.NODE_ENV === 'development') {
//     //   config.headers.Authorization = 'Basic YWRtaW46MTIzMTIz'
//     // }
//     // Do something before request is sent
//     return config
//   },
//   function (error) {
//     // Do something with request error
//     errorLog('request', error)
//     // const code = error.request.status
//     store.dispatch('setError', '111请求出错')
//     // Message.error('请求出错')

//     // return Promise.reject(error)
//   }
// )

// // Add a response interceptor
// service.interceptors.response.use(
//   function (response) {
//     // Do something with response data
//     return response
//   },
//   function (error) {
//     errorLog('response', error.response)
//     const code = error.response.status

//     switch (code) {
//       case 400:
//         return error.response
//       case 401:
//         // Message.error('没有相关权限或需要登录')
//         break
//       case 404:
//         // Message.error(error.response.data || '没有找到相关数据')
//         break
//       case 500:
//         // Message.error('服务器错误')
//         break
//       case 504:
//         // Message.error('网关超时')
//         break
//       default:
//         return error.response
//     }
//     // Do something with response error
//   }
// )

export default service
