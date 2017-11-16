import { combineReducers } from 'redux';
import CarFormReducer from './CarFormReducer';

export default combineReducers({
    carForm: CarFormReducer
});
