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
                        <NavLinks to='/town' >Town</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/menu' >Menu</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
                </NavBtn>                
            </NavbarBox>
        </Nav>
    </>
    );
};

export default Navbar;
