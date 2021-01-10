进度记录：

20201227 p18

20210107 p21 p22 登录
 p22 在 package.json 配置代理服务器解决跨域请求问题
 比如："proxy": "http://localhost:5000"
 p23 login 请求改成 async await 的模式
 p24 
 优化1 ajax.js 统一处理异常请求，
 在请求出错时, 不reject(error), 而是显示错误提示
 p25
 优化2: 异步得到不是reponse, 而是response.data
   在请求成功resolve时: resolve(response.data)
   使用 this.props.history.replace 代替 this.props.history.push
 p26
 在内存保存登录的user
 建立 util 目录存放工具函数

 p27 维持登录 
 使用store 存储对象及各组件调用

 p28 使用 antd layout布局 
 1,在src下建立 components目录
 在components 目录下建立 header left-nav目录 
 建立 left-nav/index.jsx index.less header/index.jsx index.less
 为 admin.jsx left-nav header 增加一点样式

 p29
 1
 在 left-nav 把 div 改成 link，使其可以点击 
 引入 import {Link} from 'react-router-dom'
 2
 左侧menu