
import {
    CAR_UPDATE
} from './types';

//looking at EmployeeActions.js - update action

export const carUpdate = ({ prop, value }) => {
    console.log("it's: ", { prop, value });
    return {
        type: CAR_UPDATE,
        payload: { prop, value }
    };
};
