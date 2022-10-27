import styled from 'styled-components';

export const CropWrapper = styled.div<{isOpen: boolean}>`
  background: #262626;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  top: 0;
  left: 0;
  position: fixed;
  overflow: hidden;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  z-index: 5;
`;

export const CropHeader = styled.div`
  font-family: 'futura-pt';
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 13px;
  color: #ffffff;
  position: relative;
  margin: 23px 0 0;
  width: 100%;
`;

export const Cross = styled.img`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 15px;
`;

export const Text = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 11px;
  text-align: center;
  color: #FFFFFF;
  margin: 94px 0 0;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const CropInner = styled.div`
  position: relative;
  width: 100%;
  height: 285px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 42px auto 0;
`;

export const Buttons = styled.div`
  bottom: 0;
  margin: 0 0 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 375px;
`;

export const Retake = styled.button`
  border: 1px solid #ffffff;
  border-radius: 50px;
  width: 170px;
  height: 50px;
  background: #262626;
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  text-align: center;
  outline: none;
  cursor: pointer;
`;

export const Save = styled.button`
  background: #ffffff;
  border-radius: 50px;
  width: 170px;
  height: 50px;
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #262626;
  text-align: center;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

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
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 2px;
    background: #FFF;
  }
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 18px;
    background: #FFF;
  }
  
  & input {
    display: none;
  }
`;

