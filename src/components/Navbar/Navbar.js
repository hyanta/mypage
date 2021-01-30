import React,{useState, useEffect} from "react";
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
  const [background, setScrollNav] = useState();

  const changeNav = () => {
    if (window.scrollY >= 90) {
      setScrollNav();
    } else {
      setScrollNav('none');
    }
  };

  // const toggleHome = () => {
  //   scroll.scrollToTop();
  // };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);



  return (
    <Nav style={{background}} className='navbar' id='navbar'>
      <NavbarContainer>
        <NavMenu >
          <NavItem >
            <NavLinks to='home' smooth='true' spy={true}    > 
             <p> HOME</p>
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='portfolio' smooth='true' spy={true} >
              포트폴리오
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='contact' smooth='true' spy={true} >
              콘텍트
            </NavLinks>
          </NavItem>
          <NavItem >
            <Quick  >
              <NavLinks paddingcontrol black to='home' smooth='true' >
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
