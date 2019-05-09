import * as actionTypes from '../data/userinfo';

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDAT,
        data
    }
};

 