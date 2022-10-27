import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 15px;
  margin: 22px auto 0;
  max-width: 450px;
`;

export const Welcome = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 12px;
  text-align: center;
  color: #262626;
  margin: 0 auto;
`;

export const SelfieCaption = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
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
  border-radius: 50%;
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
  cursor: pointer;
  
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
  border: 1px solid #ece9ce;
  border-radius: 10px;
  padding: 10px 16px 9px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0 0;

  &:first-child {
    margin: 0;
    cursor: pointer;
    border: 1px solid #CECCB5;
  }
`;

export const Title = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 10px;
  display: flex;
  align-items: center;
  color: #262626;
`;

export const Title2 = styled(Title)`
  color: #ababab;
`;

export const Description = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 11px;
  display: flex;
  align-items: center;
  color: #262626;
  padding: 10px 0 0;
`;

export const Description2 = styled(Description)`
  color: #ababab;
`;

export const ArrowRight = styled.div`
  background: url("/assets/icons/arrow-left.png") no-repeat;
  transform: rotate(180deg);
  background-size: contain;
  width: 8px;
  height: 16px;
  cursor: pointer;
`;