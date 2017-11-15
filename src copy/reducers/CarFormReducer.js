import {
    CAR_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    summerTyres: '',
    winterTyres: '',
    techCheck: '',
    maint: '',
    citizenInsuranse: '',
    carInsurance: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CAR_UPDATE:
        //action.payload === { prop: 'name', value: 'jane'}
            return { ...state, [action.payload.prop]: action.payload.value };        
        default:
            return state;
    }
};

