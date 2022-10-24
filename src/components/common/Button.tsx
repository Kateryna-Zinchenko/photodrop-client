import React from 'react';
import styled from 'styled-components';

type Props = {
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: any,
    ref?: any
}

const Button = ({
                    children,
                    onClick,
                    disabled,
                    ref,
                }: Props) => {
    return (
        <Wrapper onClick={onClick} disabled={disabled} ref={ref}>
            {children}
        </Wrapper>
    );
};

export default Button;

const Wrapper = styled.button<Props>`
  
  display: block;
  width: 100%;
  height: 50px;
  margin: 20px auto 0;
  padding: 14px 0;
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  text-align: center;
  color: #FFFFFF;
  background: #3300CC;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  &:disabled {
    background: rgba(51, 0, 204, 0.32);
  }
`;