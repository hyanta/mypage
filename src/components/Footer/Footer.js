import React from "react";
 
import {
  FooterContainer,
  FooterSubHeading,
  FooterSubscription,
    FooterSubText,
    Img,
  ImgWrapper
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
          <FooterSubscription>
              <ImgWrapper>
                <Img/>
              </ImgWrapper>

        <FooterSubHeading>
          © 2021 jjjjj Korea Corporation All Rights Reserved.
        </FooterSubHeading>
        <FooterSubText>
          All rights reserved by Dr. Ing. h.c. F. Porsche AG
        </FooterSubText>
      </FooterSubscription>
    </FooterContainer>
  );
};

export default Footer;
