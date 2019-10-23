import React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import image from '../assets/QR Bunny.png'

const landingHandler = () => {
    window.location.href = ''
}

const Navigation = (props) => {
console.log('Navigation props', props)

    return (
        <div>
                <NavContainer className='navigation-container'>
                    <Nav>
                        <div>
                        <NavLink id='logo' to='/'>
                            <Logo src={ image } alt='gigapet logo' />
                        </NavLink>
                        </div>
                        <div className='nav-links'>
                            <Ul>
                                <Li>
                                    <Link onClick={landingHandler}>Discover</Link> {/* error, Link requires "to" property */}
                                </Li>
                                <Li>
                                    <NavLink to='/login'>Login</NavLink>
                                </Li>
                                <Li>
                                    <NavLink to='/'>Logout</NavLink>
                                </Li>
                            </Ul>
                        </div>
                    </Nav>
                </NavContainer>
        </div>
        
    )
        
    
}

export default Navigation;

const NavContainer = styled.div`
    // display: flex;
    // justify-content: space-between;
`;

const Logo = styled.img`
    width: 70px;
    height: auto;

`;

const Nav = styled.nav`
    width: 100%;
    z-index: 10;
    top: 0px;
    display: flex;
    justify-content: space-between;
`;

const Ul = styled.ul`
    width: 40%;
    display: flex;
    justify-content: space-between;

`;

const Li = styled.li`
    list-style: none;
`;