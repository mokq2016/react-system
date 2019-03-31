import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import BasicLayout from './layouts/BasicLayout'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BasicLayout routes={this.props.routes}></BasicLayout>
      </div>
    );
  }
}

export default App;
