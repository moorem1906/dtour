import { FETCH_USER } from './types';
import axios from 'axios';
import { constants } from '../constants'



export const searchDestinations = params => dispatch => {
  const data = {
    latitude: params.latitude,
    longitude: params.longitude,
    radius: params.radius,
    low_price: params.price_range[0],
    high_price: params.price_range[1]
  }

  axios.post('/api/destinations', data).then(res => {
    dispatch({
      type: constants.GET_DESTINATIONS,
      payload: res.data
    })
  })
}

export const fetchUser = () => async dispatch => {
  console.log(fetchUser);
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
  export const bookTrip = params => dispatch => {
    console.log('params', params)
    const data = {
      user_id: params.user_id,
      destinations: params.destinations,
      total_price: params.total_price
    };

    axios.post('/api/trip/book', data).then(res => {
      alert('Successfully booked trip! Have fun!')
    });
  }

  export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({ type: FETCH_USER, payload: res.data });
  };

  export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);

    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });

  }};