import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <div>
            <LogoWrapper>
                <ArrowBack onClick={() => window.history.back()}/>
                <Logo src='/assets/images/logo.png'/>
            </LogoWrapper>
        </div>
    );
};

export default Header;


export const LogoWrapper = styled.div`
  border-bottom: 1px solid #F1F0EC;
  padding: 20px 0 19px;
  position: relative;

  @media (min-width: 1440px) {
    padding: 19px 0 19px;
  }
`;

export const ArrowBack = styled.div`
  background: url("/assets/icons/arrow-left.png") no-repeat;
  background-size: contain;
  width: 8px;
  height: 16px;
  position: absolute;
  left: 15px;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 125px;
  height: 16px;
  margin: 0 auto;
  
  @media (min-width: 1440px) {
    width: 179px;
    height: 22px;
  }
`;