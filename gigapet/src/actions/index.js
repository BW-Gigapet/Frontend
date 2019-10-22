import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_MEALS_START = 'FETCH_MEALS_START';
export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS';
export const FETCH_MEALS_FAILURE = 'FETCH_MEALS_FAILURE';


export const fetchMeals = () => dispatch => {
    dispatch({ type: FETCH_MEALS_START })

    axiosWithAuth()
    .get('/api/meals/')
    .then(res => {
        console.log('response from GET meals', res)
        dispatch({ type: FETCH_MEALS_SUCCESS, payload: res.data })
    })
    .catch(err => {
        console.log('No data', err)
        dispatch({ type: FETCH_MEALS_FAILURE, payload: err })
    })
}
