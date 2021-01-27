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

 20210123
 p30 二级子路由
 子路由都放置在在admin.jsx里
 然后在admin.jsx 引入 Route Switch
 Route 有两个属性 path 和 component
 
 p31 左侧菜单跳转路由
 在menu.item里包裹 <link></link>

 p32 菜单数据 
 抽离出来，单独写一个 src/config/menuconfig.js
 在 left-nav 引入 menuconfig

 20210127
 p32 菜单列表 map() 加递归
 map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
 map() 方法按照原始数组元素顺序依次处理元素。
 注意： map() 不会对空数组进行检测。
 注意： map() 不会改变原始数组。


 p33 菜单列表 reduce() 加递归
 reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
 reduce() 可以作为一个高阶函数，用于函数的 compose。
 注意: reduce() 对于空数组是不会执行回调函数的。
 ====================
 实例
  计算数组元素相加后的总和：

  var numbers = [65, 44, 12, 4];
  
  function getSum(total, num) {
      return total + num;
  }
  function myFunction(item) {
      document.getElementById("demo").innerHTML = numbers.reduce(getSum);
  }
  输出结果：

  125
 ====================
 p34
