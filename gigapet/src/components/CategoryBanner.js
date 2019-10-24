import React from 'react'
import styled from 'styled-components'

import { categoryAssets } from '../categories'

const CategoryBannerContainer = styled.div`
    background: ${props => props.colorA};
    display: flex;
    justify-content: center;
    align-items:center;
    height: 66px;
`;

const CategoryName = styled.h2`
    font-size: 21px;
    line-height: 28px;
`;

export function CategoryBanner({category}) {
    // console.log(category, categoryAssets.get(category))
    return (
        <CategoryBannerContainer {...categoryAssets.get(category)}> {/* todo: styling */}
            <CategoryName>{category}</CategoryName>
        </CategoryBannerContainer>
    )
}

export default CategoryBanner