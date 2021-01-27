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
    使用reduce() + 递归调用
    */
    getMenuNodes = (menuList) => {
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
                
                
                {
                    //渲染菜单
                    this.getMenuNodes(menuList)
                }
                </Menu>
                
            </div>   
        )
    }
}