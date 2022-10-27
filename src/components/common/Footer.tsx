import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <div className='footer'>
            <Wrapper>
                <Inner>
                    <div>
                        <H1>PhotoDrop is brought to you by</H1>
                        <Logo src='/assets/images/frameology-logo.svg'/>
                        <Text>Our mission is to help people connect with their memories. If you framing some of the
                            photos
                            from
                            your experience, please consider using Frameology. It supports the photographers and makes
                            PhotoDrop possible.
                        </Text>
                        <Button>Frame a photo</Button>
                        <ButtonOrder>Order photos</ButtonOrder>
                    </div>
                    <ContentWrapper375>
                        <Text2>Questions? Get in touch - <a href='mailto:hello@photodrop.me'>hello@photodrop.me</a></Text2>
                        <Logo2 src='/assets/images/climate-neutral-logo.svg'/>
                        <Year>© 2022 FOM Online Inc</Year>
                        <Terms>Terms</Terms>
                        <Privacy>Privacy Party</Privacy>
                    </ContentWrapper375>
                    <ContentWrapper1440>
                        <Text2>Questions? Get in touch - <a href='mailto:hello@photodrop.me'>hello@photodrop.me</a></Text2>
                        <Logo2 src='/assets/images/climate-neutral-logo.svg'/>
                        <Terms1440>Terms of services</Terms1440>
                        <Privacy>Privacy Party</Privacy>
                    </ContentWrapper1440>
                    <Year1440>© 2022 FOM Online Inc</Year1440>
                </Inner>
            </Wrapper>
        </div>
    );
};

export default Footer;

export const Wrapper = styled.div`
  padding: 60px 15px 134px 14px;
  background: #262626;

  @media (min-width: 1440px) {
    padding: 60px 324px 40px 325px;
  }
`;

export const Inner = styled.div`
  max-width: 791px;
  margin: 0 auto;

  @media (min-width: 1440px) {
    display: flex;
    flex-wrap: wrap;
    
    & > div:first-child {
      width: 420px;
    }
  }
`;

export const H1 = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #FFFFFF;

  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 17px;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 25px;
  margin: 15px 0 0;

  @media (min-width: 1440px) {
    width: 185px;
    height: 31px;
    margin: 19px 0 0;
  }
`;

export const Text = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #EEEEEE;
  margin: 23px 0 0;

  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 21px;
    margin: 21px 0 0;
  }
`;

export const Button = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
  width: 345px;
  height: 50px;
  border: 1px solid #FFFFFF;
  border-radius: 50px;
  display: block;
  margin: 39px 0 0;
  padding: 14px 20px 13px 20px;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const ButtonOrder = styled(Button)`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    font-size: 22px;
    line-height: 15px;
    width: 300px;
    height: 50px;
    padding: 17px 0 18px 0;
    margin: 29px 0 0;
  }
`;

export const ContentWrapper375 = styled.div`
  @media (min-width: 1440px) {
    display: none;
  }
`;

export const ContentWrapper1440 = styled.div`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    margin: 0 0 0 60px;
  }
`;

export const Text2 = styled(Text)`
  line-height: 13px;
  margin: 60px 0 0;

  & a {
    color: #EEEEEE;
    cursor: pointer;
  }

  @media (min-width: 1440px) {
    margin: 0;
  }
`;

export const Logo2 = styled.img`
  width: 100px;
  margin: 30px 0 0;

  @media (min-width: 1440px) {
    margin: 20px 0 0;
  }
`;

export const Year = styled(Text)`
  line-height: 13px;
  margin: 30px 0 0;

  @media (min-width: 1440px) {
    margin: 0;
  }
`;

export const Year1440 = styled(Year)`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    margin: 60px 0 0;
  }
`;

export const Terms = styled(Text)`
  line-height: 11px;
  margin: 19px 0 0;
`;

export const Terms1440 = styled(Terms)`
  margin: 31px 0 19px;
`;

export const Privacy = styled(Text)`
  line-height: 12px;
  margin: 20px 0 0;

  @media (min-width: 1440px) {
    margin: 0;
  }
`;