import styled from "styled-components";

export const Header = styled.div`
  padding: 11px 15px;
  display: flex;
  align-items: center;
`;

export const ArrowBack = styled.div`
  background: url("/assets/icons/arrow-left.png") no-repeat;
  background-size: contain;
  width: 8px;
  height: 16px;
  cursor: pointer;
`;

export const Description = styled.div`
  margin: 0 0 0 40px;
`;

export const Name = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 13px;
  color: #262626;
`;

export const Info = styled.div`
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 10px;
  color: #262626;
  margin: 10px 0 0;
  
  & span{
    color: #3300CC;
  }
`;

export const Content = styled.div`
  position: relative;
  & > button {
    max-width: 345px;
    margin: 40px auto 40px;
  }
`;

export const Photos = styled.div`
  display: flex;
  flex-wrap: wrap;
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