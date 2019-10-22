import React from 'react'
import styled from 'styled-components'

const OverlayBackground = styled.div`
position: fixed;
width: 100%;
height: 100%
top: 0;
z-index: 1;
background: rgba(236, 235, 237, 0.7);
backdrop-filter: blur(4px);
`

const OverlayForeground = styled.div`
position: fixed;
width: 100%;
height: 100%
z-index: 2;
`

export function Overlay(props) {
    return (
        <OverlayBackground>
            <OverlayForeground>
                {props.children}
            </OverlayForeground>
        </OverlayBackground>
    )
}

export default Overlay