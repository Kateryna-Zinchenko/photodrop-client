import React, { useEffect } from 'react';
import {Logo, LogoWrapper} from "../../common/Header";
import {
    Album,
    Albums, ArtPrints,
    Avatar, Border, BottomWrapper,
    Caption,
    ContentWrapper, DefaultContentWrapper, DropSoon, GetMessage,
    Photo,
    Photos, Print, PrintBorder, Prints,
    Title,
    Title2,
    TopWrapper
} from "./DashboardStyles";
import Button from "../../common/Button";
import { useNavigate } from 'react-router-dom';
import Footer from "../../common/Footer";
import {getGallery, getUser} from "../../../store/actions/user";
import {AppDispatch} from "../../../App";
import { useDispatch, useSelector } from 'react-redux';
import {State} from "../../../store";

const Dashboard = () => {
    const nav = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const user = useSelector((state: State) => state.userReducer.user)
    const isAuth = useSelector((state: State) => state.userReducer.isAuth)

    // useEffect(() => {
    //     if(!user) {
    //         dispatch(getUser());
    //     }
    //     dispatch(getGallery());
    // }, [])

    return (
        <main className='main'>
            <LogoWrapper>
                <Logo src='/assets/images/logo.png'/>
                <Avatar src={user?.avatar} onClick={() => nav('/profile')}/>
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
            {/*<DefaultContentWrapper>*/}
            {/*    <TopWrapper>*/}
            {/*        <img src="/assets/images/default-dashboard.png" alt="#"/>*/}
            {/*        <DropSoon>Your photos will drop soon.</DropSoon>*/}
            {/*        <GetMessage>You will get a text message when they are ready. It can take up to 48 hours.</GetMessage>*/}
            {/*    </TopWrapper>*/}
            {/*    <Border/>*/}
            {/*    <BottomWrapper>*/}
            {/*        <ArtPrints>Browse Art Prints</ArtPrints>*/}
            {/*        <Prints>*/}
            {/*            <Print src='/assets/images/print-1.png'/>*/}
            {/*            <PrintBorder/>*/}
            {/*            <Print src='/assets/images/print-2.png'/>*/}
            {/*            <PrintBorder/>*/}
            {/*            <Print src='/assets/images/print-1.png'/>*/}
            {/*        </Prints>*/}
            {/*    </BottomWrapper>*/}
            {/*</DefaultContentWrapper>*/}
            <Footer/>
        </main>
    );
};

export default Dashboard;