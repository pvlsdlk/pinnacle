import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
    height 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: rgb(242,242,247);
    justify-self: flex-start;
    margin-right: 50px;
    cursor: pointer;
    font-size: 16px;
    display: flex;
    align-items: center;
    /*margin-left: 0px;*/
    font-weight: bolder;
    text-decoration: none;

    &:hover {
        color: #4169e1;
        transition: 0.2s ease-in-out;
    }
`

export const Img = styled.img`
    display: flex;
    justify-self: flex-start;
    top: 0;
    left: 0;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: ${({blockLinks}) => (blockLinks ? 'none' : 'flex')};
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 16px;
    font-weight: bolder;

    &.active {
        border-bottom: 3px solid #4169e1;
    }

    &:hover{
        color: #4169e1;
        transition: 0.2s ease-in-out;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 10px;
    background: #4169e1;
    white-space: nowrap;
    padding: 10px 23px;
    color: rgb(242,242,247);
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`