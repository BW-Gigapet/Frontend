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

const SignUpButton = () => {     
   
    return ( 
        <div className="buttonContainer">
            <Link to="/signup">
                <button>Sign Up</button>
            </Link>
        </div>
    )
}
export default SignUpButton