import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import { Menu, Button, Icon } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  TeamOutlined,
  UserOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';



import logo from '../../assets/images/logo.png'
//引入 left-nav
import menuList from '../../config/menuConfig'
import './index.less'

//左侧菜单引入子菜单
const { SubMenu } = Menu;

/*
左侧导航的组件
 */
// 将上面一句改成下面一句，以便生效 export default withRouter(LeftNav)
// export default class LeftNav extends Component {
class LeftNav extends Component {
    state = {
        collapsed: false,
      };

    /*
    根据menu的数据数组生成对应的标签数组
    使用map() + 递归调用
    */
    getMenuNodes_map = (menuList) => {
        return menuList.map(item => {
            /*
                {
                title: '首页', // 菜单标题名称
                key: '/home', // 对应的path
                icon: 'home', // 图标名称
                children: [], // 可能有, 也可能没有
                }

                <Menu.Item key="/home">
                <Link to='/home'>
                    <Icon type="pie-chart"/>
                    <span>首页</span>
                </Link>
                </Menu.Item>

                <SubMenu
                key="sub1"
                title={
                    <span>
                    <Icon type="mail"/>
                    <span>商品</span>
                    </span>
                }
                >
                <Menu.Item/>
                <Menu.Item/>
                </SubMenu>
            */
            if(!item.children) {
                return (
                <Menu.Item key={item.key}>
                    <Link to={item.key}>
                {/* <Icon type={<WhatsAppOutlined />}/> */}
                    {/* <WhatsAppOutlined /> */}
                    {item.icon}
                    <span>{item.title}</span>
                    </Link>
                </Menu.Item>
                )
            } else {
                return (
                <SubMenu
                    key={item.key}
                    title={
                    <span>
                    {/* <Icon type={item.icon}/> */}
                    {item.icon}
                    <span>{item.title}</span>
                    </span>
                    }
                >
                    {this.getMenuNodes(item.children)}
                </SubMenu>
                )
            }
        })


    
    }


    /*
    根据menu的数据数组生成对应的标签数组
    使用reduce() + 递归调用
    */
    getMenuNodes = (menuList) => {
        // 得到当前请求的路由路径
        const path = this.props.location.pathname

        return menuList.reduce((pre,item) => {
            //向pre添加<Menu.Item>
            if(!item.children){
                pre.push(
                    (
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                    {/* <Icon type={<WhatsAppOutlined />}/> */}
                        {/* <WhatsAppOutlined /> */}
                        {item.icon}
                        <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                    )
                )
            }
            else{

            // 查找一个与当前请求路径匹配的子Item
            const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
            // 如果存在, 说明当前item的子列表需要打开
            if (cItem) {
                this.openKey = item.key
            }



            //向pre 添加<SubMenu>
            pre.push(
                (
                <SubMenu
                    key={item.key}
                    title={
                    <span>
                    {/* <Icon type={item.icon}/> */}
                    {item.icon}
                    <span>{item.title}</span>
                    </span>
                    }
                >
                    {this.getMenuNodes(item.children)}
                </SubMenu>
                )
            )

            }
            
            return pre
        },[])  //第一次返回空数组
    }


    /*
    在第一次render()之前执行一次
    为第一个render()准备数据(必须同步的)
    */
    componentWillMount () {
        this.menuNodes = this.getMenuNodes(menuList)
    }

    render(){

        // 得到当前请求的路由路径
        const path = this.props.location.pathname


        // 得到需要打开菜单项的key
        const openKey = this.openKey

        return(
            <div className="left-nav">
                
                {/* //左侧图标 */}
                <Link to="/" className="left-nav-header">
                    <img src={logo} alt="logo"></img>
                    <h1>测试项目</h1>
                </Link>
                
                {/* //左侧菜单 */}
                <Menu
                defaultSelectedKeys={[path]}
                defaultOpenKeys={[openKey]}
                mode="inline"
                theme="dark"
                // inlineCollapsed={this.state.collapsed}
                >
                
                {/* <Menu.Item key="/home" icon={<PieChartOutlined />}>
                    <Link to='/home'>
                    首页
                    </Link>    
                </Menu.Item>
                <SubMenu key="sub1" icon={<DesktopOutlined />} title="资源管理">
                    <Menu.Item key="/resource/zen">
                        <Link to='/resource/zenv'>
                        环境
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/resource/diskcab">
                        <Link to='/resource/diskcab'>
                        柜机
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/resource/controlunit">
                        <Link to='/resource/controlunit'>
                        Control Unit
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/resource/channel">
                        <Link to='/resource/channel'>
                        通道
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="存储管理">
                    <Menu.Item key="/storage/disktype">
                        <Link to='/storage/disktype'>
                        类型
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/storage/diskaddr">
                        <Link to='/storage/diskaddr'>
                        地址
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<ContainerOutlined />} title="资源调整记录">
                    <Menu.Item key="8">
                        <Link to="/resourcelog/disklog">
                        磁盘
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="9">
                        <Link to="/resourcelog/iodflog">
                        iodf
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item key="/user" icon={<UserOutlined />}>
                    <Link to='/user'>
                    用户管理
                    </Link>
                </Menu.Item>
                <Menu.Item key="/role" icon={<TeamOutlined />}>
                    <Link to='/role'>
                    角色管理
                    </Link>
                </Menu.Item> */}
                
                {
                    //渲染菜单
                    //取数移到 componentWillMount()中去执行
                    // this.getMenuNodes(menuList)
                    //然后取在componentWillMount 赋值的 this.menuNodes
                    this.menuNodes

                }
                </Menu>
                
            </div>   
        )
    }
}


/*
withRouter高阶组件:
包装非路由组件, 返回一个新的组件
新的组件向非路由组件传递3个属性: history/location/match
 */
export default withRouter(LeftNav)