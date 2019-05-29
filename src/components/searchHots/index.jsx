import React from 'react';
import './style.css';

class SearchHots extends React.Component {
    render() {
        return (
            <div className="searchHots">
                <ul className="hot-list clearfix">
                {
                    this.props.hots.map((item, index) => 
                        <li onClick={this.clickHandle.bind(this)} key={index}>{item}</li>
                    )
                }
                </ul>
            </div>
        )
    }
    clickHandle(e) {
        const value = e.target.innerText;
        this.props.clickSearchFn(value);
        this.props.changeFn(value);
    }
}

export default SearchHots;