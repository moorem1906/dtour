//import authReducer
//combine it with a combine reducers call
// export is from file 

import {combineReducers} from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducers';


export default combineReducers({
    auth: authReducer,
    form: reduxForm

}); 