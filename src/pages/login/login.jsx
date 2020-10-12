import React, {Component} from 'react'
import { 
    Form, 
    Input, 
    Button} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './login.less'
import logo from './images/logo.png'

const Item = Form.Item

/*
登录的路由组件
*/

export default class Login extends Component {

    handleSubmit = (values) => {
        console.log('Received values of form: ', values);
        

    }
    //antd v4 版本与 v3 对于 form的写法有变化
    formRef = React.createRef();

    componentDidMount() {
        this.formRef.current.setFieldsValue({
          username: 'xtgl1',
        });

        

      }

    

    render(){

       

        return(
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"></img>
                    <h1>易报综合管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>

                    <Form ref={this.formRef}
                    name="normal_login"
                    onFinish ={this.handleSubmit}
                    className="login-form"
                    >
                        <Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                            </Button>
                        </Form.Item>
                    </Form>

                </section>
                    
            </div>
        )
    }
}



/*
1 前台表单验证
2 收集表单输入数据
*/


/*



1 高阶函数
    1) 一类特别的函数
        a 接受函数类型的函数
        b 返回值是函数
    2) 常见
        a 定时器 setTimeout()/setInterval()
        b Promise: Promise(() => {}) then(value => {}, reason => {})
        c 数组遍历相关的方法: forEach()/filter()/map()/reduce()/find()/findIndex()
        d 函数对象的 build()
        e Form.create()() =====> v3的特性
    3) 高阶函数更加动态，更加具有扩展性

2 高阶组件(适用于v3)
    1) 本质是一个函数
    2) 接收一个组件(被包装组件) 返回一个新的组件(包装组件),包装组件会向被包装组件传入就特定属性
    3) 作用：扩展组件的功能
    4) 高阶组件也是高阶函数：接收一个组件函数，返回是一个新的组件函数

*/