import React from 'react'
import { animateScroll as scroll} from 'react-scroll';
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
import { authService } from '../../fbase';

  const onLogOutClick = () => authService.signOut();
  const toggleFooter = () => {scroll.scrollToBottom();}      
export const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarBox isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to='/places' onClick={toggle}>Places</SidebarLink>
                    <SidebarLink  onClick={toggleFooter}>Subscribe</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={onLogOutClick}>Log Out</SidebarRoute>
                </SideBtnWrap>                
            </SidebarWrapper>
        </SidebarBox>
    );
}

export default Sidebar;
