import React from "react";
import { Container } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  ImgWrapper,
  Img,
  Test,
} from "./ThirdInfo.elements";

const ThirdInfo = ({ img, alt }) => {
  return (
    <InfoSec>
      <Container>
        <InfoRow>
                  <InfoColumn>
                      <Test>sfsfsssfsf</Test>
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
