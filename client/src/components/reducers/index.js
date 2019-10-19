//import authReducer
//combine it with a combine reducers call
// export is from file 

import {combineReducers} from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducers';
import { constants } from '../../constants';

export const destinations = (state=[], action) => {
    switch(action.type) {
        case constants.GET_DESTINATIONS:
            return action.payload;

        default:
            return state
    }
}

export const trip_destinations = (state=[], action) => {
    switch (action.type) {
        case constants.GET_TRIP_DESTINATIONS:
            return action.payload;
        case constants.ADD_TRIP_DESTINATION:
            return [...state, action.payload];
        case constants.REMOVE_TRIP_DESTINATION:
            return state.filter( item => item !== state[action.payload.index]  );
        default:
            return state
    }
}

export const trip_total = (state=0, action) => {
    switch(action.type) {
        case constants.GET_TRIP_TOTAL:
            return state;
        case constants.ADD_TRIP_DESTINATION:
            return state + action.payload.price;
        case constants.REMOVE_TRIP_DESTINATION:
            return state - action.payload.destination.price;
        default:
            return state
    }
}

export default combineReducers({
    auth: authReducer,
    destinations,
    trip_destinations,
    trip_total,
    auth: authReducer,
    form: reduxForm

});