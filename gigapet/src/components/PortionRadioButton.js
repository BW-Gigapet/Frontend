import React from 'react'
import styled from 'styled-components'

const BlueButtonDiv = styled.div`
cursor: pointer;
width: 200px;
height: 64px;
background: ${props => props.active?'#247CAD':'white'};
border: 2px solid #247CAD;
border-radius: 6px;
color: ${props => props.active?'white':'#247CAD'};
font-style: normal;
font-size: 18px;
line-height: 64px;
margin-bottom: 10%;

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

    const [active, setActive] = React.useState(false)

    React.useEffect(()=>{
        setActive(portion === input.portion)
    },[input])

    return (
        <label>
            <BlueButtonDiv active={active}>{portion}</BlueButtonDiv>
            <InvisibleInput //visibility: hidden;
                type='radio'
                name='category'
                value={portion}
                checked={active}
                onChange={changeHandler}
            />
        </label>
    )
}

export default PortionRadioButton