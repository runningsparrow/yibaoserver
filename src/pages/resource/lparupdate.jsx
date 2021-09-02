import React, {Component} from 'react'

import { Card,Button
} from 'antd';

import {LeftCircleFilled} from '@ant-design/icons';

export default class LparUpdate extends Component {
    render() {
        const title = (
            <span>
                {/* <ArrowLeftOutlined></ArrowLeftOutlined> */}
                <Button icon={<LeftCircleFilled />} 
                onClick ={() => this.props.history.goBack()}/>
                <span>修改lpar</span>
            </span>   
       )

        return(
            <Card title={title}></Card>
        )

        
    }

}