import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
 
const NavIcon = styled(Link)`
  position: absolute;
  top: 0;
  left: 210px;
  background: #1d1f76;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SidebarNav = styled.nav`
  background: #888;
  width: 210px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
  left: ${({ sidebar }) => (sidebar ? "0" : "-210px")};
`;
const SidebarWrap = styled.div`
  width: 100%;
`;

const Bgblack = styled.span`
     position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index:-1;
     
`

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      
      <SidebarNav sidebar={sidebar}>
        <NavIcon to='#'>
          {sidebar && <AiIcons.AiOutlineClose onClick={showSidebar} /> ? (
            
                      <>
                          <AiIcons.AiOutlineClose onClick={showSidebar} />
                          <Bgblack></Bgblack>
                          </>
          ) : (              
                          <FaIcons.FaBars onClick={showSidebar} />
                       
                          
          )}
        </NavIcon>
        <SidebarWrap></SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
