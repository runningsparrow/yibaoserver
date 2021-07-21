import React, {Component} from 'react';

//20210719
import PropTypes from 'prop-types'

import {
    Form,
    Select,
    Input,
    Button
} from 'antd'



const Item = Form.Item
const Option = Select.Option

/*
添加plex的form组件
*/



export default class AddFormPlex extends Component {



    //antd v4 版本与 v3 对于 form的写法有变化
    formRef = React.createRef();


    static propTypes = {
        setFormadd: PropTypes.func.isRequired
        
    }

    componentWillMount () {
        // 将form对象通过setForm()传递父组件
        this.props.setFormadd(this.formRef)
      }
    

    validatePlexname = (_,value) => {
        if(!value)
            {
                return Promise.reject('plexname不能为空！')
            }else if(value.length<2){
                return Promise.reject('plexname长度不能小于2位')
            }else if(value.length>6){
                return Promise.reject('plexname长度不能大于6位')
            }
            // else if(/^[a-zA-Z0-9]+$/.test(value)){
            //     return Promise.reject('密码必须是英文、数字或下划线组成')
            // }
            else{
                return Promise.resolve() //验证通过
            }
    }
   


    render()
    {
        //通过this.props获取传参envs
        const { envs } = this.props;
        console.log({ envs })

        return(
            <Form ref={this.formRef}
            preserve = {false}  //配合 modal 的 destroy使用
            name="addplex"
            className="addpelx-form"
            initialValues={{ "use": '1' }}
            labelCol={{ style: { width: '100%', height: '30px' } }} //label样式
            labelAlign="left" //label样式
            >
                <Item
                 label="选择所属应用" 
                 name="plexuse">
                    <Select>
                        {    
                            //解析数组
                            envs.map((e,index) => <Option key={index} value={e.envname}>{e.envname}</Option>)  
                        }
                    </Select>
                </Item>

                <Item
                 label="Plex 名称"
                 name="plexname"
                 //声明式验证： 直接使用别人定义好的验证规则进行验证
                 rules={[{ required: true, message: '请输入Plex名称!' },
                 {min: 2, message: '用户名至少2位'},
                 {max: 6, message: '用户名不能大于6位'},
                 { validator: this.validatePlexname},
             ]}
                >
                    <Input placeholder="请输入Plex名称"></Input>
                </Item>

                <Item
                 label="总容量"
                 name="plextotal"
                 rules={[{ required: true, message: '请输入总容量!' },
                 { pattern: new RegExp(/^[1-9]\d*$/, "g"),message: '请输入数字!' },
                ]}
                >
                    <Input placeholder="请输入总容量"></Input>
                </Item>

                <Item
                 label="已使用"
                 name="plexused"
                 rules={[{ required: true, message: '请输入已使用容量!' },
                 { pattern: new RegExp(/^[1-9]\d*$/, "g"),message: '请输入数字!' },
                ]}
                >
                    <Input placeholder="请输入已使用"></Input>
                </Item>

                <Item
                 label="剩余容量"
                 name="plexfree"
                 rules={[{ required: true, message: '请输入剩余容量容量!' },
                 { pattern: new RegExp(/^[1-9]\d*$/, "g"),message: '请输入数字!' },
                ]}
                >
                    <Input placeholder="请输入剩余容量"></Input>
                </Item>

                {/* <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                    提交
                    </Button>
                </Form.Item> */}
                
            </Form>
            
        )
    }
}

