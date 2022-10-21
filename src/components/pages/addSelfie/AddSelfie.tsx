import React, { useState } from 'react';
import {
    AddButton,
    Caption,
    Selfie,
    SelfieWrapper,
    Title,
    Wrapper
} from "./AddSelfieStyles";
import Header from "../../common/Header";

const AddSelfie = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<any>()

    const onSelectFile = (e: any) => {
        const selectedFile = URL.createObjectURL(e.target.files[0]);
        setSelectedPhoto(selectedFile);
    }

    return (
        <main className='add-selfie'>
            <Header/>
            <Wrapper>
                <Title>Add a selfie</Title>
                <Caption>A selfie allows your photos to be synced with your account.</Caption>
                <SelfieWrapper>
                    <Selfie src='/assets/images/default-selfie.png'/>
                    <AddButton>
                        +
                        <input type='file' onChange={onSelectFile} accept="image/*" capture="user"/>
                    </AddButton>
                </SelfieWrapper>
            </Wrapper>
        </main>
    );
};

export default AddSelfie;