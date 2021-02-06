import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
    }

`;


export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 960px) {
     /* padding-right:-50px; */
  }

  @media screen and (max-width: 765px) {
     /* padding-right:-50px; */
  }
`;


export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? 'transparent' : '#0467FB')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '30px 170px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border:  2px solid #F0F;;
  cursor: pointer;
  border:    ${({ borderon }) => ( borderon ? '2px solid #fff' : 'none')};

 
  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
  @media screen and (max-width: 780px) {
    width: 100%;
     
    padding: 30px 20px;
  }
`;




export default GlobalStyle;