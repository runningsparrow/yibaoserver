import React, {Component} from 'react';
//20210707
import PropTypes from 'prop-types'

import {
    Form,
    Select,
    Input
} from 'antd'



const Item = Form.Item
const Option = Select.Option

/*
添加plex的form组件
*/

export default class UpdateFormPlex extends Component {

    //antd v4 版本与 v3 对于 form的写法有变化
    formRef = React.createRef();


    static propTypes = {
        // plexname: PropTypes.string.isRequired,
        // use: PropTypes.string.isRequired,
        // total: PropTypes.number.isRequired,
        // used: PropTypes.number.isRequired,
        // free: PropTypes.number.isRequired
        setForm: PropTypes.func.isRequired
        
    }


    componentWillMount () {
        // 将form对象通过setForm()传递父组件
        this.props.setForm(this.formRef)
      }
    



    render()
    {

        //通过this.props获取传参
        const { plex } = this.props;

        const { envs } = this.props;
        



        return(
            <Form ref={this.formRef} 
            preserve = {false}  //配合 modal 的 destroy使用
            name="updateplex"
            className="updateplex-form"
            initialValues={{ "use": '1' }}
            labelCol={{ style: { width: '100%', height: '30px' } }} //label样式
            labelAlign="left" //label样式
            >
                <Item
                
                 label="选择所属应用" 
                 name="plexuse"
                
                 //设定初始值
                 initialValue={plex.use}
                 >
                    <Select>
                        {    
                            //解析数组
                            envs.map((e,index) => <Option key={index} value={e._id}>{e.envname}</Option>)  
                        }
                    </Select>

                </Item>

                <Item
                 label="Plex 名称"
                 name="plexname"
                 //设定初始值
                 initialValue={plex.plexname}
                >
                    <Input placeholder="请输入Plex名称"></Input>
                </Item>

                <Item
                 label="总容量"
                 name="plextotal"
                 //设定初始值
                 initialValue={plex.total}
                >
                    <Input placeholder="请输入总容量"></Input>
                </Item>

                <Item
                 label="已使用"
                 name="plexused"
                 //设定初始值
                 initialValue={plex.used}
                >
                    <Input placeholder="请输入已使用"></Input>
                </Item>

                <Item
                 label="剩余容量"
                 name="plexfree"
                 //设定初始值
                 initialValue={plex.free}
                >
                    <Input placeholder="请输入剩余容量"></Input>
                </Item>
                
            </Form>
        )
    }
}

