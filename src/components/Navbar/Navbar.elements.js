// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../globalStyles";
import {Link} from 'react-scroll'

export const Nav = styled.nav`

  background: rgba(77,58,62, 0.9);
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 3;
  transition: 0.5s;
  
  @media screen and (max-width: 960px) {
    height: 50px;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 70px;

 @media screen and (max-width: 960px) {
    padding:0px;
  }

  ${Container}
 
  
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0 auto;
    .active{
      color:#fff2d0;
    }

      li:nth-child(4){
         border:none;
       }
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    bottom: 0;
    position: fixed;
    top: auto;
    height: 100px;
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
    
    padding-right: 50px;
    padding-left: 50px;
  }

  @media screen and (max-width: 765px){
    padding:0 0;
    
  }
`;

export const NavItem = styled.li`
  border-bottom: 4px solid transparent;
  padding: 0 10px;
  
  &:hover {
    height: 70px;
    border-bottom: 4px solid #fff3cd;
  }


  @media screen and (max-width: 960px) {
    height: 100px;
    width: 100%;
    border-bottom: 0px;
    &:hover {
      height: 100px;
      border: none;
      border-bottom: 0px;
    }
  }
  @media screen and (max-width: 765px){
    padding:0;

  }

`;

export const NavLinks = styled(Link)`
  cursor: pointer;
  color: ${({black}) =>(black ? '#fff2d0' : ' #fff ')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${({paddingcontrol}) =>(paddingcontrol ? '0' : ' 0.5rem 1rem ')};
  height: 100%;
  font-weight: 700;
  font-size: 24px;
  justify-content:center;
    
  &:hover {
    color: #fff2d0;
    transition: all 0.3s ease;
  
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    justify-content: center;
    width: 100%;
    display: flex;
    font-size: 14px;
    padding:0px;
    &:hover {
      color: #fff;
      transition: all 0.3s ease;
    }
  }
`;

export const Quick = styled.div`
   position: fixed;
    right: 10px;
    bottom: 10px;
    width: 130px;
    height: 130px;
  background-color:rgba(77,58,62);
 border-radius:10px;
  &:hover{
    color: #fff;
   
  }

  @media screen and (max-width: 960px) {
    bottom:0;
    width: 100%;
    height: 100px;
    position:relative;
    border-radius:0px;
    border-bottom: 0px;
    
    &:hover {
       
     
      border: none;
      border-bottom: 0px;
    }
  }`;
 