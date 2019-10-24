import React from 'react'
import styled from 'styled-components'

// style for active effect

export function SelectCategory({category, setCategory, active}) {
    return (
        <CategoryName
            active={active}
            onClick={()=>{setCategory(category)}}
        >{category}</CategoryName>
    )
}

export default SelectCategory

const CategoryName = styled.h6`
    cursor: pointer;
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.active?'#247CAD':'#1A051D'};
    text-decoration-color: #247CAD;
    text-decoration: ${props => props.active?'underline':'none'};
    margin: 0;
    font-style: normal;
    font-weight: normal;
    margin-top: 20px;
    text-align: left;
    cursor: pointer;
`;