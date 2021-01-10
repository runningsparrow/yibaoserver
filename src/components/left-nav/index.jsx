import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';



import logo from '../../assets/images/logo.png'
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

    render(){
        return(
            <div className="left-nav">
                
                //左侧图标
                <Link to="/" className="left-nav-header">
                    <img src={logo} alt="logo"></img>
                    <h1>测试项目</h1>
                </Link>
                
                //左侧菜单
                <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={this.state.collapsed}
                >
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    首页
                </Menu.Item>
                <SubMenu key="sub1" icon={<MailOutlined />} title="资源管理">
                    <Menu.Item key="2">环境</Menu.Item>
                    <Menu.Item key="3">柜机</Menu.Item>
                    <Menu.Item key="4">Control Unit</Menu.Item>
                    <Menu.Item key="5">通道</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="存储管理">
                    <Menu.Item key="6">类型</Menu.Item>
                    <Menu.Item key="7">地址</Menu.Item>
                </SubMenu>
                <SubMenu key="sub3" icon={<ContainerOutlined />} title="资源调整记录">
                    <Menu.Item key="8">磁盘</Menu.Item>
                    <Menu.Item key="9">环境</Menu.Item>
                </SubMenu>
                <Menu.Item key="10" icon={<DesktopOutlined />}>
                    用户管理
                </Menu.Item>
                </Menu>
                
            </div>   
        )
    }
}