import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../searchInput';

import './style.css';

class SearchHeader extends React.Component {
    render() {
        return (
            <div className="searchHeader clearfix">
                <Link to="/"><span className="btn-cancel">取消</span></Link>
                <SearchInput placeholder="请输入关键字"/>
            </div>
        )
    }
}

export default SearchHeader;