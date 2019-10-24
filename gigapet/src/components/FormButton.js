import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import { LinkButtonDefault, LinkButtonGhost } from "./FormStyles"


const GhostButtonContainer = styled.div`
 margin-left: 29px;
`;

export const DefaultButton = (props) => {     
   console.log(props)
    return ( 
        <div className="buttonContainer">
            <Link to={props.link}>
                <LinkButtonDefault>{props.label}</LinkButtonDefault>
            </Link>
        </div>
    )
}

export const GhostButton = (props) => {     
    console.log(props)
     return ( 
         <GhostButtonContainer className="buttonContainer">
             <Link to={props.link}>
                 <LinkButtonGhost>{props.label}</LinkButtonGhost>
             </Link>
         </GhostButtonContainer>
     )
 }