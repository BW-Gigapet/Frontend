import React from 'react';
import styled from 'styled-components';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



const DashboardFooter = () => {
        return (
            <>
            <FooterTag className="footer">
                <FooterContent className="footer-content">
                            <FooterSection className="footer-section about">
                                <h2>GIGAPET INC.</h2>
                                <hr></hr>
                                <p>San Francisco, CA</p>
                                <p>USA</p>
                                <p>1(800) 888-8888</p>
                            </FooterSection>

                            <FooterSection className="footer-section">
                                <h2>FIND US</h2>
                                <hr></hr>
                                <p>Instagram</p>
                                <p>Facebook</p>
                                <p>Twitter</p>
                            </FooterSection>

                            <FooterSection className="footer-section">
                                <h2>QUICK LINKS</h2>
                                <hr></hr>
                                <ul>
                                    <a href="https://bw-gigapet.github.io/Marketing--Robin/index.html">
                                        <li>Home</li>
                                    </a>
                                    <a href="https://bw-gigapet.github.io/Marketing--Robin/about.html">
                                        <li>About Us</li>
                                    </a>
                                </ul>
                            </FooterSection>
                </FooterContent>
                </FooterTag>
                <FooterBottom className="footer-bottom">
                    <p>&copy; Copyright</p>
                    <Socials className="socials">
                        <a href="#"><FaFacebookSquare/></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                    </Socials>
                </FooterBottom>
            </>
        )
      
    
}

export default DashboardFooter;

const FooterTag = styled.div`
    background-color: #F6F6F6;
    height: 170px;
    color: #247CAD;
    position: relative;
`;

const FooterContent = styled.div`
    display: flex;
    hr{
        border: .7px solid #006BE8;
    }
`;

const FooterSection = styled.div`
    flex: 1;
    padding: 30px;
    h2{
        color: rgba(0, 0, 0, 0.8);
        font-size: 14px;
        text-align: left;
        font-weight: bold;
    }
    p{
        font-size: 12px;
        text-align: left;
    }
    ul{
        text-align: left;
    }
    a{
        font-size: 12px;
        color: rgba(0, 0, 0, 0.8);
        text-decoration: none;
        line-height: 1.5;
        &:hover{
            color: rgba(0, 0, 0, 0.8);
        }
        li {
            list-style: none;
        }
    }
  
`;

const FooterBottom = styled.div`
    background-color: #FBFBFB;
    color: rgba(0, 0, 0, 0.8);
    padding: 10px 0;
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
        

        color: #247CAD;
        font-size: 20px;
        text-align: right;
    }
  
`;