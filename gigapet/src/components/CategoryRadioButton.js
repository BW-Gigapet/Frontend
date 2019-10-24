import React from 'react'
import styled from 'styled-components'

import { categories, categoryAssets } from '../categories'

const IconContainer = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${props => props.active?'2px solid'+props.colorB:'none'};
    padding: 0;
    margin: 0;
    background-color: ${props => props.colorA};
`

const InvisibleInput=styled.input`
visibility: hidden;
position: fixed;
top: -10px;
`

export function CategoryRadioButton({input, setInput, category}) {
    function changeHandler(e) {
        console.log(e.target.value)
        setInput({...input, category})
    }

    return (
        <label> 
            <IconContainer active={false} {...categoryAssets.get(category)} >
                <img src={categoryAssets.get(category).icon} />
            </IconContainer>
            <p>{category}</p>
            <InvisibleInput //visibility: hidden;
                type='radio'
                name='category'
                value={category}
                checked={category===input.category}
                onChange={changeHandler}
            />
        </label>
    )
}

export default CategoryRadioButton