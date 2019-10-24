import React from 'react'
import styled from 'styled-components'
import { categories, categoryAssets } from '../categories'

const CategoryBannerContainer = styled.div`
    height: 66px;
`;

const CategoryName = styled.h2`
    font-size: 21px;
    line-height: 28px;
`;

export function CategoryBanner(props, category) {
    return (
        <CategoryBannerContainer> {/* todo: styling */}
            <h2>{props.category}</h2>
        </CategoryBannerContainer>
    )
}

export default CategoryBanner