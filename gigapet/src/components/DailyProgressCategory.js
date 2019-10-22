import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMeals } from '../actions'

import styled from 'styled-components';
import ProgressBar from './ProgressBar';



const DailyProgressCategory = (props) => {
    console.log('Daily Progress Category props', props)
    const [percentage, setPercentage] = useState(33);
    // const [color, setColor] = useState();

    useEffect(() => {
        props.fetchMeals();

        {/*  make axios call for todays category progress (%) and add condition logic for color */}
        // setPercentage(33);
        
        //Lookup on category dataObject?? -- avoid merging the list set up with state
        //setPercentage(props.categoryData[props.category.id])
        
        //props.mealData.reduce((total, meal) => )

    }, [])

    // if the meal.name/category === props.category.name && meal.date is within current day, then total === total + mealData.portionSize

    return (
       
        <div>
            <p>{props.category.name}</p>
            <ProgressBar percentage={percentage} category={props.category}/>
            {/* <div>{props.category.vegetable}</div> */}
            <p>{/*categoryProgress*/}</p>
            <p>{percentage}%</p>

            {/* reduce the daily entries  */}
        </div>
        
    )
}

const mapsStateToProps = state => {
    return {
        mealData: state.mealData,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapsStateToProps, { fetchMeals })(DailyProgressCategory);

// const VegetableBarNone = styled.div`
//     background: #EBF9EF;
//     border-radius: 7px;
//     width: ${categoryProgress}%;
//     height:24px;
// `;