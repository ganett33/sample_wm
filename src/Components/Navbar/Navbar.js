import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
import { animateScroll as scroll} from 'react-scroll';
import { authService } from '../../fbase';
import { 
    Nav, 
    NavbarBox, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem,
    NavLink1,
    NavLink2,
    NavBtn,
    NavBtnLink
 } from './NavbarElement';

const onLogOutClick = () => authService.signOut();    
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrolNav] = useState(false)

    const changeNav =  () => {
        if(window.scrollY >= 80) {
            setScrolNav(true)
        }else {
            setScrolNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {scroll.scrollToTop();}
    const toggleFooter = () => {scroll.scrollToBottom();}

    return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarBox>
                <NavLogo onClick={toggleHome}>Word A'Mouth</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLink1 onClick={toggleHome} to='/'>Home</NavLink1>
                    </NavItem>
                    <NavItem>
                        <NavLink1 onClick={toggleHome} to='/about'>About Us</NavLink1>
                    </NavItem>
                    <NavItem>
                        <NavLink2 onClick={toggleFooter}>Subscribe</NavLink2>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink onClick={onLogOutClick}>Log Out</NavBtnLink>
                </NavBtn>                
            </NavbarBox>
        </Nav>
    </>
    );
};

export default Navbar;
