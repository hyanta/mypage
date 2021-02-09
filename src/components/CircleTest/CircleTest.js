import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { animateScroll as scroll } from "react-scroll";

const CircleWrapper = styled.div`
   display:flex;
   justify-content:center;
   flex-direction:column;
   padding: 0 30px;
   @media screen and (max-width: 768px) {
     padding:0;
     align-items: center;
   }
`;

const CircleIn = styled(Link)`
  width: 160px;
  height: 160px;
  position: relative;
  @media screen and (max-width: 768px) {
     width:60%;
     height:60%;
    
   }
`;

const HoverBox = styled.div`
  opacity: ${({ scrollNav }) => (scrollNav ? " 1 " : "0")};
  transition: 0.3s;
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgba(246, 27, 237, 0.8);

  @media screen and (max-width: 768px){
    background-color:transparent;
  }

  :hover {
    transform: translate(0, -30px);
         
    span {
      :nth-child(1) {
        transform: translate(0, 0) rotate(-15deg);
        opacity: 1;
       
        
      }
      :nth-child(2) {
        transform: translate(0, 0) rotate(-15deg);
        opacity: 1;
      }
    }
  }
`;

const Sspan = styled.span`
  display: block;
  width: 96px;
  height: 30px;
  background-color: #0c0c0c;
  line-height: 30px;
  text-align: center;
  color: #fff;
  font-weight: 500;
  font-size: 14px;

  

  :hover {
    opacity: 1;
  }
  
  :nth-child(1) {
    position: absolute;
    right: -20px;
    bottom: 13%;
    transform: translate(20px, 20px) rotate(-15deg);
    transition: 0.5s;
    transition-delay: 0.1s;
    opacity: 0;
  }

  :nth-child(2) {
    position: absolute;
    left: -20px;
    top: 45%;
    transform: translate(-20px, -20px) rotate(-15deg);
    transition: 0.5s;
    transition-delay: 0.1s;
    opacity: 0;
  }
`;

const CircleImageWrap = styled.div`
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 20px 20px 24px rgba(0, 0, 0, 0.5);
  transition: 0.6s;
`;

const Image = styled.img`
  display: block;
  width: 100%;
`;

const TextSmallWrapper = styled.div`
  padding:10px 0;
  @media screen and (max-width: 768px){

    p:nth-child(1){
                  font-size:23px;
                  padding-top: 5px;
       }
  }
     
`

const CircleTest = ({ img1,smalltext,linetext }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 1600) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <CircleWrapper >
      <CircleIn to='/'>
        <HoverBox scrollNav={scrollNav} onClick={toggleHome}>
          <Sspan>
            <span>{linetext}</span>
          </Sspan>
          <Sspan>
            <span>{linetext}</span>
          </Sspan>
          <CircleImageWrap>
            <Image
              src={img1}
              alt='none'
            />
          </CircleImageWrap>
        </HoverBox>  
      </CircleIn>
      <TextSmallWrapper>
        <p>{smalltext}</p>
        </TextSmallWrapper>
    </CircleWrapper>
  );
};

export default CircleTest;
