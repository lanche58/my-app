import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/page/app';
import { Provider } from 'react-redux';
import configureStore from './store/store';

import '../src/static/css/reset.css';
import '../src/static/css/common.css';
import '../src/static/css/iconfont.css';

// import {getData, postData} from './fetch/data';

// getData();
// postData();

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

