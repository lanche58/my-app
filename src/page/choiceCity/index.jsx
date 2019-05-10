import React from 'react';
import PageHeader from '../../components/pageHeader';
import CurrentCity from '../../components/currentCity';
import CityList from '../../components/cityList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActions from '../../action/userinfo';
import localStore from '../../util/localStorage';
import * as localStorageKey from '../../config/localStorageKey';

class ChoiceCity extends React.Component {
    render() {
        var citys = ['北京', '上海', '杭州', '广州', '苏州', '深圳', '南京', '天津', '重庆', '厦门', '武汉', '西安'];
        return (
            <div>
                <PageHeader path="/" title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList title="热门城市" changeFn={this.changeCity.bind(this)} citys={citys}/>
            </div>
        )
    }

    changeCity(newCity) {
        if (!newCity) { return; }
        
        // 修改 redux
        this.props.userInfoActions.update({
            cityName: newCity
        })

        // 修改localStorage
        localStore.setItem(localStorageKey.CITYNAME, newCity)
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChoiceCity);