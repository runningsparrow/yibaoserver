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
使用 Card

https://antdv.com/components/card/

使用 Table
使用边框 bordered
指定 rowKey
指定列宽

P4747_尚硅谷_Category组件_接口请求函数

=====================================

20210419
P4848_尚硅谷_Category组件_异步显示

在 api/index.js 增加请求ajax 获取 plex 的函数
在 zenv 修改数据来源为 ajax 请求


====================================

p50

20210607

setState()

setState() 的第二个参数为可选的回调函数，它将在 setState 完成合并并重新渲染组件后执行。通常，我们建议使用 componentDidUpdate() 来代替此方式。

==========================================

p51

20210618 

实现模态框的显示和隐藏

需要引入 modal
===========================================

p52

20210623

模态框界面完成

单独创建一个 form组件

form组件可以集中存放在一个目录下
也可以放在各自单独使用的路由组件下面

本次在from组件建立路由组件的目录 /resource/下供路由组件 zenv.jsx使用




=========================

20210706

P52
52_尚硅谷_Category组件_添加和更新的静态界面


启用高阶组件以使用form对象 



=====================================

20210707

53_尚硅谷_Category组件_更新分类

使用 prop-types 进行数据类型检查

组件间通信



=============================


20210719

P57
57_尚硅谷_Category组件_表单验证



===========================

20210723

P58
58_尚硅谷_搭建商品的整体路由

此处lpar的处理用子路由实现代替模态框

===========================

20210826

P59

59_尚硅谷_productHome组件_静

实现table 以及搜索栏位 等页面内容



P60
60_尚硅谷_ProductHome组件_2种类型的分页技术

    1). 前台分页
        请求获取数据: 一次获取所有数据, 翻页时不需要再发请求
        请求接口: 
            不需要指定请求参数: 页码(pageNum)和每页数量(pageSize)
            响应数据: 所有数据的数组
    
    2). 基于后台的分页
        请求获取数据: 每次只获取当前页的数据, 翻页时要发请求
        请求接口: 
            需要指定请求参数: 页码(pageNum)和每页数量(pageSize)
            响应数据: 当前页数据的数组 + 总记录数(total)
    
    3). 如何选择?
        基本根据数据多少来选择

P61
61_尚硅谷_ProductHome组件_异步分页列表


P62
62_尚硅谷_ProductHome组件_搜索分页

1，认知受控组件与非受控组件
2，变量 searchType 作为属性名，需要在外面加中括号


==========================

20210901

P63
63_尚硅谷_ProductDetial组件_静态界面

使用 List.Item



P64
64_尚硅谷_ProductDetial组件_动态显示商品信息

传递信息使用 
this.props.location.state

================================