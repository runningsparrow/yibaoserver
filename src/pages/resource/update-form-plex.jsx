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
        plexname: PropTypes.string.isRequired
    }

    render()
    {
        return(
            <Form ref={this.formRef}
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
                        <Option value='1'>测试环境T1</Option>
                        <Option value='2'>海外SIT1</Option>
                        <Option value='3'>海外SIT2</Option>
                    </Select>
                </Item>

                <Item
                 label="Plex 名称"
                 name="plexname"
                >
                    <Input placeholder="请输入Plex名称"></Input>
                </Item>

                <Item
                 label="总容量"
                 name="plextotal"
                >
                    <Input placeholder="请输入总容量"></Input>
                </Item>

                <Item
                 label="已使用"
                 name="plexused"
                >
                    <Input placeholder="请输入已使用"></Input>
                </Item>

                <Item
                 label="剩余容量"
                 name="plexfree"
                >
                    <Input placeholder="请输入剩余容量"></Input>
                </Item>
                
            </Form>
        )
    }
}

