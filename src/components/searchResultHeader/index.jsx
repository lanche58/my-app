import React from 'react';
import PageNav from '../pageNav';
import './style.css';
import SearchInput from '../searchInput';
import { Link } from 'react-router-dom';

class RearchResultHeader extends React.Component {
    render() {
        return (
            <div className="search-result-header">
                <div className="t">
                    <i className="icon-jiantou-zuo-cuxiantiao icon iconfont" onClick={this.cancelHandle.bind(this)}></i>
                    <PageNav/>
                    <Link to="/search">
                        <i className="icon-sousuo icon iconfont"></i>
                    </Link>
                </div>
                <Link to="/search">
                    <div className="h-search">
                        <SearchInput value={this.props.keyword} disabled={true}/>
                        <i className="icon iconfont icon-sousuo"></i>
                    </div>
                </Link>
            </div>
        )
    }
    cancelHandle() {
        window.history.back();
    }
}

export default RearchResultHeader;