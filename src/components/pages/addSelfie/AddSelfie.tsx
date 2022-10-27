import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
    AddButton,
    Caption, CropHeader, CropWrapper, Cross,
    Selfie,
    SelfieWrapper,
    Title, Text,
    Wrapper, BottomWrapper, CropInner, Buttons, Retake, Save
} from "./AddSelfieStyles";
import Header from "../../common/Header";
import Cropper from 'react-easy-crop';
import {getCroppedImage} from "./CropImg";
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch} from "../../../App";
import { useNavigate } from 'react-router-dom';
import {getUser, setAvatar} from "../../../store/actions/user";
import {State} from "../../../store";

const AddSelfie = () => {
    const [photoUrl, setPhotoUrl] = useState<any>();
    const [photo, setPhoto] = useState<null | Blob>(null);
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);
    const [minZoom, setMinZoom] = useState(1);

    const user = useSelector((state: State) => state.userReducer.user)

    const dispatch = useDispatch<AppDispatch>();
    const nav = useNavigate();
    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const onSelectFile = (e: any) => {
        const selectedFile = URL.createObjectURL(e.target.files[0]);
        setPhotoUrl(selectedFile);
    }

    const onCloseModalClick = () => {
        setPhotoUrl(null);
        setCrop({ x: 0, y: 0 });
        setZoom(1);
    }

    const onAddClick = () => {
        hiddenFileInput.current!.click();
    };

    const onSaveClick = () => {
        if (photo) {
            dispatch(setAvatar(photo.type));
        }
    };

    console.log(photo?.type)

    const onCropComplete = useCallback(
        async (_croppedArea: any, croppedAreaPixels: any) => {
            if (photoUrl) {
                const croppedImage = await getCroppedImage(photoUrl, croppedAreaPixels);
                setPhoto(croppedImage);
            }
        },
        [crop, zoom]
    );

    useEffect(() => {
        if (user) {
            nav('/dashboard');
        }
    }, [])

    return (
        <main className='add-selfie'>
            <CropWrapper isOpen={!!photoUrl}>
                <CropHeader>
                    <Cross src='/assets/icons/cross.svg'
                           onClick={onCloseModalClick}
                    />
                    <div>Take selfie</div>
                </CropHeader>
                <Text>Drag and zoom image to crop</Text>
                <BottomWrapper>
                    <CropInner>
                        <Cropper
                            image={photoUrl ? photoUrl : undefined}
                            crop={crop}
                            zoom={zoom}
                            cropShape="round"
                            showGrid={false}
                            onCropChange={setCrop}
                            onCropComplete={onCropComplete}
                            onZoomChange={setZoom}
                            minZoom={minZoom}
                            onMediaLoaded={({height, width}) => {
                                const smallerSide = height >= width ? width : height;
                                setMinZoom(285 / smallerSide);
                                setZoom(285 / smallerSide);
                            }}
                            aspect={1}
                            cropSize={{width: 285, height: 285}}
                            style={{
                                cropAreaStyle: {
                                    color: '#262626',
                                    border: 'none'
                                }
                            }}
                        />
                    </CropInner>
                    <Buttons>
                        <Retake onClick={onAddClick}>Retake</Retake>
                        <Save onClick={onSaveClick}>Save</Save>
                    </Buttons>
                </BottomWrapper>
                <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={onSelectFile}
                    style={{ display: "none" }}
                />
            </CropWrapper>
            <Header/>
            <Wrapper>
                <Title>Add a selfie</Title>
                <Caption>A selfie allows your photos to be synced with your account.</Caption>
                <SelfieWrapper>
                    <Selfie src='/assets/images/default-selfie.png'/>
                    <AddButton>
                        <input type='file'
                               ref={hiddenFileInput}
                               onChange={onSelectFile}
                               accept="image/*"
                               capture="user"/>
                    </AddButton>
                </SelfieWrapper>
            </Wrapper>
        </main>
    );
};

export default AddSelfie;