import React, {Component} from 'react'
import { Card,Button,Icon,Table } from 'antd';

import LinkButton from '../../components/link-button';

import {reqLpars} from '../../api/index'


export default class Channel extends Component {

    state = {
        loading: false, // 是否正在获取数据中
        lpars:[], //环境列表
        chosedlpar:''
    }

    /*
    初始化Table列的数组
    */
    initColumns = () => {
        this.columns = [
          {
            title: 'lpar_id',
            dataIndex: 'lpar_id',
            key: 'lpar_id',
          },
          {
            title: 'lpar_name',
            dataIndex: 'lpar_name',
            key: 'lpar_name',
          },
          {
            title: 'lpar_sysplex',
            dataIndex: 'lpar_sysplex',
            key: 'lpar_sysplex',
          },
          {
            title: 'lpar_sysname',
            dataIndex: 'lpar_sysname',
            key: 'lpar_sysname',
          },
          {
            title: 'lpar_boxname',
            dataIndex: 'lpar_boxname',
            key: 'lpar_boxname',
          },
          {
            title: 'lpar_css',
            dataIndex: 'lpar_css',
            key: 'lpar_css',
          },
          {
            title: 'lpar_type',
            dataIndex: 'lpar_type',
            key: 'lpar_type',
          },
          {
            title: 'lpar_version',
            dataIndex: 'lpar_version',
            key: 'lpar_version',
          },
          {
            title: 'lpar_status',
            dataIndex: 'lpar_status',
            key: 'lpar_status',
          },
          {
            title: 'lpar_lcp_num',
            dataIndex: 'lpar_lcp_num',
            key: 'lpar_lcp_num',
          },
          {
            title: 'lpar_ziip_num',
            dataIndex: 'lpar_ziip_num',
            key: 'lpar_ziip_num',
          },
          {
            title: 'lpar_icf_num',
            dataIndex: 'lpar_icf_num',
            key: 'lpar_icf_num',
          },
          {
            title: 'lpar_lcp_num_shared',
            dataIndex: 'lpar_lcp_num_shared',
            key: 'lpar_lcp_num_shared',
          },
          {
            title: 'lpar_ziip_num_shared',
            dataIndex: 'lpar_ziip_num_shared',
            key: 'lpar_ziip_num_shared',
          },
          {
            title: 'lpar_icf_num_shared',
            dataIndex: 'lpar_icf_num_shared',
            key: 'lpar_icf_num_shared',
          },
          {
            title: 'lpar_lcp_weight',
            dataIndex: 'lpar_lcp_weight',
            key: 'lpar_lcp_weight',
          },
          {
            title: 'lpar_ziip_weight',
            dataIndex: 'lpar_ziip_weight',
            key: 'lpar_ziip_weight',
          },
          {
            title: 'lpar_icf_weight',
            dataIndex: 'lpar_icf_weight',
            key: 'lpar_icf_weight',
          },
          {
            title: 'lpar_central_storage',
            dataIndex: 'lpar_central_storage',
            key: 'lpar_central_storage',
          },
          {
            title: 'lpar_reverse_storage',
            dataIndex: 'lpar_reverse_storage',
            key: 'lpar_reverse_storage',
          },
          {
            title: '操作', 
            width: 500,
            dataIndex: '',
            key: 'x',
            render: (lpar) => (
              <span>
                {/* 如何向事件回调函数传递参数: 先定义一个匿名函数，在该函数中调用处理的函数并传入数据 */}
                <LinkButton onClick={() => {this.reviselpar(lpar)}}>修改Lpar</LinkButton>
                <LinkButton onClick={() => {this.deletelpar(lpar)}}>删除Lpar</LinkButton>
              </span>
            ),
          },
        ]
      }


    /*显示plex对应的lpar*/
    reviselpar = (lpar) => {

      console.log(lpar)

    }  


    deletelpar = (lpar) => {

      console.log(lpar)

    }

    /*
     异步获取zenv数组 
     */
     getLpars = async () => {

        // 在发请求前, 显示loading
        this.setState({loading: true})
        
        // 发异步ajax请求, 获取数据
        const result = await reqLpars()


        // 在请求完成后, 隐藏loading
        this.setState({loading: false})

        console.log(result)

        if(result.status===0) {
          //取出数组
          const lpars = result.data
          this.setState({
            lpars
          })
        }
    }

     /*
    为第一次render()准备数据
    */
    componentWillMount () {
      this.initColumns()
    }


     /*
    执行异步任务: 发异步ajax请求
    */
    componentDidMount () {
      // 获取一级分类列表显示
      this.getLpars()
    }


    render() {

        // 读取状态数据
        const {lpars, loading} = this.state

        //card 的左侧
        const title = 'Lpar'

        //card 的右侧
        const extra = (
            <Button type='primary'>
                <Icon type='plus'></Icon>
                添加lpar
            </Button>
        )

        return(
            <div>
            <Card title={title} extra={extra}>
              <Table 
              bordered
              rowKey = '_id'
              loading={loading}
              //  dataSource={dataSource} 
              dataSource={lpars}
              //  columns={columns} 
              columns={this.columns} 
              pagination={{defaultPageSize: 5, showQuickJumper: true}}
              // 加上这条 横向滚动 支持此属性的浏览器内容就不会换行了
              scroll={{ x: 'max-content' }}
              />
            </Card>
            </div>
        )

        
    }

}