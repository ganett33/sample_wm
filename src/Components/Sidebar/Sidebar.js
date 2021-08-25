import React from 'react'
import { 
    SidebarBox, 
    CloseIcon, 
    Icon, 
    SideBtnWrap,
    SidebarMenu,
    SidebarLink,
    SidebarRoute, 
    SidebarWrapper
  } from './SidebarElements';

export const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarBox isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='town' onClick={toggle}>Town</SidebarLink>
                    <SidebarLink to='menu' onClick={toggle}>Menu</SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>About Us</SidebarLink>
                    <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>                
            </SidebarWrapper>
        </SidebarBox>
    );
}

export default Sidebar;
