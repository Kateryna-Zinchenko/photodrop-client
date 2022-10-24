import React from 'react';
import {Logo, LogoWrapper} from "../../common/Header";
import {Album, Albums, Avatar, Caption, ContentWrapper, Photo, Photos, Title, Title2} from "./DashboardStyles";
import Button from "../../common/Button";
import { useNavigate } from 'react-router-dom';
import Footer from "../../common/Footer";

const Dashboard = () => {
    const nav = useNavigate();

    return (
        <main className='main'>
            <LogoWrapper>
                <Logo src='/assets/images/logo.png'/>
                <Avatar src='/assets/images/profile-selfie.png' onClick={() => nav('/profile')}/>
            </LogoWrapper>
            <ContentWrapper>
                <Title>Albums</Title>
                <Albums>
                    <div onClick={() => nav('/album')}>
                        <Album/>
                        <Caption>Album name</Caption>
                    </div>
                </Albums>
                <Title2>All photos</Title2>
                <Photos>
                    <Photo src='/assets/images/album-image.png'/>
                    <Photo src='/assets/images/album-image.png'/>
                    <Photo src='/assets/images/album-image.png'/>
                    <Photo src='/assets/images/album-image.png'/>
                    <Photo src='/assets/images/album-image.png'/>
                </Photos>
                <Button>Unlock your photos</Button>
            </ContentWrapper>
            <Footer/>
        </main>
    );
};

export default Dashboard;