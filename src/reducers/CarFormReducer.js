import {
    CAR_UPDATE,
    CAR_CREATE,
    CARS_SAVE_SUCCESS,
    FORM_RESET
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
        console.log('car update triggered');
            return { ...state, [action.payload.prop]: action.payload.value };    
            case CAR_CREATE:
            console.log('car craete triggered');
            return INITIAL_STATE;
        case CARS_SAVE_SUCCESS:
        console.log('car save triggered');
            return INITIAL_STATE;       
            case FORM_RESET:
            console.log('form reset triggered');
                return INITIAL_STATE;    
        default:
            return state;
    }
};

