import React, {Component} from 'react'
import { Card,Button,Icon,Table } from 'antd';

import LinkButton from '../../components/link-button';



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
            title: '操作',
            width: 500,
            dataIndex: '',
            key: 'x',
            render: (lpar) => (
              <span>
                <LinkButton>修改Lpar</LinkButton>
                {/* 如何向事件回调函数传递参数: 先定义一个匿名函数，在该函数中调用处理的函数并传入数据 */}
                <LinkButton onClick={() => {this.showLpars(lpar)}}>查看Lpar</LinkButton>
              </span>
            ),
          },
        ]
      }


    render() {
        return(
            <div>lpar逻辑分区</div>
        )

        
    }

}