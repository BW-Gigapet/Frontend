

const initialState = {
    mealData: [],
    categoryData: 
        {
            veg: 0,
            fatsoils: 0
            
        }
    ,
    isLoading: false,
    error: ''
}

export const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        default:
            return state;
    }
}