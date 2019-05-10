import React from 'react';

import './style.css';

class SearchRecords extends React.Component {
    // constructor
    render() {
        return (
            <div className="searchRecords">
                <p className="title">搜索记录</p>
                <div className="wrap">
                    <ul className="records-list">
                        {/* <li>春熙路</li> */}
                        {/* <li>春熙路</li> */}
                    </ul>
                    <button type="button" className="clear">清除搜索记录</button>
                </div>
            </div>
        )
    }

    
}

export default SearchRecords;