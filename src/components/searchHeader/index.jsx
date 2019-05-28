import React from 'react';
import SearchInput from '../searchInput';
import './style.css';

class SearchHeader extends React.Component {
    render() {
        return (
            <div className="searchHeader clearfix">
                <span className="btn-cancel" onClick={this.cancelHandle.bind(this)}>取消</span>
                <SearchInput recordsShow={this.props.changeFn} placeholder="请输入关键字"/>
            </div>
        )
    }

    cancelHandle() {
        window.history.back();
    }
}

export default SearchHeader;