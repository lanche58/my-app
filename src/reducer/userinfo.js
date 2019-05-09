import * as actionTypes from '../data/userinfo';

const userReducer = function(state, action) {
    switch(action.type) {
        case actionTypes.USERINFO_UPDAT:
            return action.data;
        default:
            return state;
    }
}

export default userReducer;