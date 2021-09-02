import React, {Component} from 'react'

import { Card,Button
   } from 'antd';

import {LeftCircleFilled} from '@ant-design/icons';


export default class LparAdd extends Component {
    render() {
        const title = (
             <span>
                 {/* <ArrowLeftOutlined></ArrowLeftOutlined> */}
                 <Button icon={<LeftCircleFilled />} 
                 onClick ={() => this.props.history.goBack()}/>
                 <span>添加lpar</span>
             </span>   
        )
        return(
            <Card title={title}></Card>
        )

        
    }

}