import { createReducerFunction, ImmerReducer } from "immer-reducer";

interface UserState {
    isAuth: boolean;
    user: {
        phone: string | null;
        fullName: string | null;
        email: string | null;
        avatar: any | null
    } | null;
    phone: any,
    albums: any,
    photos: any,
    albumPhotos: any
}

const initialState: UserState = {
    isAuth: false,
    user: {
        phone: null,
        fullName: null,
        email: null,
        avatar: null
    },
    phone: null,
    albums: null,
    photos: null,
    albumPhotos: null
};


export class User extends ImmerReducer<UserState> {
    setAuth(isAuth: boolean) {
        this.draftState.isAuth = isAuth;
    }
    setUserData(user: any) {
        this.draftState.user = user;
    }
    setPhone(phone: any) {
        this.draftState.phone = phone;
    }
    setAlbums(albums: any) {
        this.draftState.albums = albums;
    }
    setPhotos(photos: any) {
        this.draftState.photos = photos;
    }
    setAlbumPhotos(albumPhotos: any) {
        this.draftState.albumPhotos = albumPhotos;
    }
}

export default createReducerFunction(User, initialState);