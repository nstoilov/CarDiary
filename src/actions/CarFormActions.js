
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
    CAR_UPDATE,
    CAR_CREATE,
    CARS_FETCH_SUCCESS,
    CARS_SAVE_SUCCESS,
    FORM_RESET
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
                Actions.carList();
            });
    };
};

export const carsFetch = () => {
    return (dispatch) => {
        firebase.database().ref('cars')
            .on('value', snapshot => {
                dispatch({ type: CARS_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};

export const carSave = ({ 
    name,
    summerTyres,
    winterTyres,
    techCheck,
    maint,
    citizenInsuranse,
    carInsurance,
    uid
     }) => {
        return (dispatch) => {
        firebase.database().ref(`cars/${uid}`)
        .set({ 
            name,
            summerTyres,
            winterTyres,
            techCheck,
            maint,
            citizenInsuranse,
            carInsurance
         })
        .then(() => {
            dispatch({ type: CARS_SAVE_SUCCESS });
            console.log('save successfull');
            Actions.main({ type: 'reset' });
        });
    };
};

export const carDelete = ({ uid }) => {
        return () => {
        firebase.database().ref(`cars/${uid}`)
        .remove()
        .then(() => {
            Actions.main({ type: 'reset' });
        });
    };
};

export const formReset = () => {
    return {
        type: FORM_RESET
    };
};
