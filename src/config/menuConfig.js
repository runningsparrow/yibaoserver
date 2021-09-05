import React, {Component} from 'react'

import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  TeamOutlined,
  UserOutlined,
  WhatsAppOutlined,
} from '@ant-design/icons';

const menuList = [
  {
    title: '首页', // 菜单标题名称
    key: '/home', // 对应的path
    icon: <DesktopOutlined />, // 图标名称
    isPublic: true, // 公开的
  },
  {
    title: '资源管理',
    key: '/resource',
    icon: <AppstoreOutlined /> ,
    children: [ // 子菜单列表
      {
        title: '环境',
        key: '/resource/zenv',
        icon: <DesktopOutlined />,
      },
      {
        title: '柜机',
        key: '/resource/diskcab',
        icon: <ContainerOutlined />,
      },
      {
        title: 'Control Unit',
        key: '/resource/controlunit',
        icon: <ContainerOutlined />,
      },
      {
        title: '通道',
        key: '/resource/channel',
        icon: <ContainerOutlined />
      },
      {
        title: '逻辑分区',
        key: '/resource/lparrouter',
        icon: <ContainerOutlined />
      },
    ]
  },

  {
    title: '用户管理',
    key: '/user',
    icon: <UserOutlined />,
  },
  {
    title: '角色管理',
    key: '/role',
    icon: <TeamOutlined />,
  },

  {
    title: '存储管理',
    key: '/storage',
    icon: <ContainerOutlined />,
    children: [
      {
        title: '类型',
        key: '/storage/disktyperouter',
        icon: <ContainerOutlined />,
      },
      {
        title: '地址',
        key: '/storage/diskaddr',
        icon: <ContainerOutlined />,
      },
    ]
  },
  {
    title: '资源调整记录',
    key: '/resourcelog',
    icon: <ContainerOutlined />,
    children: [
      {
        title: '磁盘',
        key: '/resourcelog/disklog',
        icon: <ContainerOutlined />,
      },
      {
        title: 'iodf日志',
        key: '/resourcelog/iodflog',
        icon: <ContainerOutlined />,
      },
    ]
  },
  {
    title: '操作处理',
    key: '/operation',
    icon: <ContainerOutlined />,
    children: [
      {
        title: 'iodf生效',
        key: '/operation/opiodf',
        icon: <ContainerOutlined />,
      },
      {
        title: '权重',
        key: '/operation/weight',
        icon: <ContainerOutlined />,
      },
    ]

  },
]

export default menuList