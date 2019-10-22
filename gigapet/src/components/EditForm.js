import React, { useState, useEffect } from 'react'

import categories from '../categories'

import CategoryRadioButton from './CategoryRadioButton'
import PortionRadioButton from './PortionRadioButton'

export function EditForm(props) {
    // state
    const [input, setInput] = useState({
        category: '',
        portion: '',
    })

    useEffect(()=>{
        const {category, portion} = props
        if (portion) setInput({category, portion})
        if (category) setInput({...input, category})
    },[props])

    function submitHandler(e) {
        e.preventDefault()
        if (props.portion) {
            // axios put
        }
        else {
            // axios post
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

export default EditForm