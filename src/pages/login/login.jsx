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

    /*
    源代码地址 https://github.com/Tolerating/react-back 后台API使用koa2开发
    */

    /*
    对密码进行自定义验证
    */
   /*
    antd v4.x的写法
   */
    validatePwd = (_, value) => 
        // value ? Promise.resolve() : Promise.reject('密码不能为空！')
        {
            console.log(_)
            if(!value)
            {
                return Promise.reject('密码不能为空！')
            }else if(value.length<4){
                return Promise.reject('密码长度不能小于4位')
            }else if(value.length>12){
                return Promise.reject('密码长度不能大于12位')
            }
            else if(/^[a-zA-Z0-9]+$/.test(value)){
                return Promise.reject('密码必须是英文、数字或下划线组成')
            }
            else{
                return Promise.resolve() //验证通过
            }
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
                            //声明式验证： 直接使用别人定义好的验证规则进行验证
                            rules={[{ required: true, message: 'Please input your Username!' },
                                    {min: 4, message: '用户名至少4位'},
                                    {max: 16, message: '用户名不能大于16位'},
                                    {pattern: /^[a-zA-Z0-9_]+$/,message: '用户名必须是英文、数字或下划线组成'}
                                ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Item>
                        <Form.Item
                            name="password"
                            rules={[
                                    { required: true, message: 'Please input your Password!' },
                                    { validator: this.validatePwd},
                                ]}
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