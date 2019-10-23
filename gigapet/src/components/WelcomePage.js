import React from 'react';
import styled from 'styled-components';

import DefaultButton from './DefaultButton';

const WelcomePageContainer = styled.section`
  background: #f6f6f6;
`;

const WelcomeTitle = styled.h3`
font-family: 'Nunito Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 48px;
line-height: 65px;
color: #247CAD;
margin-top: 87px;
margin-bottom: 0;
`;

const ButtonsContainer = styled.div`
display: flex;
justify-content: center;
`;

const BunnyImageContainer = styled.div`
margin-bottom: 7px;
`;

const AnimalsImageContainer = styled.div`
margin: 51px;
`;

export default function WelcomePage(props) {
console.log("Welcome page props", props)
    return (
      <WelcomePageContainer className="welcome-page">
           <WelcomeTitle>Welcome to Gigapet</WelcomeTitle>
        <BunnyImageContainer className="bunnyImageContainer">
        <img
            className="bunny"
            src={ require("../assets/QR Bunny.png")}
            alt="bunny"
          />
        </BunnyImageContainer>
        <ButtonsContainer className="buttonsContainer">
            <DefaultButton link={"/signup"} label={"Sign Up"} />
            <DefaultButton link={"/login"} label={"Log In"} />   
        </ButtonsContainer>
        <AnimalsImageContainer className="animalsImageContainer">
        <img
            className="animals"
            src={ require("../assets/Gigapets847by377px.png")}
            alt="animals"
          />
        </AnimalsImageContainer>  
      </WelcomePageContainer>
    );
  }
  