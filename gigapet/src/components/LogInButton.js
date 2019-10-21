import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

// const LinkButton = styled(Link)`
// width: 195px;
// height: 48px;
// background: #247CAD;
// border-radius: 6px;
// color: white;
// `;

const LogInButton = () => {     
   
    return ( 
        <div class="buttonContainer">
            <Link to="/login">
                <button>Log In</button>
            </Link>
        </div>
    )
}
export default LogInButton