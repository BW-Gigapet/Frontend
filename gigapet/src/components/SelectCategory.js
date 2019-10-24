import React from 'react'
import styled from 'styled-components'

// style for active effect

export function SelectCategory({category, setCategory, active}) {
    return (
        <CategoryName // replace with styled component, pass "active" in props
            onClick={()=>{setCategory(category)}}
        >{category}</CategoryName>
    )
}

export default SelectCategory

const CategoryName = styled.h6`
    font-size: 18px;
    line-height: 24px;
    color: #1A051D;
    margin: 0;
    font-style: normal;
    font-weight: normal;
    margin-top: 20px;
    text-align: left;
    cursor: pointer;
`;