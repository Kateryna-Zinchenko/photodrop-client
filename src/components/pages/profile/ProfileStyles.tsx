import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 15px;
  margin: 22px auto 0;
  max-width: 375px;
`;

export const Welcome = styled.div`
  font-family: 'Termina-Bold',serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #262626;
  margin: 0 auto;
  width: fit-content;
`;

export const SelfieCaption = styled.div`
  font-family: 'Futura PT Medium';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #262626;
  margin: 20px 0 0;

`;

export const SelfieWrapper = styled.div`
  margin: 13px 0 0;
  position: relative;
  width: 100px;
  height: 100px;
`;

export const Selfie = styled.img`
  width: 100px;
  height: 100px;
`;

export const Edit = styled.div`
  position: absolute;
  bottom: 0;
  right: -18px;
  width: 37px;
  height: 37px;
  background: #3300CC;
  border-radius: 50%;
  border: 2px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  
  & img {
    width: 17px;
    height: 23px;
  }
`;

export const ProfileInfo = styled.div`
  margin: 20px auto 0;
`;

export const Item = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid #CECCB5;
  border-radius: 10px;
  padding: 10px 16px 9px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 0;
  
  &:first-child {
    margin: 0;
  }
`;

export const Title = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #262626;
`;

export const Description = styled.div`
  font-family: 'Futura PT';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 14px;
  display: flex;
  align-items: center;
  color: #262626;
  margin: 6px 0 0;
`;

export const ArrowRight = styled.div`
  background: url("/assets/icons/arrow-left.png") no-repeat;
  transform: rotate(180deg);
  background-size: contain;
  width: 8px;
  height: 16px;
  cursor: pointer;
`;