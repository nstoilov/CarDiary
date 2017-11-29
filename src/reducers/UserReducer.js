import {
    USER_LOGGED_IN
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            console.log(action);            
            return action.payload;
        default:
            return state;
    }
};