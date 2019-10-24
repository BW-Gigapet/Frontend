import React from 'react';
import styled from 'styled-components';


const Footer = () => {
        return (
            <FooterTag className="footer">
                <FooterContent className="footer-content">
                            <div className="footer-section about">
                                <h2>GIGAPET INC.</h2>
                                <hr></hr>
                                <p>San Francisco, CA</p>
                                <p>USA</p>
                                <p>1(800) 888-8888</p>
                            </div>

                            <div className="footer-section">
                                <h2>FIND US</h2>
                                <hr></hr>
                                <p>Instagram</p>
                                <p>Facebook</p>
                                <p>Twitter</p>
                            </div>

                            <div className="footer-section">
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
                            </div>
                </FooterContent>

                <div className="footer-bottom">
                    <p>&copy; Copyright</p>
                    <div className="socials">
                        <a href="#"><img className="fab fa-github-square"></img></a>
                        <a href="#"><img className="fab fa-linkedin-in-square"></img></a>
                        <a href="#"><img className="fab fa-twitter-square"></img></a>
                        <a href="#"><img className="fab fa-facebook-square"></img></a>
                    </div>
                </div>
            </FooterTag>
        )
      
    
}

export default Footer;

const FooterTag = styled.div`
    background-color: #F6F6F6;
    // color: #247CAD;
    height: 400px;
    position: relative;
`;

const FooterContent = styled.div`
    height: 350px;
    display: flex;
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