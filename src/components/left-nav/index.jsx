import React, {Component} from 'react'
import {Link} from 'react-router-dom'

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

export default class LeftNav extends Component {
    state = {
        collapsed: false,
      };

    /*
    根据menu的数据数组生成对应的标签数组
    使用map() + 递归调用
    */
    getMenuNodes = (menuList) => {
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
                console.log(item.icon)
                return (
                <Menu.Item key={item.key}>
                    <Link to={item.key}>
                <Icon type={<WhatsAppOutlined />}/>
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
                    <Icon type={item.icon}/>
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

    render(){
        return(
            <div className="left-nav">
                
                {/* //左侧图标 */}
                <Link to="/" className="left-nav-header">
                    <img src={logo} alt="logo"></img>
                    <h1>测试项目</h1>
                </Link>
                
                {/* //左侧菜单 */}
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
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
                    this.getMenuNodes(menuList)
                }
                </Menu>
                
            </div>   
        )
    }
}