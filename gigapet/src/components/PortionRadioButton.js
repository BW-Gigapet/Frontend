import React from 'react'
import styled from 'styled-components'

const BlueButtonDiv = styled.div`
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

const InvisibleInput=styled.input`
    visibility: hidden;
    position: fixed;
    top: -10px;
`

export function PortionRadioButton({input, setInput, portion}) {
    function changeHandler(e) {
        console.log(e.target.value)
        setInput({...input, portion})
    }

    return (
        <label>
            <BlueButtonDiv>{portion}</BlueButtonDiv>
            <InvisibleInput //visibility: hidden;
                type='radio'
                name='category'
                value={portion}
                checked={portion===input.portion}
                onChange={changeHandler}
            />
        </label>
    )
}

export default PortionRadioButton