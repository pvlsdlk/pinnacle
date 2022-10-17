import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import imgLogo from '../../images/logo_1024.png';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink,
    Img
} from './NavEl';

export const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
         <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <Img src={imgLogo}></Img>
                <NavLogo to="/" onClick={toggleHome}>Home</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                    </NavItem>
                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/contact">Contact Us</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
         </Nav>
        </>
    );
};

export default Navbar;