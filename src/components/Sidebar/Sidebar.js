import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideItem, SideLink, Nav, ImgWrapper, Img, LinkWrap, Util, Down, IcoWrapper, BottomLink, BottomWrapper, Img2, ImgStart, SpeechBubble,} from './Sidebar.elements'
import Home from "../../pages/HomePage/Home";
 
const NavIcon = styled(Link)`
  position: absolute;
  top: 0;
  left: 210px;
  background: #4e3d53;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color:rgba(196,151,112);
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



const Sidebar = ({alt,img2,img3,img1A,img1B,img1C,img1D,img4,link1,link0,link5,link6,speechText01,speechText02,speechText03,speechText04}) => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      
      <SidebarNav sidebar={sidebar}>
        <NavIcon to='#'>
          {sidebar && <AiIcons.AiOutlineClose onClick={showSidebar} /> ? (
            
                      <>
                          <AiIcons.AiOutlineClose onClick={showSidebar} />
                          <Bgblack onClick={showSidebar}></Bgblack>
                          </>
          ) : (              
                          <FaIcons.FaBars onClick={showSidebar} />
                       
                          
          )}
        </NavIcon>
        <SidebarWrap>
          
          <SideItem>
            <ImgStart  src={img3} alt={alt}/>
            <SideLink to='/'>  메인으로 가기▶ </SideLink>

            </SideItem>
          <Nav>
          
            <ImgWrapper  >
            <SpeechBubble>
              <div>
                <p>{speechText01}</p> 
                </div>
            </SpeechBubble>
              <a href={link0} >
                <Img src={img1A} alt={alt} />
                <p>PRO SHOP</p>
                </a>
            </ImgWrapper  >
               
                <ImgWrapper  >
                <SpeechBubble>
              <div>
                <p>{speechText02}</p> 
                </div>
            </SpeechBubble>
                <a href={link1}>
                <Img src={img1B} alt={alt} />
                  <p>Slack Clone</p>
                  </a>
                
            </ImgWrapper  >
            <ImgWrapper  >
            <SpeechBubble>
              <div>
                <p>{speechText03}</p> 
                </div>
            </SpeechBubble>
              <LinkWrap to={'/view'}>
                <Img src={img1C} alt={alt} />
                <p>Design-Portfolio</p>
                </LinkWrap>
            </ImgWrapper  >
            
            <ImgWrapper  >
                <SpeechBubble>
              <div>
                <p>{speechText04}</p> 
                </div>
            </SpeechBubble>
                <a href={link6}>
                <Img src={img1D} alt={alt} />
                  <p>Neflex Clone</p>
                  </a>
                
            </ImgWrapper  >


          <BottomWrapper>
            <Util>
            <IcoWrapper>
                <BottomLink>
                  <AiIcons.AiOutlineHome />
                   
                  </BottomLink>
                  {/* <BottomLink>
                  
                  <AiIcons.AiOutlineYoutube />
                  
                  </BottomLink> */}
                
                  <a className='bottomlink' href={link5} >
                   
                      <AiIcons.AiFillGithub />
                   
                    </a>
                  
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
                    <Img2  src={img4} alt=''/>
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
