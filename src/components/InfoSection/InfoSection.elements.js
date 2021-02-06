import styled from "styled-components";

export const InfoSec = styled.div`
  color: #000;
  padding: 160px 0;
  /* background: ${({ lightBg }) => (lightBg ? "#000" : "#101522")}; */
  @media screen and (max-width: 768px) {
               padding: 70px 0;
               
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
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

export const TextWrapper = styled.div`
  text-align: center;
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
         h1{
             font-size: 75px;
             padding-right: 10px;
             padding-left: 10px;       
         }
         p{
              font-size: 14px ;
              padding-right: 10px;
             padding-left: 10px;
                 }   
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#f2f2f2" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 120px;
  line-height: 1.1;
  font-weight: 700;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
        @media screen and (max-width: 768px) {
             
                
        }
     
`;

export const Subtitle = styled.p`
  margin: 0 auto;
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 24px;
  line-height: 1.7;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#f2f2f2" : "#1c2237")};

`;

export const Img = styled.img`
  padding-right: 0;
  padding-bottom: 10%;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;
