import {
    USER_LOGGED_IN
} from './types';

export const loginUser = ({ user }) => {
    return {
        type: USER_LOGGED_IN,
        payload: { user }
    };
};
