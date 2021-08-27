import React, {useEffect, useState} from 'react';
import {FaBars} from 'react-icons/fa';
// import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll} from 'react-scroll';
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
    const [scrollNav, setScrolNav] = useState(false)

    const changeNav =  () => {
        if(window.scrollY >=80) {
            setScrolNav(true)
        }else {
            setScrolNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
    <>
    {/* <IconContext.Provider value={{color: 'white'}}> */}
        <Nav scrollNav={scrollNav}>
            <NavbarBox>
                <NavLogo to='/' onClick={toggleHome}>Word A'Mouth</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to='/town'>Town</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/menu'>Menu</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/sign-in'>Sign In</NavLinks>
                    </NavItem> 
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/sign-up'>Sign Up</NavBtnLink>
                </NavBtn>                
            </NavbarBox>
        </Nav>
        {/* </IconContext.Provider> */}
    </>
    );
};

export default Navbar;
