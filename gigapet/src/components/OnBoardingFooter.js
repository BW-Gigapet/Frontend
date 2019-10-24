import React from 'react'
import styled from 'styled-components';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const OnBoardingFooter = () => {
    return(
       
                 <FooterBottom className="footer-bottom">
                    <p>&copy; Copyright</p>
                    <Socials className="socials">
                        <a href="#"><FaFacebookSquare/></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                    </Socials>
                </FooterBottom>
            
        
    )
}

export default OnBoardingFooter;


const FooterBottom = styled.div`
    background-color: #FBFBFB;
    color: rgba(0, 0, 0, 0.8);
    padding:  0;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    p{
        // padding-top: 2%;
        width: 50%;
        text-align: right;
    }
`;

const Socials = styled.div`
    margin-top: 15px;
    width: 40%;
    text-align: right;
    a{
        
        margin-left: 8px;
        color: #247CAD;
        font-size: 15px;
        text-align: right;
    }
  
`;
