import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStyles";
import {
  Heading,
  InfoColumn,
  InfoRow,
  InfoSec,
  Subtitle,
  TextWrapper,
  TopLine,
  Img,
  ImgWrapper,
  InfoColumnTwo,
} from "./SecondInfo.elements";

const SecondInfo = ({
  topLine,
  headline,
  description,
  img,
  alt,
  secondLine,
  headtitle2,
  subTitle2,
}) => {
  return (
    <InfoSec>
      <Container>
        <InfoRow>
          <InfoColumn>
            <TextWrapper switch2>
              <Heading lightText>{headline}</Heading>
              <TopLine>{topLine}</TopLine>
              
              <Subtitle>{description}</Subtitle>
            </TextWrapper>
          </InfoColumn>
          <InfoColumnTwo>
            <ImgWrapper start>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoColumnTwo>
          <InfoColumnTwo>
            <TextWrapper>
              <Heading lightText fontsize>{headtitle2}</Heading>
              <TopLine lightTopLine middlesize height>{secondLine}</TopLine>
              <Subtitle smallsize lightTextDesc>{subTitle2}</Subtitle>
            </TextWrapper>
            <Link to='/'>
              <Button>어디로 이동하기</Button>
            </Link>
          </InfoColumnTwo>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default SecondInfo;
