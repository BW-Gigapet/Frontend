import React from 'react'

export function PortionRadioButton({input, setInput, portion}) {
    function changeHandler(e) {
        console.log(e.target.value)
        setInput({...input, portion})
    }

    return (
        <label>
            <p>{portion}</p>
            <input //visibility: hidden;
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