import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';



const DailyProgressCategory = (props) => {
    console.log('Daily Progress Category props', props)
    const [percentage, setPercentage] = useState(33);
    // const [color, setColor] = useState();

    useEffect(() => {
        {/*  make axios call for todays category progress (%) and add condition logic for color */}
        // setPercentage(33);
    })


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

export default DailyProgressCategory;

// const VegetableBarNone = styled.div`
//     background: #EBF9EF;
//     border-radius: 7px;
//     width: ${categoryProgress}%;
//     height:24px;
// `;