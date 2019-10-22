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

const Container = styled.div`position:relative;`

const Backgorund = styled.img`
width: 100%;
position: absolute;
z-index: 1;
left: 0;
`

const BearBody = styled.img`
width: 45%;
position: absolute;
z-index: 3;
left: 50%;
transform: translateX(-50%) translateY(10%);
`

const BearArmLeft = styled.img`
width: 45%;
position: absolute;
z-index: 2;
left: 50%;
transform: translateX(-50%) translateY(10%) rotate(60deg);
transform-origin: 65% 45%;
animation: ${waveLeft} 2s;
animation-iteration-count: infinite;
`

const BearArmRight = styled(BearArmLeft)`
transform: translateX(-50%) translateY(10%) rotate(-60deg);
transform-origin: 35% 45%;
animation: ${waveRight} 2s;
animation-iteration-count: infinite;
`

export function Avatar(props) {
    return (
        <Container>
            <Backgorund src={bearBG} />
            <BearBody src={bearBody} />
            {/* <BearBody src={tired} /> */}
            {/* <BearBody src={sleeping} /> */}
            <BearArmLeft src={leftArm} />
            <BearArmRight src={rightArm} />
        </Container>
    )
}

export default Avatar