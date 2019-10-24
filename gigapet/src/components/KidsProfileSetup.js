import React from 'react';
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
  margin-top: 30px;
  margin-bottom: 0;
`;

const ArrowButtonContainer = styled.div`
  align-self: flex-start;
  width: 40px;
  margin-top: 70px;
`;

const SuccessMessage = styled.h4`
  font-family: 'Nunito Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #247CAD;
  margin: 0;
`;

const BeginSetupMessage = styled.h5`
font-family: 'Nunito Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 24px;
color: black;
margin-top: 40px;
margin-bottom: 80px;
`;

// const ButtonsContainer = styled.div`
// display: flex;
// flex-direction: row;
// `;

const AnimalsImageContainer = styled.div`
margin-bottom: 50px;
margin-top: 30px;
`;

export default function KidsProfileSetup(props) {
  console.log('KidSetup props', props)

  let history = useHistory();

  const handleClick = () => {
    history.push("/")
  };

    return (

      <PageContainer className="kidsProfileSetupContainer">
        <ContentContainer className="contentContainer">
          <ArrowButtonContainer className="arrowButtonContainer">
            <ArrowButton onClick={handleClick} className="arrowBackButton">
              <img className="ButtonImage" src={ require('../assets/BackArrow.png')} alt="arrowIcon" />
            </ArrowButton>
          </ArrowButtonContainer>
          <SuccessMessage className="successMessage">You have successfully registered!</SuccessMessage>
          <BeginSetupMessage className="beginSetupMessage">Begin setting up your kid's profile.</BeginSetupMessage>
          <DefaultButton label={"Continue"} link={"/addkidpage"} />
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
  