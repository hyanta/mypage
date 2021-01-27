import React from "react";
import { Container } from "../../globalStyles";
import CircleTest from "../CircleTest/CircleTest";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  ImgWrapper,
  Img,
TextWrapper,
  H2,
  CircleColumn,
} from "./ThirdInfo.elements";

const ThirdInfo = ({ img1, img2, img3, img4 }) => {
  return (
    <InfoSec id='contact'>
      <Container style={{position:'relative'}}>
        <InfoRow>
          <InfoColumn>
              
            <TextWrapper>
           
              <p>원하는 일을 찾다</p>
              <p>FULL STACK</p>
              <p>피부가 끓는 뭇 불어 동력은 같이, 피는 스며들어 봄바람이다. 얼음 할지니, 뛰노는 가장 밥을 것이다.</p>
            
            <CircleColumn>
                <CircleTest img1={img1}/> <CircleTest img1={img2}/> <CircleTest img1={img3}/> <CircleTest img1={img4}/>
                </CircleColumn>
            </TextWrapper>
            <ImgWrapper>
              <Img />
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default ThirdInfo;
