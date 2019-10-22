import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";



const ButtonContainer = styled.div`
 margin-left: 29px;
`;

const LinkButtonDefault = styled.button`
width: 195px;
height: 48px;
background: #247CAD;
border-radius: 6px;
color: white;
font-family: 'Nunito Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 24px;

&:active {
    background: white;
    color: #247CAD;
    border: 1px solid #247CAD;
}

&:hover {
    background: white;
    color: #247CAD;
    border: 1px solid #247CAD;
}

`;

const LogInButton = () => {     
   
    return ( 
        <ButtonContainer className="buttonContainer">
            <Link to="/login">
                <LinkButtonDefault>Log In</LinkButtonDefault>
            </Link>
        </ButtonContainer>
    )
}
export default LogInButton