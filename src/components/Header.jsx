import React from 'react';
import {Layout, Menu} from 'antd';

const {Header} = Layout;

export const HeaderComponent = () => (
    <Header>
        <div className="logo"/>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{lineHeight: '64px'}}
        >

        </Menu>
    </Header>
);