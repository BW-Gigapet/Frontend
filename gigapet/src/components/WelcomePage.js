import React from 'react';

import LogInButton from './LogInButton';
import SignUpButton from './SignUpButton';




export default function WelcomePage() {

    return (
      <section className="welcome-page">
           <h1>Welcome to Gigapet</h1>
        <div className="bunnyImageContainer">
        <img
            className="bunny"
            src={ require("../assets/QR Bunny.png")}
            alt="bunny"
          />
        </div>
        <div className="buttonContainer">
            <SignUpButton />
            <LogInButton />    
            
        </div>
        <div className="animalsImageContainer">
        <img
            className="animals"
            src={ require("../assets/QR Bunny.png")}
            alt="animals"
          />
        </div>  
      </section>
    );
  }
  