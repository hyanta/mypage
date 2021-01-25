import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
  background-color: #fff;
`;

export const SideLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  background-color: #fff;
`;

export const Nav = styled.nav`
 display: flex;
  flex-direction: column;
  
  width: 100%;
  height: 85%;
  margin: 0 auto 40px;
  padding-top: 30px;
`;

export const ImgWrapper = styled.ul`
  width: 100%;
display:flex;
justify-content:center;

  background-color: #444;
   

   
`;

export const Img = styled.img`
 
  background-color: #555;
  border: 3px solid #3f43ba;


`;

export const LinkWrap = styled(Link)`
 text-align: center;
   list-style: none;
text-decoration: none;
    width: 160px;
    display:flex;
    justify-content: center;
    flex-direction:column;
    margin-bottom: 15px;

  
`

export const Util = styled.div`

`
export const IcoWrapper = styled.div`
text-align:center;
`

export const BottomLink = styled(Link)`
font-size: 35px;
 margin:7px;
 
`

export const Down = styled.div`
display:flex;
  flex-direction:column;
justify-content:center;
`

export const BottomWrapper = styled.div`
  display:flex;
  flex-direction:column;
  margin: auto auto 0px;
`

export const Img2 = styled.img`
   
`

