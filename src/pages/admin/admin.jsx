import React, {Component} from 'react'
//新增子路由后，引入 Route Switch
import {Redirect, Route, Switch} from 'react-router-dom'

//引入 Layout
import { Layout } from 'antd';

import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
//新增二级子路由
import Home from '../home/home'
import User from '../user/user'
import Role from '../role/role'
import Channel from '../resource/channel'
import Controlunit from '../resource/controlunit'
import Diskcab from '../resource/diskcab'  
import Zenv from '../resource/zenv'  
import Diskaddr from '../storage/diskaddr'
import Disktype from '../storage/disktype'
import Disklog from '../resourcelog/disklog'
import Iodflog from '../resourcelog/iodflog'

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
                        <Content style={{backgroundColor: "#fff"}}>
                            <Switch>
                                <Route path='/home' component={Home}></Route>
                                <Route path='/role' component={Role}></Route>
                                <Route path='/user' component={User}></Route>
                                <Route path='/resource/zenv' component={Zenv}></Route>
                                <Route path='/resource/diskcab' component={Diskcab}></Route>
                                <Route path='/resource/controlunit' component={Controlunit}></Route>
                                <Route path='/resource/channel' component={Channel}></Route>
                                <Route path='/storage/diskaddr' component={Diskaddr}></Route>
                                <Route path='/storage/disktype' component={Disktype}></Route>
                                <Route path='/resourcelog/disklog' component={Disklog}></Route>
                                <Route path='/resourcelog/iodflog' component={Iodflog}></Route>
                                <Redirect to = '/home'/>
                            </Switch>
                        </Content>
                        <Footer style={{textAlign: 'center', color: '#cccccc'}}>测试项目</Footer>
                    </Layout>
            </Layout>
        )
    }
}