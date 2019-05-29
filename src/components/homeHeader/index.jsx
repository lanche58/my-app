import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link to="/search">
                    <div className="h-search">
                        <span className="search-inp">输入商户名、地名</span>
                        <i className="icon iconfont icon-sousuo"></i>
                    </div>
                </Link>
            </div>
        )
    }
}

export default HomeHeader;