import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchMeals } from '../actions'
import axiosWithAuth from '../utils/axiosWithAuth';

import categories from '../categories'

import CategoryRadioButton from './CategoryRadioButton'
import PortionRadioButton from './PortionRadioButton'

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
        if (props.portion) {
            // axios put
            // const mealId = props.id
        }
        else {
            // axios post
            const childId = props.loggedInUser.childAccounts[0].id

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
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <h4>Food Group</h4>
                <div>
                    {categories.map((category,index) => <CategoryRadioButton key={index} {...{input, setInput, category}} />)}
                </div>
            </div>
            <div>
                <h4>Portion Size</h4>
                <span>more info button</span>
                <div>
                    {['small','medium','large'].map((portion, index) => <PortionRadioButton key={index} {...{input, setInput, portion}} />)}
                </div>
                <div>
                    <button type='submit'>Save</button>
                </div>
            </div>
        </form>
    )
}

const mapStateToProps = state => {
    console.log('mstp edit form', state)

    return {
        loggedInUser: state.loggedInUser,
    }
}

export default connect(mapStateToProps, { fetchMeals })(EditForm);