import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from "../../common/Header";
import {
    ArrowRight, Description, Description2,
    Edit, Item,
    ProfileInfo,
    Selfie,
    SelfieCaption,
    SelfieWrapper, Title, Title2,
    Welcome,
    Wrapper
} from "./ProfileStyles";
import {State} from "../../../store";
import {useDispatch, useSelector} from 'react-redux';
import {
    BottomWrapper,
    Buttons,
    CropHeader,
    CropInner,
    CropWrapper,
    Cross,
    Retake,
    Save,
    Text
} from "../addSelfie/AddSelfieStyles";
import {AppDispatch} from "../../../App";
import {getUser, setAvatar} from "../../../store/actions/user";
import {getCroppedImage} from "../addSelfie/CropImg";
import Cropper from 'react-easy-crop';

const Profile = () => {
    const nav = useNavigate();

    const user = useSelector((state: State) => state.userReducer.user);

    const [photoUrl, setPhotoUrl] = useState<any>();
    const [isOpen, setIsOpen] = useState(false);
    const [photo, setPhoto] = useState<null | Blob>(null);
    const [crop, setCrop] = useState({x: 0, y: 0});
    const [zoom, setZoom] = useState(1);
    const [minZoom, setMinZoom] = useState(1);

    const dispatch = useDispatch<AppDispatch>();

    const hiddenFileInput = useRef<HTMLInputElement>(null);

    const onSelectFile = (e: any) => {
        const selectedFile = URL.createObjectURL(e.target.files[0]);
        setPhotoUrl(selectedFile);
    }

    const onCloseModalClick = () => {
        setPhotoUrl(null);
        setCrop({x: 0, y: 0});
        setZoom(1);
        setIsOpen(false);
    }

    const onAddClick = () => {
        hiddenFileInput.current!.click();
    };

    const onSaveClick = () => {
        if (photo) {
            dispatch(setAvatar(photo.type));
        }
    };

    useEffect(() => {
        dispatch(getUser());
    }, [])

    const onCropComplete = useCallback(
        async (_croppedArea: any, croppedAreaPixels: any) => {
            if (photoUrl) {
                const croppedImage = await getCroppedImage(photoUrl, croppedAreaPixels);
                setPhoto(croppedImage);
            }
        },
        [crop, zoom]
    );

    return (
        <main className='profile'>
            <CropWrapper isOpen={isOpen}>
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
                    style={{display: "none"}}
                />
            </CropWrapper>
            <Header/>
            <Wrapper>
                <Welcome>Welcome{user?.fullName !== null && ','} {user?.fullName}</Welcome>
                <SelfieCaption>Your selfie</SelfieCaption>
                <SelfieWrapper>
                    <Selfie src={user?.avatar}/>
                    <Edit onClick={() => {
                        setIsOpen(true);
                        setPhotoUrl('/assets/images/album-image.png');
                        //setPhotoUrl(`${user?.avatar}`);
                    }}>
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
                            <Title2>Account settings</Title2>
                            <Description2>Update your phone and email</Description2>
                        </div>
                    </Item>
                    <Item>
                        <div>
                            <Title2>Notification settings</Title2>
                            <Description2>How should we contact you?</Description2>
                        </div>
                    </Item>
                </ProfileInfo>
            </Wrapper>
        </main>
    );
};

export default Profile;