import React, {useEffect, useRef, useState } from 'react';
import Header from "../../common/Header";
import Button from "../../common/Button";
import {Title, Text, Wrapper, ResendButton} from "./VerificationCodeStyles";
import InputCode from "./InputCode";
import {useDispatch, useSelector } from 'react-redux';
import {State} from "../../../store";
import {verificationCode, verificationUser} from "../../../store/actions/user";
import {AppDispatch} from "../../../App";
import { useNavigate } from 'react-router-dom';

const VerificationCode = () => {
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [code, setCode] = useState('');

    const phone = useSelector((state: State) => state.userReducer.phone);
    const isAuth = useSelector((state: State) => state.userReducer.isAuth);

    const nav = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const onResendClick = async () => {
        await dispatch(verificationCode(phone));
    }

    const onNextClick = async () => {
        await dispatch(verificationUser(phone, code));
    }

    useEffect(() => {
        if (isAuth) {
            nav('/add-selfie');
        }
    }, [isAuth])

    return (
        <main className='code'>
            <Header/>
            <Wrapper>
                <Title>What’s the code?</Title>
                <Text>Enter the code sent to <span>{phone && phone}</span></Text>
                <div>
                    <InputCode
                        length={6}
                        loading={loading}
                        onComplete={(code: any) => {
                            setLoading(true);
                            setTimeout(() => setLoading(false), 10000);
                            setDisabled(false);
                            setCode(code);
                        }}
                    />
                </div>
                <ResendButton onClick={onResendClick}>Resend code</ResendButton>
                <Button disabled={disabled} onClick={onNextClick}>Next</Button>
            </Wrapper>
        </main>
    );
};

export default VerificationCode;