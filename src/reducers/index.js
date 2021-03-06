import { combineReducers } from 'redux';
import CarFormReducer from './CarFormReducer';
import CarReducer from './CarReducer';

export default combineReducers({
    carForm: CarFormReducer,
    cars: CarReducer
});
