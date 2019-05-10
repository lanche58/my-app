import React from 'react';

import './style.css';

class SearchInput extends React.Component {
    render() {
        return (
            <div className="search-input">
                <input type="text" className="inp" placeholder={this.props.placeholder}/>
                <i className="clear icon iconfont icon-guanbi1"></i>
            </div>
        )
    }
}

export default SearchInput;