import React, {Component} from 'react';

import PropTypes from 'prop-types'

import {
    Form,
    Input
} from 'antd'

const Item = Form.Item

export default class ShowLparForm extends Component {

    //antd v4 版本与 v3 对于 form的写法有变化
    formRef_showlpar = React.createRef();


    static propTypes = {
        setlparForm: PropTypes.func.isRequired
        
    }


    componentWillMount () {
        // 将form对象通过setForm()传递父组件
        this.props.setlparForm(this.formRef_showlpar)
      }
    



    render()
    {

        //通过this.props获取传参
        const { plex } = this.props;

        const { plexlpars } = this.props;

        console.log(plexlpars)

        
        



        return(
            <Form ref={this.formRef_showlpar} 
            preserve = {false}  //配合 modal 的 destroy使用
            name="showlpar"
            className="showlpar-form"
            initialValues={{ "use": '1' }}
            labelCol={{ style: { width: '100%', height: '30px' } }} //label样式
            labelAlign="left" //label样式
            >

                <Item
                 label="Plex 名称"
                 name="plexname"
                 //设定初始值
                 initialValue={plex.plexname}
                >
                    <Input placeholder="请输入Plex名称"></Input>
                </Item>
                
            </Form>
        )
    }
}