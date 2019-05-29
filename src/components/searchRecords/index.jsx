import React from 'react';
// import { Link } from 'react-router-dom';
import './style.css';

class SearchRecords extends React.Component {
    render() {
        return (
            <div className="searchRecords">
                <p className="title">搜索记录</p>
                <div className="wrap">
                    <ul className="records-list">
                    {
                        this.props.records.map((item, index) => 
                            <li key={index} onClick={this.clickHandle.bind(this)}>{item}</li>
                        )
                    }
                    </ul>
                    <button type="button" onClick={this.props.clearClickHandle} className="clear">清除搜索记录</button>
                </div>
            </div>
        )
    }
    clickHandle(e) {
        const value = e.target.innerText;
        this.props.clickSearchFn(value);
    }
}

export default SearchRecords;