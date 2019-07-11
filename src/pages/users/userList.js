import React, { Component } from "react";
import DataTable from "../../components/DataTable/DataTable";
import createColumns from "./columns";

import {getUsersByPage} from '../../utils/api'
export default class Category extends Component {
  state = {
    pageData:{
      list:[],
      currentPage:1,
      total:0
    }
  }
  render() {
    const columns = createColumns(this, []);
    getUsersByPage().then((result)=>{
      if(result.success){
        this.setState({
          pageData:{
            list:result.data,
            currentPage:1,
            total:10
          }
        })
      }
    })
    const pageData = {
      list: [
        {
          key: "1",
          name: "胡彦斌",
          desc: "西湖区湖底公园1号"
        },
        {
          key: "2",
          name: "胡彦祖",
          desc: "西湖区湖底公园1号"
        }
      ],
      currentPage: 1,
      total: 12
    };
    const dataTableProps = {
      columns,
     
      selectedRowKeys: [],
      selectType: "checkbox"
    };
    return (
      <div>
        <DataTable dataList={this.state.pageData} {...dataTableProps} />
      </div>
    );
  }
}
