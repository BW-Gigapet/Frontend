import React from 'react'
import styled from 'styled-components'

const InvisibleInput=styled.input`
visibility:hidden;
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
            <div>
                {/* image */}
            </div>
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