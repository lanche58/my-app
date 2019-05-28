import React from 'react';
import HomeHeader from '../../components/homeHeader';
import { connect } from 'react-redux';
import HomeCarousel from './subpage/carousel';
import HomeDiscount from './subpage/discount';
import YouLike from './subpage/youLike';

class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <HomeCarousel/>
                <HomeDiscount cityName={this.props.userinfo.cityName}/>
                <YouLike cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);