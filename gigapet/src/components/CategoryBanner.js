import React from 'react'
import styled from 'styled-components'

export function CategoryBanner(props) {
    return (
        <div> {/* todo: styling */}
            <h2>{props.category}</h2>
        </div>
    )
}

export default CategoryBanner