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
  ButtonSecond,
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
    <InfoSec id="portfolio">
      <Container>
        <InfoRow>
          <InfoColumn>
            <TextWrapper switch2>
              <Heading >{headline}</Heading>
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
              <Heading  fontsize>
                {headtitle2}
              </Heading>
              <TopLine  middlesize height>
                {secondLine}
              </TopLine>
              <Subtitle smallsize >
                {subTitle2}
              </Subtitle>
            </TextWrapper>
            <Link to='/'>
              <ButtonSecond borderon>ADOBE</ButtonSecond>
            </Link>
          </InfoColumnTwo>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default SecondInfo;
