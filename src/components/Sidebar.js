import React, {useState} from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";



const Nav = styled.div`
  background: #000000;
  height: 70px;
 display: flex;
 justify-content: flex-start;
 align-items: center; 
`
const NavIcon = styled(Link)`
    position:absolute;
    top:0;
    left: 210px;
    background: #1d1f76;
    width:50px;
    height: 50px;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items:center;
`
const SidebarNav = styled.nav`
    background: #888;
    width: 210px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 10;
    left: ${({ sidebar }) => (sidebar ? '0' : '-210px')};
`
const SidebarWrap = styled.div`
    width: 100%;
`

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
        
    return (
         <>
        <Nav>
           
        </Nav>
        <SidebarNav sidebar={sidebar}>
                    <NavIcon to='#'>
                      <AiIcons.AiOutlineClose  onClick={showSidebar} />
                    </NavIcon>
                <SidebarWrap>
                   
              </SidebarWrap>
        </SidebarNav>
</>
    )
};

export default Sidebar;
