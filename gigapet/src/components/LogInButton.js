import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const LinkButton = styled.button`
width: 195px;
height: 48px;
background: #247CAD;
border-radius: 6px;
color: white;
`;

const LogInButton = () => {     
   
    return ( 
        <div class="buttonContainer">
            <Link to="/login">
                <LinkButton>Log In</LinkButton>
            </Link>
        </div>
    )
}
export default LogInButton