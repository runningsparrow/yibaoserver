/*
包含n个日期时间处理的工具函数模块
*/

/*
  格式化日期
*/

//export 后面没跟 default 引入需要 用 {} 包起来
//比如 import {formateDate} from '../../utils/dateUtils'
export function formateDate(time) {
  if (!time) return ''
  let date = new Date(time)
  return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
    + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
}