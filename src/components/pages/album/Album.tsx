import React, { useEffect } from 'react';
import {ArrowBack, Content, Description, Header, Info, Name, Photo, Photos} from "./AlbumStyles";
import Button from "../../common/Button";
import Footer from "../../common/Footer";

const Album = () => {

    return (
        <main className='album'>
            <Header>
                <ArrowBack onClick={() => window.history.back()}/>
                <Description>
                    <Name>Brooklyn Bridge</Name>
                    <Info>Jan 10, 2022 • <span>5 photos</span></Info>
                </Description>
            </Header>
            <Content>
                <Photos>
                    <Photo src='/assets/images/album-image.png'/>
                    <Photo src='/assets/images/album-image.png'/>
                    <Photo src='/assets/images/album-image.png'/>
                    <Photo src='/assets/images/album-image.png'/>
                    <Photo src='/assets/images/album-image.png'/>
                </Photos>
                <Button>Unlock your photos</Button>
            </Content>
            <Footer/>
        </main>
    );
};

export default Album;