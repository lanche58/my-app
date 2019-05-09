import { createStore } from 'redux';
import userReducer from '../reducer/userinfo';

export default function configureStore() {
    const store = createStore(userReducer);
    return store;
};
