import React from 'react';
import { Link } from 'react-router-dom';
import { link } from 'fs';

import './style.css';

class PageHeader extends React.Component {
    render() {
        return (
            <div className="header">
                <Link to={this.props.path}>
                    <i className="icon iconfont icon-jiantou-zuo-cuxiantiao"></i>
                </Link>
                <h1 className="title">{this.props.title}</h1>
            </div>
        )
    }

}

export default PageHeader;