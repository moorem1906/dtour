//render root componnat to the dom
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';



import App from './components/App';
import reducers from './components/reducers';

//Development only axios helpers
import axios from 'axios';
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));


ReactDOM.render(
    //indicate when a new state is render, then updates the app file with all updates
    <Provider store={store}><App /></Provider>,
    document.querySelector('#root')
);

console.log('STRIPE KEY IS', process.env.REACT_APP_STRIPE_Key);
console.log('Environment is', process.env.NODE_ENV);


