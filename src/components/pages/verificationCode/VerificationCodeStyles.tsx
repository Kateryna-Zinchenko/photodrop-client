import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 106px auto 0;
  padding: 0 15px;
  max-width: 450px;
`;

export const Title = styled.div`
  font-family: 'termina';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 17px;
  text-align: center;
  color: #262626;
`;

export const Text = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 13px;
  color: #262626;
  margin: 14px 0 0;
  
  & span {
    font-weight: 600;
  }
`;

export const ResendButton = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 13px;
  color: #3300CC;
  margin: 20px 0 0;
  cursor: pointer;
`;