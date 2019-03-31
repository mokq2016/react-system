import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";
import { Breadcrumb } from "antd";
import { Router,Link, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.js";
import './style/index.less'
import LeftMenu from '../components/LeftMenu/LeftMenu'
const { Header, Sider, Content } = Layout;
export default class BasicLayout extends Component {
  state = {
    collapsed: false
  };
  chooseMenu(e) {
    console.log(111)
  }
  render() {
   
    return (
      <Layout>
        <Header theme="light">
          <Navbar />
        </Header>
        <Layout
          style={{ height: "calc(100vh - 64px)" }}
        >
          <Sider className="main-sider"
            theme="light"
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
           <LeftMenu chooseMenu={e => this.chooseMenu(e)}></LeftMenu>
          </Sider>
          <Layout style={{height:'calc(100vh - 64px)',
                overflowY:'auto'}}>
            <Header style={{ height: "48px", backgroundColor: "#fff",paddingLeft:'18px' }}>
              <Breadcrumb style={{lineHeight:'48px',textAlign:'left'}}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Application Center</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                  <a href="">Application List</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>An Application</Breadcrumb.Item>
              </Breadcrumb>
            </Header>
            <Content
              style={{
                margin: "24px 6px 20px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280,
                position:"relative",
                height:'calc(100vh - 110px)',
                overflowY:'auto'
              }}
            >
              <Switch>
                {this.props.routes.map((item, index) => (
                  <Route
                    key={index}
                    path={ item.path}
                    component={item.component}
                  />
                ))}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
  
}
