import { createReducerFunction, ImmerReducer } from "immer-reducer";

interface UserState {
    isAuth: boolean;
    user: {
        id: string | null;
        phone: string | null;
        fullName: string | null;
        email: string | null;
        avatar: any | null
    };
    phone: any,
    albums: any,
    photos: any
}

const initialState: UserState = {
    isAuth: false,
    user: {
        id: null,
        phone: null,
        fullName: null,
        email: null,
        avatar: null
    },
    phone: null,
    albums: null,
    photos: null
};


export class User extends ImmerReducer<UserState> {
    setAuth(isAuth: boolean) {
        this.draftState.isAuth = isAuth;
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
}

export default createReducerFunction(User, initialState);