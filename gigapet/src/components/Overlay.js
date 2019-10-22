import React, {useState} from 'react'
import styled from 'styled-components'

const OverlayBackground = styled.div`
position: fixed;
width: 100%;
height: 100%
top: 0;
left: 0;
z-index: 5;
background: rgba(236, 235, 237, 0.7);
backdrop-filter: blur(4px);
display: ${props => props.open?'unset':'none'};
`

const OverlayForeground = styled.div`
position: fixed;
width: 100%;
height: 100%
z-index: 6;
`

export function Overlay(props) {
    return (
        <OverlayBackground open={props.open}>
            <OverlayForeground>
                {props.children}
            </OverlayForeground>
        </OverlayBackground>
    )
}

export default Overlay