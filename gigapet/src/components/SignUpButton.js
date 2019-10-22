import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import { LinkButtonDefault } from "./FormStyles"


const ButtonContainer = styled.div`
 margin-right: 29px;
`;

const SignUpButton = () => {     
   
    return ( 
        <ButtonContainer className="buttonContainer">
            <Link to="/signup">
                <LinkButtonDefault>Sign Up</LinkButtonDefault>
            </Link>
        </ButtonContainer>
    )
}
export default SignUpButton