import * as actionTypes from '../data/userinfo';

const userinfo = function(state={}, action) {
    switch(action.type) {
        case actionTypes.USERINFO_UPDATE:
            return action.data;
        default:
            return state;
    }
}

export default userinfo;