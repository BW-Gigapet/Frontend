import React from 'react';
import styled from 'styled-components';

import DefaultButton from './DefaultButton';

const PageContainer = styled.section`
  background: #f6f6f6;
`;

const SetUpQuestion = styled.h4`
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

const AnimalsImageContainer = styled.div`
margin: 51px;
`;

export default function KidsProfileSetup() {

    return (

      <PageContainer className="kidsProfileSetup">
        <div className="contentContainer">
           <SetUpQuestion>Do you want to begin setting up your kids profile?</SetUpQuestion>
            <p>You can always add them later but we recommend getting started!</p>
        <ButtonsContainer className="buttonsContainer">
            <DefaultButton label={"Yes"} link={"/"} />
            <DefaultButton label ={"Skip"} link={"/"} />
        </ButtonsContainer>
        </div>
        <AnimalsImageContainer className="animalsImageContainer">
        <img
            className="animals"
            src={ require("../assets/Gigapets847by377px.png")}
            alt="animals"
          />
        </AnimalsImageContainer>  
      </PageContainer>

    );
  }
  