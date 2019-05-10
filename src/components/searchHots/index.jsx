import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class SearchHots extends React.Component {
    render() {
        return (
            <div className="searchHots">
                <ul className="hot-list clearfix">
                {
                    this.props.hots.map((item, index) => 
                        <li key={index}><Link to="/">{item}</Link></li>
                    )
                }
                </ul>
            </div>
        )
    }
}

export default SearchHots;