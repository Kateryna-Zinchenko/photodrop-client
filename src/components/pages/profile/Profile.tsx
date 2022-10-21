import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "../../common/Header";
import {
    ArrowRight, Description,
    Edit, Item,
    ProfileInfo,
    Selfie,
    SelfieCaption,
    SelfieWrapper, Title,
    Welcome,
    Wrapper
} from "./ProfileStyles";

const Profile = () => {
    const nav = useNavigate();

    return (
        <main className='profile'>
            <Header/>
            <Wrapper>
                <Welcome>Welcome, Jane Smith.</Welcome>
                <SelfieCaption>Your selfie</SelfieCaption>
                <SelfieWrapper>
                    <Selfie src='/assets/images/profile-selfie.png'/>
                    <Edit>
                        <img src='/assets/icons/edit-pencil.png'/>
                    </Edit>
                </SelfieWrapper>
                <ProfileInfo>
                    <Item onClick={() => nav('/change-name')}>
                        <div>
                            <Title>Your name</Title>
                            <Description>Tell us your name to personalize communications.</Description>
                        </div>
                        <ArrowRight/>
                    </Item>
                    <Item>
                        <div>
                            <Title>Account settings</Title>
                            <Description>Update your phone and email</Description>
                        </div>
                        <ArrowRight/>
                    </Item>
                    <Item>
                        <div>
                            <Title>Notification settings</Title>
                            <Description>How should we contact you?</Description>
                        </div>
                        <ArrowRight/>
                    </Item>
                </ProfileInfo>
            </Wrapper>
        </main>
    );
};

export default Profile;