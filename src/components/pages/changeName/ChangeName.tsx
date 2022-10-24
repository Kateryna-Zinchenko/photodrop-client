import React from 'react';
import styled from 'styled-components';
import Header from "../../common/Header";
import Button from "../../common/Button";

const ChangeName = () => {
    return (
        <main className='change-name'>
            <Header/>
            <Wrapper>
                <Title>Your name</Title>
                <Input value='Jane Smith'/>
                <Button>Save</Button>
            </Wrapper>
        </main>
    );
};

export default ChangeName;

export const Wrapper = styled.div`
  margin: 167px auto 0;
  padding: 0 15px;
  max-width: 450px;
`;

export const Title = styled.div`
  font-family: 'Termina';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 13px;
  text-align: center;
  color: #262626;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  background: #F4F4F4;
  border: 1px solid #EEEEEE;
  border-radius: 10px;
  margin: 20px auto 0;
  padding: 15px 0 14px 13px;
  outline: none;
  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 11px;
  color: #262626;
`;