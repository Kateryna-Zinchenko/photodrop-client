import React, {useEffect, useState} from 'react';
import {Logo, LogoWrapper} from "../../common/Header";
import Button from "../../common/Button";
import {Caption, Text, Title, Wrapper} from "./VerificationPhoneStyles";
import "react-phone-input-2/lib/material.css";
import ReactPhoneInput from 'react-phone-input-2';

import flags from 'country-flag-icons/react/3x2'
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import {AppDispatch} from "../../../App";
import { useDispatch, useSelector } from 'react-redux';
import {getUser, verificationCode} from "../../../store/actions/user";
import { useNavigate } from 'react-router-dom';
import {State} from "../../../store";


const VerificationPhone = () => {
    const [phone, setPhone] = useState('');

    const nav = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const isAuth = useSelector((state: State) => state.userReducer.isAuth);
    const user = useSelector((state: State) => state.userReducer.user);

    const onCreateClick = async () => {
        await dispatch(verificationCode(`+${phone}`));
        nav('/code')
    }

    useEffect(() => {
        dispatch(getUser());
        if (isAuth) {
            nav('/dashboard');
        }
    }, [user])

    return (
        <main className='verification-phone'>
            <LogoWrapper>
                <Logo src='/assets/images/logo.png'/>
            </LogoWrapper>
            <Wrapper>
                <Title>Let’s get started</Title>
                <Text>Enter your phone number</Text>
                <div>
                    <ReactPhoneInput
                        placeholder='+1 (555) 555-5555'
                        enableSearch={true}
                        disableSearchIcon={true}
                        inputStyle={
                        {
                            height: "40px",
                            background: "#F4F4F4",
                            border: "1px solid #EEEEEE",
                            borderRadius: "10px",
                            margin: '0 0 0 80px',
                            padding: '15px 13px 14px 13px',
                            width: '76.8%',
                            flex: '1',
                        }}
                        buttonStyle={{
                            width: '70px',
                            height: '40px',
                            background: '#F4F4F4',
                            border: '1px solid #EEEEEE',
                            borderRadius: '10px',
                            padding: '8px 32px 7px 8px',
                        }}
                        containerStyle={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            margin: '19px 0 0'
                        }}
                        dropdownStyle={{
                            position: 'fixed',
                            margin: '-288px 0 0 -23px',
                            width: '100vw',
                            maxHeight: '100vh',
                            borderRadius: 'unset'
                        }}
                        country='us'
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                    />
                </div>
                <Button onClick={onCreateClick}>Create account</Button>
                <Caption>
                    <div>
                        By proceeding, you consent to get WhatsApp or SMS messages, from PhotoDrop and its affiliates
                        to the number provided. Text “STOP” to 89203 to opt out.
                    </div>
                    <div>
                        By continuing, you indicate that you have read and agree to
                        our <span>Terms of Use</span> & <span>Privacy Policy</span>
                    </div>
                </Caption>
            </Wrapper>
        </main>
    );
};

export default VerificationPhone;

