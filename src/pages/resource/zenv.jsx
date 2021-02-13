import React, {Component} from 'react';
import { Card,Button,Icon,Table } from 'antd';


export default class Zenv extends Component {
    render() {


        //card 的左侧
        const title = 'Plex'

        //card 的右侧
        const extra = (
            <Button type='primary'>
                <Icon type='plus'></Icon>
                添加
            </Button>
        )

        //表格样例数据
        const dataSource = [
            {
              key: '1',
              name: 'Joe',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: 'Mike',
              age: 42,
              address: '西湖区湖底公园1号',
            },
          ];
          
          const columns = [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '住址',
              dataIndex: 'address',
              key: 'address',
            },
          ];



        return(
            <div>
                <Card title={title} extra={extra}>
                   <Table dataSource={dataSource} columns={columns} />
                </Card>
            </div>
        )

        
    }

}