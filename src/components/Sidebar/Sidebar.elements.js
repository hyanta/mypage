import { Link } from "react-router-dom";
import styled from "styled-components";

export const SideItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 140px;
  background-color: #4e3d53;
  flex-direction:column;
   
`;

export const ImgStart = styled.img`

`

export const SideLink = styled(Link )`
  list-style: none;
  text-decoration: none;
  color:white;
  letter-spacing: -1px;
  padding-top: 5px;

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
     a{
      text-align: center;
   list-style: none;
text-decoration: none;
    width: 160px;
    display:flex;
    justify-content: center;
    flex-direction:column;
    margin-bottom: 15px;
   color:#a9a9a9;
   font-weight: 500;
   font-size: 16px;
     }
  /* background-color: #444; */
   
  
`;

export const Img = styled.img`
 
  background-color: #555;
  border: 3px solid rgba(77,58,62);
   
  :hover{
    
  }
   

`;

export const LinkWrap = styled(Link )`
 text-align: center;
   list-style: none;
text-decoration: none;
    width: 160px;
    display:flex;
    justify-content: center;
    flex-direction:column;
    margin-bottom: 15px;
   color:#a9a9a9;
   font-weight: 500;
   font-size: 16px;
`

export const Util = styled.div`

`
export const IcoWrapper = styled.div`
text-align:center;
`

export const BottomLink = styled(Link)`
font-size: 35px;
 margin:7px;
 color:#a9a9a9;
 :hover{
  color:#f4f4f4;
 }
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
   border-radius: 5px;
    border: 1.5px solid rgba(169,169,169);
`

