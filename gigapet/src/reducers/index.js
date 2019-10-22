import {
    FETCH_MEALS_START,
    FETCH_MEALS_SUCCESS,
    FETCH_MEALS_FAILURE
} from '../actions';

const initialState = {
    // parent: {},
    mealData: [],
    categoryData: 
        {
            veg: 0,
            fruit: 0,
            wholegrain: 0,
            protein: 0,
            fatsoils: 0,
            sugars: 0

        }
    ,
    isLoading: false,
    error: ''
}

export const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case FETCH_MEALS_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_MEALS_SUCCESS:
            return {
                ...state,
                mealData: action.payload,
                isLoading: false,
                error: ''
            }   
        case FETCH_MEALS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }     
        default:
            return state;
    }
}