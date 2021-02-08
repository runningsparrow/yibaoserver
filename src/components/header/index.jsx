import React, {Component} from 'react'
//高阶组件包装 Header
import {withRouter} from 'react-router-dom'

//退出时跳出对话框
import { Modal} from 'antd'
import LinkButton from '../link-button'
//动态显示路径
import menuList from '../../config/menuConfig'
//引入天气请求
import {reqWeather} from '../../api'
import {formateDate} from '../../utils/dateUtils'
//默认暴露，不用大括号
import memoryUtils from '../../utils/memoryUtils'
//退出时须清空本地存储
import storageUtils from '../../utils/storageUtils'
import './index.less'

// export default class Header extends Component {
class Header extends Component {

    state = {
        currentTime: formateDate(Date.now()), // 当前时间字符串
        dayPictureUrl: '', // 天气图片url
        weather: '', // 天气的文本
    }

    //建立一个定时器
    getTime = () => {
        // 每隔1s获取当前时间, 并更新状态数据currentTime
        this.intervalId = setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({currentTime})
        }, 1000)
    }

    //获取天气

    getWeather = async () => {
        // 调用接口请求异步获取数据
        const {dayPictureUrl, weather} = await reqWeather('北京')
        // 更新状态
        this.setState({dayPictureUrl, weather})
      }


    //动态显示路径
    getTitle = () => {
        // 得到当前请求路径
        const path = this.props.location.pathname
        let title
        menuList.forEach(item => {
            if (item.key===path) { // 如果当前item对象的key与path一样,item的title就是需要显示的title
            title = item.title
            } else if (item.children) {
            // 在所有子item中查找匹配的
            const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
            // 如果有值才说明有匹配的
            if(cItem) {
                // 取出它的title
                title = cItem.title
            }
            }
        })

        return title
    }


    /*
    退出登陆
    */
    logout = () => {
        // 显示确认框
        Modal.confirm({
        content: '确定退出吗?',
        onOk: () => {
            console.log('OK', this)
            // 删除保存的user数据
            storageUtils.removeUser()
            memoryUtils.user = {}

            // 跳转到login
            this.props.history.replace('/login')
        }
        })
    }


     /*
    第一次render()之后执行一次
    一般在此执行异步操作: 发ajax请求/启动定时器
    */
    componentDidMount () {
        // 获取当前的时间
        this.getTime()
        // 获取当前天气
        this.getWeather()
    }
    /*
    // 不能这么做: 不会更新显示
    componentWillMount () {
        this.title = this.getTitle()
    }*/

    /*
    当前组件卸载之前调用
    */
    componentWillUnmount () {
        // 清除定时器
        clearInterval(this.intervalId)
    }


    render(){

        //从state 获取数据
        const {currentTime, dayPictureUrl, weather} = this.state

        //从memoryUtils 获取用户名
        const username = memoryUtils.user.username

        // 得到当前需要显示的title
        const title = this.getTitle()
        
        return(
            <div className="header">
                <div className="header-top">
                <span>欢迎, {username}</span>
                    {/* <span>欢迎, admin</span> */}
                    {/* <a href="#!" onClick = {this.logout}>退出</a> */}
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div>
                <div className="header-bottom">
                    {/* <div className="header-bottom-left">首页</div> */}
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                    <span>{currentTime}</span>
                    {/* <img src={dayPictureUrl} alt="weather"/>
                    <span>{weather}</span> */}
                        {/* <span>2021-01-28 22:22:22</span> */}
                        <img src="http://api.map.baidu.com/images/weather/day/qing.png" alt="weather"></img>
                        <span>晴</span>
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(Header)