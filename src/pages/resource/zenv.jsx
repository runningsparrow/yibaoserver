import React, {Component} from 'react';
import { 
  Card,
  Button,
  Icon,
  Table,
  Modal
} from 'antd';

import LinkButton from '../../components/link-button';

//引入请求登录函数 20200107
import {reqPlexes, reqUpdatePlex} from '../../api/index'


//20210719
import {reqEnvs} from '../../api/index'

//引入add-form-plex
import AddFormPlex from './add-form-plex'

import UpdateFormPlex from './update-form-plex'


export default class Zenv extends Component {

    //20200416
    state = {
      loading: false, // 是否正在获取数据中
      plexes:[], //环境列表
      chosedplex:'',
      showStatus: 0, //标识添加/更新的确认框是否显示, 0:都不显示, 1: 显示添加, 2: 显示更新
      envs:[], //列表
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
          render: (plex) => (
            <span>
              <LinkButton onClick={ () => this.showUpdate(plex)}>修改Plex</LinkButton>
              {/* 如何向事件回调函数传递参数: 先定义一个匿名函数，在该函数中调用处理的函数并传入数据 */}
              <LinkButton onClick={() => {this.showLpars(plex)}}>查看Lpar</LinkButton>
            </span>
          ),
        },
      ]
    }



    /*
     异步获取env数组 
     */
     getEnvs = async () => {

       
        
        // 发异步ajax请求, 获取数据
        const result = await reqEnvs()

        console.log(result)

        if(result.status===0) {
          //取出数组
          const envs = result.data

          this.setState({
            envs
          })
        
        }
    }

    /*
     异步获取zenv数组 
     */
    getPlexes = async () => {

        // 在发请求前, 显示loading
        this.setState({loading: true})
        
        // 发异步ajax请求, 获取数据
        const result = await reqPlexes()


        // 在请求完成后, 隐藏loading
        this.setState({loading: false})

        console.log(result)

        if(result.status===0) {
          //取出数组
          const plexes = result.data
          this.setState({
            plexes
          })
        }
    }

    /* 为了使本函数不在渲染时调用，而是在点击时调用，
    必须在 onlick 调用此函数时外面包一个函数，这样就可以在
    回调函数里传参数了 */
    /*显示plex对应的lpar*/
    showLpars = (plex) => {

      console.log(plex)

    }


    /*
    响应点击取消: 隐藏确定框
    */
    handleCancel = () => {
      this.setState({
        showStatus : 0
      })
    }


    /*
    显示添加的确认框
    */
   showAdd = () => {
     this.setState({
       showStatus: 1
     })
   }

   /*
   显示修改的确认框
   */
   showUpdate = (plex) => {


    // console.log(plex)

    //保存plex对象
    this.plex = plex
    
    //更新状态 
    this.setState({
      showStatus: 2
    })
  }


    /*
    添加plex
    */
    addPlex = () => {
      console.log('addPlex')
    }

    /*
    更新plex
    */
    updatePlex = async () => {
      console.log('updatePlex')


      //20210719 进行更新前的表单验证




      // 1 隐藏确定框 

      this.setState({
        showStatus: 0
      })

      //准备数据  this.form ??
      const plexname = this.form.current.getFieldsValue().plexname
      const use = this.form.current.getFieldsValue().plexuse
      const total = this.form.current.getFieldsValue().plextotal
      const used = this.form.current.getFieldsValue().plexused
      const free = this.form.current.getFieldsValue().plexfree

      const plex = {}
      plex.plexname = plexname
      plex.use = use
      plex.total = total
      plex.used = used
      plex.free = free
      

      // 2 发请求更新分类
      console.log(plex)
      const result = await reqUpdatePlex(plex)
      if (result.status === 0){
        // 3 重新显示列表
        this.getPlexes()
      }
    
    }


     /*
    为第一次render()准备数据
    */
    componentWillMount () {
      this.initColumns()
      //获取env列表
      this.getEnvs()
    }

    /*
    执行异步任务: 发异步ajax请求
    */
    componentDidMount () {
      // 获取一级分类列表显示
      this.getPlexes()
      
    }

    render() {

        // 读取状态数据
        const {plexes, loading, showStatus, envs} = this.state

        
        // 读取指定的分类
        const plex = this.plex

        //card 的左侧
        const title = 'Plex'

        //card 的右侧
        const extra = (
            <Button type='primary' onClick={this.showAdd}>
                <Icon type='plus'></Icon>
                添加plex
            </Button>
        )

        // //表格样例数据
        // const dataSource = [
        //     {
        //       "use": "X1压力测试",
        //       "total": 374873,
        //       "used": 362956,
        //       "free": 11917,
        //       "_id": "60287fe9896cbf82f499f816",
        //       "plexname": "T3",
        //       "__v": 0
        //     },
        //     {
        //         "use": "国内开发一套",
        //         "total": 34879,
        //         "used": 33403,
        //         "free": 1475,
        //         "_id": "602881e1896cbf82f499f817",
        //         "plexname": "T1",
        //         "__v": 0
        //     },
        //     {
        //         "use": "国内开发一套",
        //         "total": 25026,
        //         "used": 21217,
        //         "free": 3809,
        //         "_id": "60288217896cbf82f499f818",
        //         "plexname": "T2",
        //         "__v": 0
        //     },
        //     {
        //       "use": "国内开发一套",
        //       "total": 62656,
        //       "used": 61999,
        //       "free": 657,
        //       "_id": "60290b7399df41446855ec45",
        //       "plexname": "D1",
        //       "__v": 0
        //     },
        //     {
        //         "use": "国内开发一套",
        //         "total": 11944,
        //         "used": 11557,
        //         "free": 388,
        //         "_id": "60290be299df41446855ec46",
        //         "plexname": "D2",
        //         "__v": 0
        //     },
        //     {
        //         "use": "海外BOCS开发一套",
        //         "total": 54764,
        //         "used": 51240,
        //         "free": 3524,
        //         "_id": "60290c3999df41446855ec47",
        //         "plexname": "D3",
        //         "__v": 0
        //     },
        //     {
        //         "use": "海外SIT2",
        //         "total": 22700,
        //         "used": 22097,
        //         "free": 603,
        //         "_id": "60290c6999df41446855ec48",
        //         "plexname": "D6",
        //         "__v": 0
        //     },
        //     {
        //         "use": "海外SIT2",
        //         "total": 4107,
        //         "used": 3873,
        //         "free": 234,
        //         "_id": "60290cdc99df41446855ec49",
        //         "plexname": "D4",
        //         "__v": 0
        //     },
        //     {
        //         "use": "海外SIT1",
        //         "total": 58871,
        //         "used": 57934,
        //         "free": 937,
        //         "_id": "60290d1099df41446855ec4a",
        //         "plexname": "D5",
        //         "__v": 0
        //     },
        //     {
        //         "use": "测试环境T1",
        //         "total": 22577,
        //         "used": 22089,
        //         "free": 487,
        //         "_id": "60290d4399df41446855ec4b",
        //         "plexname": "F1",
        //         "__v": 0
        //     },
        //     {
        //         "use": "测试环境T1",
        //         "total": 16453,
        //         "used": 13419,
        //         "free": 3035,
        //         "_id": "60290d6599df41446855ec4c",
        //         "plexname": "F2",
        //         "__v": 0
        //     },
        //     {
        //         "use": "测试环境T1",
        //         "total": 26485,
        //         "used": 24130,
        //         "free": 2355,
        //         "_id": "60290da699df41446855ec4d",
        //         "plexname": "F7",
        //         "__v": 0
        //     }
        //   ];
          
        //   const columns = [
        //     {
        //       title: 'Plex环境',
        //       dataIndex: 'plexname',
        //       key: 'plexname',
        //     },
        //     {
        //       title: '应用',
        //       dataIndex: 'use',
        //       key: 'use',
        //     },
        //     {
        //       title: '总容量',
        //       dataIndex: 'total',
        //       key: 'total',
        //     },
        //     {
        //       title: '已使用',
        //       dataIndex: 'used',
        //       key: 'used',
        //     },
        //     {
        //       title: '剩余容量',
        //       dataIndex: 'free',
        //       key: 'free',
        //     },
        //     {
        //       title: '操作',
        //       width: 500,
        //       dataIndex: '',
        //       key: 'x',
        //       render: () => (
        //         <span>
        //           <LinkButton>修改Plex</LinkButton>
        //           <LinkButton>查看Lpar</LinkButton>
        //         </span>
        //       ),
        //     },
        //   ];



        return(
            <div>
                <Card title={title} extra={extra}>
                   <Table 
                   bordered
                   rowKey = '_id'
                   loading={loading}
                  //  dataSource={dataSource} 
                   dataSource={plexes}
                  //  columns={columns} 
                  columns={this.columns} 
                  pagination={{defaultPageSize: 5, showQuickJumper: true}}
                   />
                   <Modal title="添加 plex" 
                    destroyOnClose = 'true'  //关闭时候销毁以便打开时重新载入数据 如果 modal 包含 form 需要在 form设定  preserve = {false}
                    visible={showStatus===1} 
                    onOk={this.addPlex} 
                    onCancel={this.handleCancel}>
                     
                    <AddFormPlex envs = {envs}/>   {/* //传参给子组件 */}
                  </Modal>

                  <Modal title="修改 plex" 
                    destroyOnClose = 'true'  //关闭时候销毁以便打开时重新载入数据 如果 modal 包含 form 需要在 form设定  preserve = {false}
                    visible={showStatus===2} 
                    onOk={this.updatePlex} 
                    onCancel={this.handleCancel}>
                    {/* <p>修改界面</p> */}
                    <UpdateFormPlex plex = {plex} envs = {envs} setForm={(form)=>{this.form=form}}/>  
                  </Modal>
                </Card>
            </div>
        )

        
    }

}