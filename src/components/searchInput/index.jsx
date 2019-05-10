import React from 'react';

import './style.css';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowClear: false
        }
    }
    render() {
        return (
            <div className="search-input">
                <input type="text" onKeyDown={this.submitValue.bind(this)} onChange={this.changeValue.bind(this)}  className="inp" id="search" placeholder={this.props.placeholder}/>
                {
                    this.state.isShowClear ? <i onClick={this.clearValue.bind(this)} className="clear icon iconfont icon-guanbi1"></i> : null
                }
                
            </div>
        )
    }
    changeValue(e) {
        const value = e.target.value;
        if (value) {
            this.setState({
                isShowClear: true
            })
        } else {
            this.setState({
                isShowClear: false
            })
        }
    }
    clearValue() {
        let _search = document.getElementById('search');
        _search.value = "";
    }
    componentDidMount() {
        let _search = document.getElementById('search');
        _search.focus();
    }
    submitValue(e) {
        // 回车提交数据
        if (e.keyCode === 13) {
            const value = e.target.value;
            this.props.recordsShow(value);
            e.target.value = "";
        }
    }
}

export default SearchInput;