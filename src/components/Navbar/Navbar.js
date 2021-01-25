import React from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
  Quick,
} from "./Navbar.elements";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavMenu>
          <NavItem>
            <NavLinks to='/'>HOME</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='portfolio'>포트폴리오</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/'>콘텍트</NavLinks>
          </NavItem>
          <NavItem>
            <Quick>
              <NavLinks paddingcontrol black to='/'>
                ^<br />
                TOP
              </NavLinks>
            </Quick>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
