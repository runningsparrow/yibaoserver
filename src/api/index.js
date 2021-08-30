/*
要求: 能根据接口文档定义接口请求
包含应用中所有接口请求函数的模块
每个函数的返回值都是promise

基本要求: 能根据接口文档定义接口请求函数
 */

 //20200107
 //引入 ajax
import ajax from './ajax'

//20210131
//引入jsonp
import jsonp from 'jsonp'

import axios from 'axios'
//引入message
import {message} from 'antd'


// const BASE = 'http://localhost:5000'
// 在 package.json 配置代理服务器
const BASE = ''


//登录
/*
export function reqLogin(username, password) {
  return ajax('/login', {username, password}, 'POST')
}*/

//改成箭头函数
export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST')


//添加用户
export const reqAddUser = (user) => ajax(BASE + '/manage/user/add', user, 'POST')


//获取 环境 plex 列表
export const reqPlexes = () => ajax(BASE + '/manage/plex/list', 'GET')

//更新plex
export const reqUpdatePlex = (plex) => ajax(BASE + '/manage/plex/update', plex, 'POST')


//增加plex
export const reqAddPlex = (plex) => ajax(BASE + '/manage/plex/add', plex, 'POST')

//删除plex
export const reqDelPlex = (plexname) => ajax(BASE + '/manage/plex/delete', plexname, 'POST')


//获取plex的 lpar列表
export const reqPlexLpars = (plexname) => ajax(BASE + '/manage/plex/lpar', plexname, 'POST')


//获取 环境 lpar 列表
export const reqLpars = () => ajax(BASE + '/manage/lpar/list', 'GET')


// 获取lpar分页列表
export const reqLparspage = (pageNum, pageSize) => ajax(BASE + '/manage/lpar/pagelist', {pageNum, pageSize})


//获取 环境 env 列表
export const reqEnvs = () => ajax(BASE + '/manage/env/list', 'GET') 



/*
jsonp
json请求的接口请求函数
 */
export const reqWeather = (city) => {

  //所有的接口型函数都要返回 pormise 对象
  return new Promise((resolve, reject) => {
    // const url = `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=GyR9yTlfXytiUGRbeAE4MDGiWWy2pdP7`
    const url = `http://api.map.baidu.com/weather/v1/?district_id=310100&data_type=all&ak=GyR9yTlfXytiUGRbeAE4MDGiWWy2pdP7`
    // 发送jsonp请求
    jsonp(url, {}, 
      // (err, data) => {
      //   console.log('jsonp()', err, data)
      //   // 如果成功了
      //   if (!err && data.status==='success') {
      //     // 取出需要的数据
      //     const {dayPictureUrl, weather} = data.results[0].weather_data[0]
      //     resolve({dayPictureUrl, weather})
      //   } else {
      //     // 如果失败了
      //     message.error('获取天气信息失败!')
      //   }
      // }
      function(err, data){
          console.log('jsonp()', err, data)
        // 如果成功了
        if (!err && data.status==='success') {
          // 取出需要的数据
          const {dayPictureUrl, weather} = data.results[0].weather_data[0]
          resolve({dayPictureUrl, weather})
        } else {
          // 如果失败了
          message.error('获取天气信息失败!')
        }
      }
    )
    // let promise
    // promise = axios.get(url
    // )
    // // 2. 如果成功了, 调用resolve(value)
    // promise.then(response => {
    //       // 取出需要的数据
    //       console.log(response)
    //       const {dayPictureUrl, weather} = response.results[0].weather_data[0]
    //       resolve({dayPictureUrl, weather})
    // // 3. 如果失败了, 不调用reject(reason), 而是提示异常信息
    // }).catch(error => {
    //     // reject(error)
    //     message.error('获取天气信息失败!' + error.message)
    // })

  })
}
// reqWeather('北京')
/*
jsonp解决ajax跨域的原理
  1). jsonp只能解决GET类型的ajax请求跨域问题
  2). jsonp请求不是ajax请求, 而是一般的get请求
  3). 基本原理
   浏览器端:
      动态生成<script>来请求后台接口(src就是接口的url)
      定义好用于接收响应数据的函数(fn), 并将函数名通过请求参数提交给后台(如: callback=fn)
   服务器端:
      接收到请求处理产生结果数据后, 返回一个函数调用的js代码, 并将结果数据作为实参传入函数调用
   浏览器端:
      收到响应自动执行函数调用的js代码, 也就执行了提前定义好的回调函数, 并得到了需要的结果数据
 */