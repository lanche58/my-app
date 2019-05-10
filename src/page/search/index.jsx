import React from "react";
import SearchHeader from "../../components/searchHeader";
import SearchHots from "../../components/searchHots";
import SearchRecords from "../../components/searchRecords";
import { SearchRecordsControl } from "../../components/searchRecords";

export class SearchControl {
  searchRecord;

  constructor() {
    this.searchRecord = new SearchRecordsControl();
  }
}
class Search extends React.Component {
  con = new SearchControl();
  constructor(props) {
    super(props);
    this.state = {
      isShowRecord: false
    };
  }
  render() {
    let hots = [
      "烤肉",
      "串串",
      "火锅",
      "小龙坎",
      "春熙路",
      "银泰",
      "太古里",
      "环球中心",
      "一点点"
    ];
    return (
      <div>
        <SearchHeader changeFn={this.recordsShow.bind(this)} con={this.con} />
        <SearchHots hots={hots} />
        <SearchRecords con={this.con} />
        {/* {this.state.isShowRecord ? <SearchRecords /> : null} */}
      </div>
    );
  }
  recordsShow(value) {
    if (value && this.state.isShowRecord === false) {
      this.setState({
        isShowRecord: true
      });
    }
    if (value) {
      let _records = document.getElementsByClassName(".records-list");
      console.log(_records);
      // _records.append('<li>' + value +'</li>');
    }
  }
}

export default Search;
