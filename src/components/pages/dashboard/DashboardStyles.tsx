import styled from "styled-components";

export const ContentWrapper = styled.div`
  margin: 15px 0 0;
  position: relative;
  & > button {
    max-width: 345px;
    margin: 40px auto 40px;
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
`;

export const Title = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #262626;
  padding: 0 15px;
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
`;

export const Title2 = styled(Title)`
  margin: 40px 0 0;
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
`;

export const Photo = styled.img`
  height: 33.33vw;
  object-fit: cover;
  max-width: 33.33%;
  flex: 0 1 33.33333%;
  cursor: pointer;
  background: rgba(211, 211, 211, 0.41);
`;
