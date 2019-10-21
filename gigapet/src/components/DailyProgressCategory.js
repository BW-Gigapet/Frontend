import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const DailyProgressCategory = (props) => {
    console.log('Daily Progress Category props', props)
    const [categoryProgress, setCategoryProgress] = useState(0);
    // const [color, setColor] = useState();

    useEffect(() => {
        {/*  make axios call for todays category progress and add condition logic for color */}
    })


    return (
       
        <div>
            <p>{props.category}</p>
            <VegetableBarNone>{props.category.vegetable}</VegetableBarNone>
            <p>{/*categoryProgress*/}</p>
            <p>33%</p>

            {/* reduce the daily entries  */}
        </div>
        
    )
}

export default DailyProgressCategory;

const VegetableBarNone = styled.div`
    background: #EBF9EF;
    border-radius: 7px;
    width: 33%;
    height:24px;
`;