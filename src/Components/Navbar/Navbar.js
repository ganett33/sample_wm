import React from 'react';
import {FaBars} from 'react-icons/fa';
import { 
    Nav, 
    NavbarBox, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
 } from './NavbarElement';


const Navbar = ({ toggle }) => {
    return (
    <>
        <Nav>
            <NavbarBox>
                <NavLogo to='/'>Word A'Mouth</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/town' onClick={toggle}>Town</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/menu' onClick={toggle}>Menu</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/about' onClick={toggle}>About Us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/signup' onClick={toggle}>Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>                
            </NavbarBox>
        </Nav>
    </>
    );
};

export default Navbar;
