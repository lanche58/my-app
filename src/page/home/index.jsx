import React from 'react';
import HomeHeader from '../../components/homeHeader';
import { connect } from 'react-redux';
import HomeCarousel from './subpage/carousel/index';

class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <HomeCarousel/>
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