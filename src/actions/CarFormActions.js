
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    CAR_UPDATE,
    CAR_CREATE
} from './types';

export const carUpdate = ({ prop, value }) => {
    console.log("it's: ", { prop, value });
    return {
        type: CAR_UPDATE,
        payload: { prop, value }
    };
};

export const carCreate = ({ 
    name,
    summerTyres,
    winterTyres,
    techCheck,
    maint,
    citizenInsuranse,
    carInsurance
 }) => {    
    return (dispatch) => {
    firebase.database().ref('cars')
        .push({ 
            name,
            summerTyres,
            winterTyres,
            techCheck,
            maint,
            citizenInsuranse,
            carInsurance
         })
        .then(() => {
            dispatch({ type: CAR_CREATE });
            Actions.CarList();
        });
    };
};
