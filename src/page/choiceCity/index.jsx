import React from 'react';
import PageHeader from '../../components/pageHeader';
import CurrentCity from '../../components/currentCity';
import CityList from '../../components/cityList';

function ChoiceCity() {
    var citys = ['北京', '上海', '杭州', '广州', '苏州', '深圳', '南京', '天津', '重庆', '厦门', '武汉', '西安'];
    return (
        <div>
            <PageHeader path="/" title="选择城市"/>
            <CurrentCity cityName="北京"/>
            <CityList title="热门城市" citys={citys}/>
        </div>
    )
}



export default ChoiceCity;