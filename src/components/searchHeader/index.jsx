import React from 'react';
import SearchInput from '../searchInput';
import './style.css';
import { withRouter } from 'react-router-dom';

class SearchHeader extends React.Component {
    render() {
        return (
            <div className="searchHeader clearfix">
                <span className="btn-cancel" onClick={this.cancelHandle.bind(this)}>取消</span>
                <SearchInput focus={true} value={this.props.value} enterHandle={this.enterHandle.bind(this)}/>
            </div>
        )
    }

    enterHandle(value) {
        // 添加搜索记录
        this.props.changeFn(value);
        this.props.history.push('/searchResult/all/' + encodeURIComponent(value));
    }

    cancelHandle() {
        window.history.back();
    }
}

export default withRouter(SearchHeader);