import React from 'react'
import styled from 'styled-components'

// style for active effect

export function SelectCategory({category, setCategory, active}) {
    return (
        <h6 // replace with styled component, pass "active" in props
            onClick={()=>{setCategory(category)}}
        >{category}</h6>
    )
}

export default SelectCategory