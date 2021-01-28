import styled from "styled-components";
import background from "../../images/bg02.jpg";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "rgba(90,77,69)")};
  
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
    margin-top: -20px;
  }

  p:nth-child(3) {
    font-size: 20px;
  }
`;

export const CircleColumn = styled.div`
  padding-top: 130px;
 
  display: flex;
  flex-direction: row;
  justify-content: center;
  p:nth-child(1) {
    position: relative;
    font-size: 25px;
    font-weight: 700;
    
  }
`;

export const H2 = styled.div``;
