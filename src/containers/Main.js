import React from "react";
import {connect} from "react-redux";
import {Layout} from 'antd';

import {getPeople} from "../actions/people";
import {MainPageContainer} from "./MainPag";

const {Content} = Layout;

class Main extends React.Component{

    componentDidMount() {
        this.props.getPeople();
    }

    render(){
        return(
            <Content style={{
                padding: '0 50px',
            }}>
                <MainPageContainer/>
            </Content>
        )
    }
};

const mapDispatchToProps = {
  getPeople
};

export const MainContainer = connect(null, mapDispatchToProps)(Main);