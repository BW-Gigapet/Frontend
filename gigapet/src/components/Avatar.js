import React, {useRef} from 'react'
import styled, { keyframes } from 'styled-components'

import bearBG from '../assets/bear-background.png'
import bearBody from '../assets/bear-body.png'
import tired from '../assets/bear-tired.png'
import sleeping from '../assets/bear-sleeping.png'
import leftArm from '../assets/bear-arm.png'
import rightArm from '../assets/bear-arm2.png'

const waveLeft = keyframes`
50% {
    transform: translateX(-50%) translateY(10%) rotate(-40deg);
}
`

const waveRight = keyframes`
50% {
    transform: translateX(-50%) translateY(10%) rotate(40deg);
}
`
const waveLeftTired = keyframes`
50% {
    transform: translateX(-50%) translateY(10%) rotate(20deg);
}
`

const waveRightTired = keyframes`
50% {
    transform: translateX(-50%) translateY(10%) rotate(-20deg);
}
`

const blink = keyframes`50% { opacity: 0.33;}`


const Container = styled.div`
position: relative;
overflow: hidden;
`

const Backgorund = styled.img`
width: 100%;
`

const BearBody = styled.img`
width: 45%;
position: absolute;
z-index: 3;
left: 50%;
transform: translateX(-50%) translateY(10%);
display: ${props => props.hide?'none':'unset'};
`

const BearArmLeft = styled.img`
width: 45%;
position: absolute;
z-index: 2;
left: 50%;
transform: translateX(-50%) translateY(10%) rotate(60deg);
transform-origin: 65% 45%;
animation: ${props => props.animation} ${props => props.speed};
animation-iteration-count: infinite;
`

const BearArmRight = styled(BearArmLeft)`
transform: translateX(-50%) translateY(10%) rotate(-60deg);
transform-origin: 35% 45%;
`

const Snoring = styled.span`
font-size: 4vw;
font-weight: bold;
display: ${props => props.hide?'none':'block'};
position: absolute;
z-index: 4;
left: 50%;
text-shadow: 2px 2px 0 white, -2px 2px 0px white, 2px -2px 0px white, -2px -2px 0px white;
animation: ${blink} 3s;
animation-iteration-count: infinite;
`

export function Avatar(props) {
    // change animation to class, so play on click
    return (
        <Container>
            <Backgorund src={bearBG} />
            <BearBody src={bearBody} />
            <BearBody src={tired} hide={true} />
            <BearBody src={sleeping} hide={true} />
            <BearArmLeft src={leftArm} animation={waveLeft} speed='1s' />
            <BearArmRight src={rightArm} animation={waveRight} speed='1s' />
            <Snoring hide={true}>zZZ</Snoring>
        </Container>
    )
}

export default Avatar