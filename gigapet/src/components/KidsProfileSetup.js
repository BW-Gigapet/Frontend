import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

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
flex-direction: row;
`;

const AnimalsImageContainer = styled.div`
margin: 51px;
`;

export default function KidsProfileSetup(props) {
  console.log('KidSetup props', props)

    // create proper functionality for back button

    // const routeToHome = event => {
    //     props.history.push('/signup');
    //   };

    return (

      <PageContainer className="kidsProfileSetup">
        <div className="contentContainer">
            <div className="arrowButtonContainer">
                <Link to="/signup">{/*is Link needed?*/}
                    <button className="arrowBackButton">
                        <img  /*onClick={() => routeToHome()*/ className="ButtonImage" src={ require('../assets/BackArrow.png')} alt="arrowIcon" />
                    </button>
                </Link>
            </div>
            <SetUpQuestion>Do you want to begin setting up your kids profile?</SetUpQuestion>
            <p>You can always add them later but we recommend getting started!</p>
            <div className="buttonsContainer">
                <DefaultButton label={"Yes"} link={"/addkidpage"} />{/* add correct links, history needed? */}
                <DefaultButton label ={"Skip"} link={"/"} />{/* add correct links, history needed? */}
            </div>
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
  