import React from 'react';

import './style.css';

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        }
        this.inputRef = React.createRef();
    }
    render() {
        const value = this.state.value;
        return (
            <div className="search-input">
                {/* {console.log(this.props.value)} */}
                <input 
                    type="text" 
                    onKeyUp={this.keyUpHandle.bind(this)} 
                    onChange={this.changeHandle.bind(this)}  
                    className="inp" 
                    ref={this.inputRef}
                    placeholder="请输入关键字"
                    value={value} 
                    disabled={this.props.disabled}
                    />
                {
                    value&&!this.props.disabled ? <i onClick={this.clearHandle.bind(this)} className="clear icon iconfont icon-guanbi1"></i> : ""
                }
                
            </div>
        )
    }
    changeHandle(e) {
        this.setState({
            value: e.target.value
        })
    }
    clearHandle() {
        this.setState({
            value: ""
        })
    }
    componentDidMount() {
        this.setState({
            value: this.props.value || ""
        });
        
        if (this.props.focus) {
            this.inputRef.current.focus()
        }
    }
    componentWillReceiveProps(nextProps) {
        // this.props => 旧的props
        // nextProps:当前props
        this.setState({
            value: nextProps.value || ""
        })
    }
    keyUpHandle(e) {
        // 回车提交数据
        if (e.keyCode !== 13) { return; }
        this.props.enterHandle(this.state.value);
    }
}

export default SearchInput;