import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import image from '../assets/QR Bunny.png'


const OnBoardingNavigation = () => {

    return (
        <div>
            <NavContainer className='navigation-container'>
                <Nav>
                    <div>
                        <NavLink id='logo' to='/'>
                            <Logo src={ image } alt='gigapet logo' />
                        </NavLink>
                    </div>
                    <NavLinks className='nav-links'>
                        <Ul>
                            <Li>
                                <StyledNavLink to='/' 
                                activeStyle={{fontWeight: "bold", color: "#247CAD", borderBottom: "2px solid #247CAD"}} >
                                Discover
                                </StyledNavLink>
                            </Li>
                            <Li>
                                <StyledNavLink to='#'>Testaments</StyledNavLink>
                            </Li>
                            <Li>
                                <StyledNavLink to='#'>Tools</StyledNavLink>
                            </Li>
                            <Li>
                                <StyledNavLink to='#'>FAQ</StyledNavLink>
                            </Li>
                            <Li>
                                <StyledNavLink to='#'>
                                About Us
                                </StyledNavLink>
                            </Li>
                        </Ul>
                    </NavLinks>
                    <LogInContainer className="LogInContainer">
                        <LogInLink to='/login'>Log In</LogInLink>
                    </LogInContainer>
                </Nav>
            </NavContainer>
        </div>  
    )
}

export default OnBoardingNavigation;

const NavContainer = styled.div`
    background: #F6F6F6;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.16), 0px 0px 4px rgba(0, 0, 0, 0.08);
`;

const Logo = styled.img`
    width: 70px;
    height: auto;
    margin-left: 14px;
`;

const Nav = styled.nav`
    width: 100%;
    z-index: 10;
    top: 0px;
    display: flex;
    justify-content: space-between;
`;

const NavLinks = styled.div`
    display: flex;
    justify-content: center;
    width: 70%;   
`;

const Ul = styled.ul`
    width: 70%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const Li = styled.li`
    list-style: none;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    font-family: 'Nunito Sans', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: black;
    padding-bottom: 12px;
    padding-right: 10px;
    padding-left: 10px;
`;

const LogInContainer = styled.div`
    height: 48px;
    width: 108px;
    border: 2px solid #0066CC;
    border-radius: 2px;
    margin-right: 81px;
    margin-top: 8px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LogInLink = styled(NavLink)`
    font-size: 16px;
    line-height: 20px;
    color: #0066CC;
    text-decoration: none;
`;