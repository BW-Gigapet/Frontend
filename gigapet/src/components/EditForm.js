import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchMeals } from '../actions'
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from 'styled-components'

import categories from '../categories'

import CategoryRadioButton from './CategoryRadioButton'
import PortionRadioButton from './PortionRadioButton'

const FlexForm = styled.form`
    display: flex;
    align-items: flex-start;
`

const FlexDiv = styled.div`
    display: flex;
    align-items: center;
`

const CategorySelectionDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
`

const DividerDiv = styled.div`
    width: 10%;
`

const InfoDiv = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #247CAD;
    color: white;
`

const SaveButton = styled.button`
margin-top: 20%;
width: 204px;
height: 64px;
background: white;
border: 2px solid #247CAD;
border-radius: 6px;
color: #247CAD;
font-style: normal;
font-size: 18px;
line-height: 64px;

&:active {
    transform: scale(1.5);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

&:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
`

export function EditForm(props) {
    console.log('Edit form props', props)
    
    // state
    const [input, setInput] = useState({
        category: '',
        portion: '',
    })

    useEffect(()=>{
        const {category, portion} = props
        if (portion) setInput({category, portion})
        if (category) setInput({...input, category})
        console.log('edit form state', input)
    },[props])

    function submitHandler(e) {
        e.preventDefault()
        
        const childId = props.loggedInUser.childAccounts[0].id
        
        if (props.edit) {
            // axios put
            const mealId = props.edit.id

            const entry = {
                ...props.edit,
                name: input.category,
                portionSize: input.portion,
            }

            delete entry.percent

            axiosWithAuth()
            .put(`/api/meals/${mealId}`, entry)
            .then(res => {
                console.log('PUT edit meal in Edit Form', res)
                props.fetchMeals(childId);
                props.setOpen(false)
            })
            .catch(err => console.log(err.response))
        }
        else {
            // axios post
            // const childId = props.loggedInUser.childAccounts[0].id

            //From DOMINIQUE:
            //hard coded sample entry because I couldn't figure out your control and did not want to mess with it
            //wanted to get items adding for my progress bar

            let date = new Date()
            
            const sampleEntry =
            {
                name: input.category,
                portionSize: input.portion,
                date: date.toISOString(),
                time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            }


            axiosWithAuth()
            .post(`/api/child/${childId}/meals`, sampleEntry)
            .then(res => {
                console.log('POST add meal in Edit Form', res)
                props.fetchMeals(childId);
                props.setOpen(false)
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <FlexForm onSubmit={submitHandler}>
            <div>
                <h4>Food Group</h4>
                <CategorySelectionDiv>
                    {categories.map((category,index) => <CategoryRadioButton key={index} {...{input, setInput, category}} />)}
                </CategorySelectionDiv>
            </div>
            <DividerDiv />
            <div>
                <FlexDiv>
                    <h4>Portion Size&nbsp;</h4>
                    <InfoDiv
                        title={'The USDA suggests that kids between the ages of 2 and 8 years eat:\n1 to 1 1/2 cups of Veggies\n1 to 1 1/2 cups of Fruit\n3 to 5 oz Whole Grain\n3 to 4 teaspoons of Fats & Oil\nand keeping Sugar intake to a minimum\n\nhttps://www.choosemyplate.gov\n\nFor this form, small, medium, and large represent 33%, 67%, and 100% of this recommendation.'}
                    >i</InfoDiv>
                </FlexDiv>
                <div>
                    {['small','medium','large'].map((portion, index) => <PortionRadioButton key={index} {...{input, setInput, portion}} />)}
                </div>
                <div>
                    <SaveButton type='submit'>Save</SaveButton>
                </div>
            </div>
        </FlexForm>
    )
}

const mapStateToProps = state => {
    console.log('mstp edit form', state)

    return {
        loggedInUser: state.loggedInUser,
    }
}

export default connect(mapStateToProps, { fetchMeals })(EditForm);