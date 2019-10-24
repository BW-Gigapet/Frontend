import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom'

import { DefaultButton } from './FormButton';
import { ArrowButton } from './FormStyles';


const PageContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 685px;
    height: 404px;
    margin-top: 30px;
    margin-bottom: 0;
`;

const ArrowButtonContainer = styled.div`
  align-self: flex-start;
  width: 40px;
  margin-top: 90px;
`;

const SuccessTitle = styled.h4`
    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #247CAD;
    margin: 0;
`;

const SuccessMessage = styled.p`
    width: 60%;
    font-size: 18px;
    line-height: 24px;
    margin-top: 40px;
    margin-bottom: 90px;
`;

const AnimalsImageContainer = styled.div`
    margin-bottom: 51px;
`;

export default function SuccessAddKid() {

  let history = useHistory();

  const handleClick = () => {
    history.push("/")
  };

    return (

      <PageContainer className="kidsProfileSetup">
        <ContentContainer className="contentContainer">
          <ArrowButtonContainer className="arrowButtonContainer">
            <ArrowButton onClick={handleClick} className="arrowBackButton">
              <img className="ButtonImage" src={ require('../assets/BackArrow.png')} alt="arrowIcon" />
            </ArrowButton>
          </ArrowButtonContainer>
          <SuccessTitle>Alright!</SuccessTitle>
          <SuccessMessage>Download the Gigapet app on your kid's device so they can see how their Gigapet is doing!</SuccessMessage>
          <DefaultButton label={"Start Logging"} link={"/dashboard"} />
        </ContentContainer>
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
  