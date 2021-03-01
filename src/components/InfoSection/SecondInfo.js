import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStyles";
import Dots from "../SliderImage/Dots";
import Slider from "../SliderImage/Slider";
import SliderContent from "../SliderImage/SliderContent";
import {
  Heading,
  InfoColumn,
  InfoRow,
  InfoSec,
  Subtitle,
  TextWrapper,
  TopLine,
  
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
}


) => {
  const [activeIndex, setActiveIndex] = useState(0)

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
            <div className='slider-container'>
                <SliderContent activeIndex={activeIndex} />      <Dots
              activeIndex={activeIndex}
              onclick={(activeIndex) => setActiveIndex(activeIndex)}
              />
        </div>
            </ImgWrapper>
          </InfoColumnTwo>
          <InfoColumnTwo>
            
            <TextWrapper>
              <Heading  className='headtitle2'  fontsize>
                {headtitle2}
              </Heading>
              <TopLine  className='secondLine'  middlesize height>
                {secondLine}
              </TopLine>
              <Subtitle className='subtitle2' smallsize >
                {subTitle2}
              </Subtitle>
            </TextWrapper>
            {/* <Link to='/'>
            
              <ButtonSecond borderon
              >ADOBE</ButtonSecond>
            </Link> */}
              <Dots
              activeIndex={activeIndex}
              onclick={(activeIndex) => setActiveIndex(activeIndex)}
              />
          </InfoColumnTwo>
        </InfoRow>
      </Container>
    </InfoSec>
  );
};

export default SecondInfo;
