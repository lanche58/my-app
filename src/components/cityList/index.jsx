import React from 'react';
import { withRouter } from 'react-router-dom';
import './style.css';

class CityList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        var city = ['北京', '上海', '杭州', '广州', '苏州', '深圳', '南京', '天津', '重庆', '厦门', '武汉', '西安'];
        return (
            <div className="cityWrap">
                <h3 className="title">{this.props.title}</h3>
                <ul className="cityList clearfix">
                {
                    this.props.citys.map((item, index) =>
                        <li key={index}><p onClick={this.clickHandle.bind(this)}>{item}</p></li>
                    )
                }
                </ul>
            </div>
        )
    }

    clickHandle(e) {
        const changeCity = this.props.changeFn;
        const newCity = e.target.innerText;
        changeCity(newCity);
        // 路由跳转
        this.props.history.push('/');
    }
}

export default withRouter(CityList);