import {
    FETCH_MEALS_START,
    FETCH_MEALS_SUCCESS,
    FETCH_MEALS_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions';

const initialState = {
    loggedInUser: {},
    mealData: [],
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
            case LOGIN_START:
                    return {
                        ...state,
                        isLoading: true,
                        error: ''
                    }     
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedInUser: action.payload,
                isLoading: false,
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loggedInUser: {},
                isLoading: false,
                error: action.payload
            }          
        default:
            return state;
    }
}