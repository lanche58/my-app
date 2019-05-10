import React from "react";
import { SearchControl } from "../../page/search/index";

import "./style.css";

export class SearchRecordsControl {
  changeData;
}

class SearchRecords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };
    console.log(this.props);
    this.props.con.changeData = this.changeData;
  }
  render() {
    return (
      <div className="searchRecords">
        <p className="title">搜索记录</p>
        <div className="wrap">
          <ul className="records-list">
            {this.state.dataList.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
            {/* {this.state.dataList} */}
          </ul>
          <button type="button" className="clear">
            清除搜索记录
          </button>
        </div>
      </div>
    );
  }
  changeData = dataList => {
    let foo = this.state.dataList;
    foo.push(dataList);
    this.setState({
      dataList: foo
    });
  };
}

export default SearchRecords;
