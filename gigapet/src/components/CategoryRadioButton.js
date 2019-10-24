import React from 'react'
import styled from 'styled-components'

import { categories, categoryAssets } from '../categories'

const Label = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 33.33%;
`

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

    const [active, setActive] = React.useState(false)

    React.useEffect(()=>{
        setActive(category === input.category)
    },[input])

    return (
        <Label> 
            <IconContainer active={active} {...categoryAssets.get(category)} >
                <img src={categoryAssets.get(category).icon} />
            </IconContainer>
            <p>{category}</p>
            <InvisibleInput //visibility: hidden;
                type='radio'
                name='category'
                value={category}
                checked={active}
                onChange={changeHandler}
            />
        </Label>
    )
}

export default CategoryRadioButton