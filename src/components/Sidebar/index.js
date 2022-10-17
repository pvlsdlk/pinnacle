import React from 'react';
import {
  SidebarContainer,
  Icon,
  ClosedIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideButtonWrap,
  SidebarRouter
} from './SideEl';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <ClosedIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
             <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
             <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          </SidebarMenu>
          <SideButtonWrap>
            <SidebarRouter to="/contact">Contact Us</SidebarRouter>
          </SideButtonWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;