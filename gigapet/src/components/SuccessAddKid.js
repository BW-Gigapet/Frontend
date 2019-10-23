import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'

import DefaultButton from './DefaultButton';
import { ArrowButton } from './FormStyles';

const PageContainer = styled.section`
  background: #f6f6f6;
`;

const SuccessTitle = styled.h4`
font-family: 'Nunito Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 40px;
color: #247CAD;
margin-top: 87px;
margin-bottom: 0;
`;

const SuccessMessage = styled.p`

`;

const AnimalsImageContainer = styled.div`
margin: 51px;
`;

export default function KidsProfileSetup() {

  let history = useHistory();

  const handleClick = () => {
    history.push("/")
  };

    return (

      <PageContainer className="kidsProfileSetup">
        <div className="contentContainer">
          <div className="arrowButtonContainer">
            <ArrowButton onClick={handleClick} className="arrowBackButton">
              <img className="ButtonImage" src={ require('../assets/BackArrow.png')} alt="arrowIcon" />
            </ArrowButton>
          </div>
          <SuccessTitle>Alright!</SuccessTitle>
          <SuccessMessage>Download the Gigapet app on your kid's device so they can see how their Gigapet is doing!</SuccessMessage>
          <DefaultButton label={"Start Logging"} link={"/home"} />
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
  