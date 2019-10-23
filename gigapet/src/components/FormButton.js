import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import { LinkButtonDefault, LinkButtonGhost } from "./FormStyles"


const ButtonContainer = styled.div`
 margin-right: 29px;
`;

export const DefaultButton = (props) => {     
   console.log(props)
    return ( 
        <ButtonContainer className="buttonContainer">
            <Link to={props.link}>
                <LinkButtonDefault>{props.label}</LinkButtonDefault>
            </Link>
        </ButtonContainer>
    )
}

export const GhostButton = (props) => {     
    console.log(props)
     return ( 
         <ButtonContainer className="buttonContainer">
             <Link to={props.link}>
                 <LinkButtonGhost>{props.label}</LinkButtonGhost>
             </Link>
         </ButtonContainer>
     )
 }