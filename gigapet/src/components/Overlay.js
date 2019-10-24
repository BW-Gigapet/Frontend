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
display: ${props => props.open?'flex':'none'};
justify-content: center;
align-items: flex-start;
`

const OverlayForeground = styled.div`
position: fixed;
max-width: 100%;
height: 100%
max-height: 100%
margin: 0 auto;
overflow: auto;
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