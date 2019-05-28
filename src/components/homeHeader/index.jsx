import React from 'react';
import { Link } from 'react-router-dom';
import SearchInput from '../searchInput';

import './style.css';

class HomeHeader extends React.Component {
    render() {
        return (
            <div className="home-header clearfix">
                <Link to="/choiceCity">
                    <div className="h-city">
                        <span className="name">{this.props.cityName}</span><i className="icon iconfont icon-jiantou"></i>
                    </div>
                </Link>
                <Link to="/signIn">
                    <div className="h-user"><i className="icon iconfont icon-wulumuqishigongandashujuguanlipingtai-ico-"></i></div>
                </Link>
 
                <div className="h-search">
                    {/* <input type="text" className="search-inp" placeholder="请输入关键字" /> */}
                    <SearchInput/>

                    <i className="icon iconfont icon-sousuo"></i>
                </div>
            </div>
        )
    }
}

export default HomeHeader;