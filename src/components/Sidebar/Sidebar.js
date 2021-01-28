import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideItem, SideLink, Nav, ImgWrapper, Img, LinkWrap, Util, Down, IcoWrapper, BottomLink, BottomWrapper, Img2, ImgStart,} from './Sidebar.elements'
 
const NavIcon = styled(Link)`
  position: absolute;
  top: 0;
  left: 210px;
  background: #bd2e2a;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#ecb02e;
`;
const SidebarNav = styled.nav`
  background: rgba(31,28,24,0.8);
  width: 210px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
  left: ${({ sidebar }) => (sidebar ? "0" : "-210px")};
  transition: left 300ms ease;
`;
const SidebarWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
`;

const Bgblack = styled.span`
    
    @media screen and (max-width: 960px) {
      position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index:-1;
  }
`



const Sidebar = ({img,alt,img2,img3}) => {
  const [sidebar, setSidebar] = useState(true);

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
        <SidebarWrap>
          
          <SideItem>
            <ImgStart src={img3} alt={alt}/>
            <SideLink> 다른 사이트 바로가기▶ </SideLink>

            </SideItem>
         <Nav>
            <ImgWrapper  >
              <LinkWrap>
                <Img src={img} alt={alt} />
                <p>PRO SHOP</p>
                </LinkWrap>
                </ImgWrapper  >
                <ImgWrapper  >
              <LinkWrap>
                <Img src={img} alt={alt} />
                <p>Styled-Components</p>
                </LinkWrap>
            </ImgWrapper  >
            <ImgWrapper  >
              <LinkWrap>
                <Img src={img} alt={alt} />
                <p>글씨를 써주세요</p>
                </LinkWrap>
                </ImgWrapper  >
          <BottomWrapper>
            <Util>
            <IcoWrapper>
                <BottomLink>
                  <AiIcons.AiOutlineHome />
                   
                  </BottomLink>
                  <BottomLink>
                  
                  <AiIcons.AiOutlineYoutube />
                  
                  </BottomLink>
                  <BottomLink>
                  <AiIcons.AiFillGithub />
                    </BottomLink>
               </IcoWrapper>
              </Util>
              
              <Down>
                <ImgWrapper>
                  <LinkWrap>
                    <Img2 src={img2} alt=''/>
                    </LinkWrap>
                </ImgWrapper>
                <ImgWrapper>
                  <LinkWrap>
                    <Img2  src={img2} alt=''/>
                    </LinkWrap>
                </ImgWrapper>
              
              </Down>
              </BottomWrapper>
          </Nav>  
          
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
