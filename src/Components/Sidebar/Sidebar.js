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
                    <SidebarLink to='/town' onClick={toggle}>Town</SidebarLink>
                    <SidebarLink to='/menu' onClick={toggle}>Menu</SidebarLink>
                    <SidebarLink to='/sign-in' onClick={toggle}>Sign In</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/sign-up'>Sign Up</SidebarRoute>
                </SideBtnWrap>                
            </SidebarWrapper>
        </SidebarBox>
    );
}

export default Sidebar;
