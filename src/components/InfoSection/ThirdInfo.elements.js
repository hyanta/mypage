import styled from "styled-components";
import background from "../../images/bg02.jpg";

export const InfoSec = styled.div`
width:100%;
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "rgba(90,77,69)")};
  @media screen and (max-width: 768px) {
                padding: 30px 0;
          
                
  }
`;

export const InfoRow = styled.div`
width:100%;
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  @media screen and (max-width: 768px) {
      margin:0;
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

export const Bg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 750px;
  overflow: hidden;

  @media screen and (max-width: 768px){
    height: 720px;
  }
`;

export const Img = styled.div`
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("${background}")
    /* background-image: url('https://nxm-mt.akamaized.net/Contents/kartrush.nexon.com/event_201230/images_6A5854DAAD751AB5/bg2.jpg' )  */;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;
`;

export const TextWrapper = styled.div`
  position: absolute;
  z-index: 44;
  text-align: center;
 
  p:nth-child(1) {
    position: relative;
    font-size: 60px;
    font-weight: 500;
    padding-top: 30px;
 
  }

  p:nth-child(2) {
    font-weight: 600;
    font-size: 70px;
    margin-top: 0px;
  }

  p:nth-child(3) {
    font-size: 20px;
  }

  @media screen and (max-width: 768px){
    p:nth-child(1) {
     
    font-size: 30px;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  p:nth-child(2){
    font-size: 60px;
    line-height: 61px;
  }
  p:nth-child(3){
    font-size: 14px;
    padding: 14px 40px;
  }
     
   
  }

`;

export const CircleColumn = styled.div`
  padding-top: 130px;
 
  display: flex;
  flex-direction: row;
  justify-content: center;
         @media screen and (max-width: 768px) {
          flex-flow: wrap;
          display:flex;
          justify-content: center;
          padding-top: 60px;
              div{
                a:nth-child(1){
                    /* width:100%;
                    height:100%; */
                }
              };
              div:nth-child(2){
                   
                
             }   
      }

  p:nth-child(1) {
    position: relative;
    font-size: 25px;
    font-weight: 700;
      
  }
`;

export const H2 = styled.div``;
