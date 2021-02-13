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
 p34 自动选择当前菜单
 在 /Left-nav/index.jsx引入 WithRouter
 import {Link, withRouter} from 'react-router-dom'


 p35 自动打开当前子列表
 需要利用 componentWillMount

20210128
P37 Header 组件
静态界面实现 , 需要用到 css来处理边距对其，还需要用到伪元素

P38 jsonp 插件的使用  
在 api/index.jsx 定义 jsonp的接口请求函数

p39 jsonp 跨域请求问题
需要申请百度API Key申请地址：http://lbsyun.baidu.com/apiconsole/key
创建百度应用，提交bai后得到API Key

p40 动态显示当前时间和天气
https://github.com/thyhates/react-pinyin
汉字转拼音
定义一个 /src/utils/dateUtils.js 模块
百度天气jsop访问 corb问题,暂时跳过


20200208
P4141_尚硅谷_动态显示当前标题

==================================
箭头函数相当于匿名函数，并且简化了函数定义。箭头函数有两种格式，一种只包含一个表达式，省略掉了{ … }和return。还有一种可以包含多条语句，这时候就不能省略{ … }和return

1
() => return 'hello'
(a,b) => a + b

2
(a) => {
  a = a+ 1
  return a
}
==================================

P4242_尚硅谷_退出登陆功能
须引入antd 的 模态框
import { Modal} from 'antd'

P4343_尚硅谷_LinkButton组件
添加 /src/components/link-button 组件




20210212
p45 Home 组件 


P46 Category组件_静态界面
使用 card

https://antdv.com/components/card/



