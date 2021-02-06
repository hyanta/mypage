import styled from 'styled-components';


export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px){
    padding: 1rem 0 2rem 0;
  }
`;


export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;


export const FooterSubHeading = styled.p`
 
  margin-bottom: 24px;
  font-size: 24px;
  @media screen and (max-width: 768px){
     font-size:16px;
  }
`;


export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
  @media screen and (max-width: 768px){
     font-size:14px;
  }
`;


export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

