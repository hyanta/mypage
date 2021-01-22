import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
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

width:100%;
height: 750px;
   overflow: hidden;

`;

export const Img = styled.div`

  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://nxm-mt.akamaized.net/Contents/kartrush.nexon.com/event_201230/images_6A5854DAAD751AB5/bg2.jpg' ) 
  ; 
  background-repeat:no-repeat;
  background-position-x: center;
  background-position-y: top;
`;

export const Test = styled.div`
position: absolute;
z-index:44;
`