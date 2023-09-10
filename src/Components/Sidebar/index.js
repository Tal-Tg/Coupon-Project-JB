import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute  } from './SideBarElements'

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/HomePage"> HomePage </SidebarLink>
                <SidebarLink to="/HomePage"> Recommended </SidebarLink>
                <SidebarLink to="/Contect-us"> Contact-us </SidebarLink>
                <SidebarLink to="/ContectUs">  </SidebarLink>
                <SideBtnWrap>
                <SidebarRoute to="/My-PersonalCU"> Order Now </SidebarRoute>
            </SideBtnWrap>
            </SidebarMenu>

            
        </SidebarContainer>
    )
}

export default Sidebar;