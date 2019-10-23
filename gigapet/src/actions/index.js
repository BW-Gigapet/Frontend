import { axiosWithAuth } from '../utils/axiosWithAuth';
import KidsProfileSetup from '../components/KidsProfileSetup';

export const FETCH_MEALS_START = 'FETCH_MEALS_START';
export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS';
export const FETCH_MEALS_FAILURE = 'FETCH_MEALS_FAILURE';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const fetchMeals = (childId) => dispatch => {
    dispatch({ type: FETCH_MEALS_START })
    if (childId ) {
    axiosWithAuth()
    .get(`/api/child/${childId}/meals?filter=today`)
    .then(res => {
        console.log('response from GET meals', res)
        dispatch({ type: FETCH_MEALS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log('No data', err)
        dispatch({ type: FETCH_MEALS_FAILURE, payload: err })
    })
}
}


export const getLoggedInUser = () => dispatch => {
    dispatch({ type: LOGIN_START })

    axiosWithAuth()
    .get('/api/users')
    .then(res => {
      console.log('response from GET id Kid', res)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.loggedInUser })
      //setLoggedInUser(res.data.loggedInUser)
      
    }) 
    .catch(err => {
      console.log('could not render data', err)
      dispatch({ type: LOGIN_FAILURE, payload: err })
    })
}