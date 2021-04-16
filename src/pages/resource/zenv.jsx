import React, {Component} from 'react';
import { Card,Button,Icon,Table } from 'antd';

import LinkButton from '../../components/link-button'


export default class Zenv extends Component {

    //20200416
    state = {
      loading: false, // 是否正在获取数据中
      plexes:[], //环境列表
    }

    /*
    初始化Table列的数组
    */
    initColumns = () => {
      this.columns = [
        {
          title: 'Plex环境',
          dataIndex: 'plexname',
          key: 'plexname',
        },
        {
          title: '应用',
          dataIndex: 'use',
          key: 'use',
        },
        {
          title: '总容量',
          dataIndex: 'total',
          key: 'total',
        },
        {
          title: '已使用',
          dataIndex: 'used',
          key: 'used',
        },
        {
          title: '剩余容量',
          dataIndex: 'free',
          key: 'free',
        },
        {
          title: '操作',
          width: 500,
          dataIndex: '',
          key: 'x',
          render: () => (
            <span>
              <LinkButton>修改Plex</LinkButton>
              <LinkButton>查看Lpar</LinkButton>
            </span>
          ),
        },
      ]
    }

    /*
     异步获取zenv数组 
     */
    getPlexes = async () => {
      
    }

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
              "use": "X1压力测试",
              "total": 374873,
              "used": 362956,
              "free": 11917,
              "_id": "60287fe9896cbf82f499f816",
              "plexname": "T3",
              "__v": 0
            },
            {
                "use": "国内开发一套",
                "total": 34879,
                "used": 33403,
                "free": 1475,
                "_id": "602881e1896cbf82f499f817",
                "plexname": "T1",
                "__v": 0
            },
            {
                "use": "国内开发一套",
                "total": 25026,
                "used": 21217,
                "free": 3809,
                "_id": "60288217896cbf82f499f818",
                "plexname": "T2",
                "__v": 0
            },
            {
              "use": "国内开发一套",
              "total": 62656,
              "used": 61999,
              "free": 657,
              "_id": "60290b7399df41446855ec45",
              "plexname": "D1",
              "__v": 0
            },
            {
                "use": "国内开发一套",
                "total": 11944,
                "used": 11557,
                "free": 388,
                "_id": "60290be299df41446855ec46",
                "plexname": "D2",
                "__v": 0
            },
            {
                "use": "海外BOCS开发一套",
                "total": 54764,
                "used": 51240,
                "free": 3524,
                "_id": "60290c3999df41446855ec47",
                "plexname": "D3",
                "__v": 0
            },
            {
                "use": "海外SIT2",
                "total": 22700,
                "used": 22097,
                "free": 603,
                "_id": "60290c6999df41446855ec48",
                "plexname": "D6",
                "__v": 0
            },
            {
                "use": "海外SIT2",
                "total": 4107,
                "used": 3873,
                "free": 234,
                "_id": "60290cdc99df41446855ec49",
                "plexname": "D4",
                "__v": 0
            },
            {
                "use": "海外SIT1",
                "total": 58871,
                "used": 57934,
                "free": 937,
                "_id": "60290d1099df41446855ec4a",
                "plexname": "D5",
                "__v": 0
            },
            {
                "use": "测试环境T1",
                "total": 22577,
                "used": 22089,
                "free": 487,
                "_id": "60290d4399df41446855ec4b",
                "plexname": "F1",
                "__v": 0
            },
            {
                "use": "测试环境T1",
                "total": 16453,
                "used": 13419,
                "free": 3035,
                "_id": "60290d6599df41446855ec4c",
                "plexname": "F2",
                "__v": 0
            },
            {
                "use": "测试环境T1",
                "total": 26485,
                "used": 24130,
                "free": 2355,
                "_id": "60290da699df41446855ec4d",
                "plexname": "F7",
                "__v": 0
            }
          ];
          
          const columns = [
            {
              title: 'Plex环境',
              dataIndex: 'plexname',
              key: 'plexname',
            },
            {
              title: '应用',
              dataIndex: 'use',
              key: 'use',
            },
            {
              title: '总容量',
              dataIndex: 'total',
              key: 'total',
            },
            {
              title: '已使用',
              dataIndex: 'used',
              key: 'used',
            },
            {
              title: '剩余容量',
              dataIndex: 'free',
              key: 'free',
            },
            {
              title: '操作',
              width: 500,
              dataIndex: '',
              key: 'x',
              render: () => (
                <span>
                  <LinkButton>修改Plex</LinkButton>
                  <LinkButton>查看Lpar</LinkButton>
                </span>
              ),
            },
          ];



        return(
            <div>
                <Card title={title} extra={extra}>
                   <Table 
                   bordered
                   rowKey = '_id'
                   dataSource={dataSource} 
                   columns={columns} />
                </Card>
            </div>
        )

        
    }

}