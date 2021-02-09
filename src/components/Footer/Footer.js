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
          © 2021 HYANTA Korea Person All Rights Reserved.
        </FooterSubHeading>
        <FooterSubText>
          All rights reserved by JHO
        </FooterSubText>
      </FooterSubscription>
    </FooterContainer>
  );
};

export default Footer;
