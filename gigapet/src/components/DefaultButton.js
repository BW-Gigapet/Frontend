import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import { LinkButtonDefault } from "./FormStyles"


const ButtonContainer = styled.div`
 margin-right: 29px;
`;

const DefaultButton = (props) => {     
   console.log(props)
    return ( 
        <ButtonContainer className="buttonContainer">
            <Link to={props.link}>
                <LinkButtonDefault>{props.label}</LinkButtonDefault>
            </Link>
        </ButtonContainer>
    )
}
export default DefaultButton