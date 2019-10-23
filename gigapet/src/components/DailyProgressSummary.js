import React, { useState, useEffect } from 'react';
import DailyProgressCategory from './DailyProgressCategory';
import { connect } from 'react-redux';
import { fetchMeals } from '../actions';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const categories = [
    {
        name: 'Vegetables',
        id: 'veg',
        progressBar: '#EBF9EF',
        fillerColor: '#82D99C'

    },
    {
        name: 'Fruits',
        progressBar: '#F7F5DE',
        fillerColor: '#DBCF61'
    },
    {
        name: 'Whole Grains',
        progressBar: '#FDEDE7',
        fillerColor: '#F38058'
    },
    {
        name: 'Protein',
        progressBar: '#EAF5FB',
        fillerColor: '#5BAEDC'
    },
    {
        name: 'Fats & Oils',
        id: 'fatsoils',
        progressBar: '#EFEAFA',
        fillerColor: '#9678DE'
    },
    {
        name: 'Sugars',
        progressBar: '#FFEBF6',
        fillerColor: '#FF66B9'
    }
]



const DailyProgressSummary = (props) => {
    console.log('Daily Progress Summary props', props)
    const history = useHistory()

    const [child, setChild] = useState({})

    useEffect(() => {
        if (props.loggedInUser.childAccounts){
            setChild(props.loggedInUser.childAccounts[0])
            props.fetchMeals(child.id)
        }
    },[props.loggedInUser])

    return (
        <div>
            <h1>{child.name}</h1>
            <EditButton onClick={()=>{history.push('/dashboard/edit')}}>Edit</EditButton>
            {/* map categories */}
            {categories.map(category => (
                <DailyProgressCategory /*key={}*/ category={category} />
            ))}
            
        </div>
    )
}

const mapStateToProps = state => {
    console.log('mapsStateToProps state in Daily Progress Summary', state)

    return {

      loggedInUser: state.loggedInUser,
      mealData: state.mealData,
      isLoading: state.isLoading,
      error: state.error

    }
  }

export default connect(mapStateToProps, { fetchMeals })(DailyProgressSummary);


const EditButton = styled.button`
  border: none;
  font size: 1.5rem;
  background: #f6f6f6;
  font-weight: bold;
`;