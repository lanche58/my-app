import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../home';
import ChoiceCity from '../choiceCity';
import SignIn from '../signIn';
import Search from '../search';
import * as userInfoAction from '../../action/userinfo';
// import configureStore from '../../store/store';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.initDone ?
                    <Router>
                        <Route path="/" exact component={Home}/>
                        <Route path="/choiceCity" component={ChoiceCity}/>
                        <Route path="/signIn" component={SignIn}/>
                        <Route path="/search" component={Search}/>
                    </Router>
                    : '正在加载中。。。'
                }
            </div>
        )
    }
    // 组件渲染后调用
    componentDidMount() {

        // 获取cityName
        let cityName = "北京";

        // 更新userinfo.cityName，通过action更新
        this.props.userInfoActions.update({
            cityName
        })

        this.setState({
            initDone: true
        })
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoAction, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);