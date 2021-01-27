import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStyles";

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";

const InfoSection = ({
  topLine,
  start,
  img,
  alt,
  headline,
  description,
  buttonLabel,
  lightText,
  lightTextDesc,
}) => {
  return (
    <InfoSec id='home'>
      <Container>
        <InfoRow>
          <InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </InfoColumn>

          <InfoColumn>
            <TextWrapper>
              <TopLine lightTopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
              <Link to='/'>
                <Button borderon primary big>{buttonLabel}</Button>
              </Link>
            </TextWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default InfoSection;
