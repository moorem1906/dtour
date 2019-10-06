//import authReducer
//combine it with a combine reducers call
// export is from file 

import {combineReducers} from 'redux';
import authReducer from './authReducers';


export default combineReducers({
    auth: authReducer

}); 