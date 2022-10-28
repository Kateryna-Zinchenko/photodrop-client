import styled from "styled-components";

export const ContentWrapper = styled.div`
  margin: 15px 0 0;
  position: relative;
  & > button {
    max-width: 345px;
    margin: 40px auto 40px;

    @media (min-width: 1440px) {
      max-width: 300px;
      margin: 100px auto 100px;
      font-size: 22px;
      line-height: 15px;
      padding: 17px 0 18px 0;
    }
  }

  @media (min-width: 1440px) {
    margin: 40px 0 0;
  }
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translate(0, -50%);
  cursor: pointer;

  @media (min-width: 1440px) {
    right: 40px;
  }
`;

export const Title = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #262626;
  padding: 0 15px;
  
  @media (min-width: 1440px) {
    font-size: 16px;
    line-height: 13px;
    padding: 0 120px;
  }
`;

export const Albums = styled.div`
  margin: 10px 0 0;
  padding: 0 15px 0 15px;
  display: flex;
  overflow-x: scroll;

  & > div {
    position: relative;
    cursor: pointer;
  }

  @media (min-width: 1440px) {
    margin: 19px 0 0;
    padding: 0 120px;
  }
`;

export const Album = styled.div`
  background: url("/assets/images/album-image.png") no-repeat center;
  width: 110px;
  height: 140px;
  border-radius: 20px;
  margin: 0 0 0 5px;
  background-size: cover;
  position: relative;

  &::before {
    content: '';
    width: 110px;
    height: 73px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 44.34%, rgba(0, 0, 0, 0) 100%);
    position: absolute;
    bottom: 0;
    border-radius: 20px;
  }

  &:first-child {
    margin: 0;
  }

  @media (min-width: 1440px) {
    width: 200px;
    height: 255px;
  }
`;

export const Caption = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 450;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #FFFFFF;
  position: absolute;
  bottom: 20px;
  left: 5px;
  right: 5px;

  @media (min-width: 1440px) {
    font-size: 14px;
    line-height: 9px;
  }
`;

export const Title2 = styled(Title)`
  margin: 40px 0 0;

  @media (min-width: 1440px) {
    margin: 101px 0 0;
  }
`;

export const Photos = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0 0;
  flex: 1 1 30%;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;

  @media (min-width: 1440px) {
    margin: 19px auto 0;
    padding: 0 120px;
  }
`;

export const Photo = styled.img`
  height: 33.33vw;
  object-fit: cover;
  max-width: 33.33%;
  flex: 0 1 33.33333%;
  cursor: pointer;
  background: rgba(211, 211, 211, 0.41);

  @media (min-width: 1440px) {
    max-width: 400px;
    height: 400px;
  }
`;

export const DefaultContentWrapper = styled.div`
  
`;


export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & img {
    width: 82px;
    margin: 20px 0 0;
  }
  
  @media (min-width: 1440px) {
    & img {
      width: 107px;
      margin: 40px 0 0;
    }
  }
`;


export const DropSoon = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 14px;
  text-align: center;
  color: #262626;
  margin: 21px 0 0;

  @media (min-width: 1440px) {
    font-size: 30px;
    line-height: 22px;
    margin: 30px 0 0;
  }
`;

export const GetMessage = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  text-align: center;
  color: #262626;
  margin: 16px 0 0;

  @media (min-width: 1440px) {
    font-size: 22px;
    line-height: 16px;
    margin: 19px 0 0;
  }
`;

export const Border = styled.div`
  width: 100%;
  height: 5px;
  background: #F4F4F4;
  margin: 41px 0 0;

  @media (min-width: 1440px) {
    display: none;
  }
`;

export const BottomWrapper = styled.div`
  margin: 41px auto 0;

  @media (min-width: 1440px) {
    margin: 100px auto 0;
  }
`;

export const ArtPrints = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 15px;
  color: #262626;
  padding: 0 15px;

  @media (min-width: 1440px) {
    font-size: 30px;
    line-height: 20px;
    padding: 0 120px;
  }
`;

export const Prints = styled.div`
  margin: 20px 0 60px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  overflow-x: scroll;

  @media (min-width: 1440px) {
    padding: 0 120px;
    margin: 20px 0 100px;
  }
`;

export const Print = styled.img`
  min-width: 168px;
  width: 168px;
  height: 216px;
  border-radius: 20px;
  
  @media (min-width: 1440px) {
    width: 200px;
    height: 255px;
    margin: 0 0 0 10px;
    
    &:first-child {
      margin: 0;
    }
  }
`;

export const PrintBorder = styled.div`
  min-width: 5px;
  width: 5px;
  height: 214px;
  background: #5200FF;
  opacity: 0.66;

  @media (min-width: 1440px) {
    display: none;
  }
`;