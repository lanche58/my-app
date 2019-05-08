import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Home from '../home';
import ChoiceCity from '../choiceCity';
import SignIn from '../signIn';
import Search from '../search';

class RouteMap extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={Home}/>
                    <Route path="/choiceCity" component={ChoiceCity}/>
                    <Route path="/signIn" component={SignIn}/>
                    <Route path="/search" component={Search}/>
                </div>
            </Router>
        )
    }
}

export default RouteMap;