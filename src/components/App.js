import React from 'react';
import {Layout} from 'antd';

import {HeaderComponent} from "./Header";
import {MainContainer} from "../containers/Main";

const { Footer} = Layout;

export class App extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <HeaderComponent/>
                <MainContainer/>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
};