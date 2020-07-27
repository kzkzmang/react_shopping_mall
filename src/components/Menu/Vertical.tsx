import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { stringify } from 'querystring';
interface MenuChildren {
    name: string,
    path: string,
    icon: any,
    children: children[]
}

interface children {
    name: string,
    path: string
}
const menuArr: MenuChildren[] = [
    {
        name: 'Option 1',
        path: '/',
        icon: <PieChartOutlined />,
        children: []
    },
    {
        name: 'Option 2',
        path: '/',
        icon: <UserOutlined />,
        children: []
    },
    {
        name: 'User',
        path: '',
        icon: <TeamOutlined />,
        children: [
            {name: 'Tom', path: '/'},
            {name: 'Bill', path: '/'},
            {name: 'Alex', path: '/'}
        ]
    }
]
const menuTree: {theme:string, mode: string, menu: MenuChildren[]} = {
    theme: 'dark',
    mode: 'inline',
    menu: menuArr
}

function Vertical(props:any) {
    const { SubMenu } = Menu;
    console.log(menuTree)
    return (
        <React.Fragment>
            <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>Test</Menu.Item>
                </Menu>
        </React.Fragment>
    )
}

export default Vertical
