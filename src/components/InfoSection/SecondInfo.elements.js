import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "rgba(47,42,36)")};
         @media screen and (max-width: 780px) {
          padding: 70px 0;
               
    }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};

  @media screen and (max-width: 780px) {
         
               
    }
`;

export const InfoColumn = styled.div`
  max-width: 100%;
  flex-basis: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    
  }
`;

export const InfoColumnTwo = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display:grid;
    justify-content: center;
    padding:0;
       
  }
`;

export const TextWrapper = styled.div`
  text-align: ${({ switch2 }) => (switch2 ? "center" : "")};
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 25px;

  @media screen and (max-width: 768px) {
     
    text-align:center;
        .headtitle2{
          font-size:30px;
          letter-spacing: 2.1px;
        }
        .secondLine{
          font-size:20px;
          padding: 0 5px ;
          text-align:left;
        }
        .subtitle2{
          text-align: left;
          font-size: 13px;
          margin:0px;
        }
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) =>
    lightTopLine ? "#a9b3c1" : "rgba(196,151,112)"};
  font-size: ${({ middlesize }) => (middlesize ? "20px" : "40px")};
  line-height: ${({ height }) => (height ? "25px" : "20px")};
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 35px;
  @media screen and (max-width: 768px) {
     font-size: 30px;
         
        
  }
`;

export const Heading = styled.h1`

  margin-bottom: 18px;
  font-size: ${({ fontsize }) => (fontsize ? "40px " : "80px")};
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "rgba(196,151,112)")};

  @media screen and (max-width: 768px) {
    text-align: left;
     font-size: 60px;
         
        
  }
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: ${({ smallsize }) => (smallsize ? "20px " : "24px")};
  line-height: 24px;
  color: ${({ lightTextDesc }) =>
  lightTextDesc ? "#a9b3c1" : "rgba(176,123,79)"};
    @media screen and (max-width: 768px) {
     font-size: 20px;
         
        
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
  
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const ButtonSecond = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "transparent" : "none")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "30px 170px" : "10px 20px")};
  color: rgba(181, 135, 75);
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  height: 60px;
  cursor: pointer;
  border: ${({ borderon }) =>
    borderon ? "2px solid rgba(181, 135, 75)" : "none"};

  &:hover {
    transition: all 0.3s ease-out;
    background: rgba(73, 50, 32);
    background-color: ${({ primary }) =>
      primary ? "#0467FB" : "rgba(73,50,32)"};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
