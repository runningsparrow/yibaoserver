import React, {Component} from 'react'

import {Redirect} from 'react-router-dom'

//引入 Layout
import { Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

//获取Layout 组件
const { Footer, Sider, Content } = Layout;
/*
后台管理的路由组件
*/

export default class Admin extends Component {
    render(){

        const user = memoryUtils.user

        // 如果内存没有存储user ==> 当前没有登陆
        if(!user || !user._id) {
            // 自动跳转到登陆(在render()中)
            return <Redirect to='/login'/>
        }

        return(
            // <div>
            //     Hello {user.username}
            // </div>
            <Layout style = {{height: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content style={{backgroundColor: "#fff"}}>Content</Content>
                        <Footer style={{textAlign: 'center', color: '#cccccc'}}>测试项目</Footer>
                    </Layout>
            </Layout>
        )
    }
}