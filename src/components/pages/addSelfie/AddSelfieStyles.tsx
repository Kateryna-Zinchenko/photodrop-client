import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 72px auto 0;
  padding: 0 20px;
`;

export const Title = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 17px;
  text-align: center;
  color: #262626;
`;

export const Caption = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: #262626;
  margin: 14px auto 0;
`;

export const SelfieWrapper = styled.div`
  margin: 30px auto 0;
  position: relative;
  width: fit-content;
`;

export const Selfie = styled.img`
  width: 181px;
  height: 181px;
  margin: 0 auto;
`;

export const AddButton = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 42px;
  height: 42px;
  background: #3300CC;
  border: 1px solid #3300CC;
  border-radius: 50%;
  color: #fff;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  & input {
    display: none;
  }
`;

