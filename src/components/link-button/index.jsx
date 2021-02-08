import React from 'react'
import './index.less'
/*
外形像链接的按钮
 */
export default function LinkButton(props) {
  //特别注意 ... 的作用
  return <button {...props} className="link-button"></button>
}