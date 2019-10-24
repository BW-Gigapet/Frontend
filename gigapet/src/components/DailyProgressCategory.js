import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMeals } from '../actions'

import styled from 'styled-components';
import ProgressBar from './ProgressBar';



const DailyProgressCategory = (props) => {
    console.log('Daily Progress Category props', props)
    const [percentage, setPercentage] = useState(0);
    // const [color, setColor] = useState();

    useEffect(() => {
        if (props.mealData.length > 0) {
           
            let filteredMeals = props.mealData.filter(meal => {
                console.log("meal name", meal.name, "category name", props.category.name)
                return (meal.name === props.category.name)
            })

            if (filteredMeals.length > 0) {
                let newPercent = filteredMeals.reduce((total, meal) => total = total + meal.percent, 0)
            setPercentage(newPercent)
            }
            else {
                setPercentage(0)
            }
        }
        else {
            setPercentage(0)
        }

    }, [props.mealData])


    return (
       
        <DayProgContainer className='daily-progress-container'>
            <div className='category progress-bar'>
                <h3>{props.category.name}</h3>
                
            </div>
           <div className='percent'>
                <div>
                    <ProgressBar percentage={percentage} category={props.category}/>
                </div>
                <div>
                    <p>{percentage}%</p>
                </div>
            </div>
        </DayProgContainer>
        
    )
}

const mapStateToProps = state => {
    console.log('mstp daily prog categoy', state)
    return {
        loggedInUser: state.loggedInUser,
        mealData: state.mealData,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps, { fetchMeals })(DailyProgressCategory);



const DayProgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 315px;
    height: 100px;
    color: #1A051D;
    h3{
        font-size: 18px;
        text-align: left;
    }
    p{
        font-size: 16px;
         margin: 0 0 0 25px;
    }
`;