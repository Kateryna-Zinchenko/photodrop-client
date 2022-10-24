import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <div className='footer'>
            <Wrapper>
                <Inner>
                    <H1>PhotoDrop is brought to you by</H1>
                    <Logo src='/assets/images/frameology-logo.svg'/>
                    <Text>Our mission is to help people connect with their memories. If you framing some of the photos
                        from
                        your experience, please consider using Frameology. It supports the photographers and makes
                        PhotoDrop possible.
                    </Text>
                    <Button>Frame a photo</Button>
                    <Text2>Questions? Get in touch - <a href='mailto:hello@photodrop.me'>hello@photodrop.me</a></Text2>
                    <Logo2 src='/assets/images/climate-neutral-logo.svg'/>
                    <Year>© 2022 FOM Online Inc</Year>
                    <Terms>Terms</Terms>
                    <Privacy>Privacy Party</Privacy>
                </Inner>
            </Wrapper>
        </div>
    );
};

export default Footer;

export const Wrapper = styled.div`
  padding: 60px 15px 134px 14px;
  background: #262626;
`;

export const Inner = styled.div`
  max-width: 450px;
  margin: 0 auto;
`;

export const H1 = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 13px;
  letter-spacing: -0.02em;
  color: #FFFFFF;
`;

export const Logo = styled.img`
  width: 150px;
  height: 25px;
  margin: 15px 0 0;
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
  margin: 39px auto 0;
  padding: 14px 20px 13px 20px;
`;

export const Text2 = styled(Text)`
  line-height: 13px;
  margin: 60px 0 0;

  & a {
    color: #EEEEEE;
    cursor: pointer;
  }
`;

export const Logo2 = styled.img`
  width: 100px;
  margin: 30px 0 0;
`;

export const Year = styled(Text)`
  line-height: 13px;
  margin: 30px 0 0;
`;

export const Terms = styled(Text)`
  line-height: 11px;
  margin: 19px 0 0;
`;

export const Privacy = styled(Text)`
  line-height: 12px;
  margin: 20px 0 0;
`;