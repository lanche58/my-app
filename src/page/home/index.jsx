import React from 'react';
import HomeHeader from '../../components/homeHeader';
import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

export default connect(
    mapStateToProps
)(Home);