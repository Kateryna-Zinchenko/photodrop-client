import {User} from "../reducers/user";
import {createActionCreators} from "immer-reducer";
import {AsyncAction} from "./common";
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";

export const userActions = createActionCreators(User);

export type UserActions = ReturnType<
    typeof userActions.setPhone
    | typeof userActions.setAuth
    | typeof userActions.setAlbums
    | typeof userActions.setPhotos
    >

export const setAuth =
    (auth: boolean): AsyncAction =>
        async (dispatch) => {
            try {
                dispatch(userActions.setAuth(auth));

            } catch (e: any) {
                console.log(e)
            }
        };

export const verificationCode =
    (phone: any): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                const data = {phone: phone};
                const response = await mainApi.verificationCode(data);
                dispatch(userActions.setPhone(phone));
                console.log(response)
            } catch (e: any) {
                console.log(e)
            }
        };

export const verificationUser =
    (phone: any, code:string): AsyncAction =>
        async (dispatch, _, {mainApi}) => {
            try {
                const data = {phone: phone, code:code};
                const response = await mainApi.verificationUser(data);
                console.log(response);

                // @ts-ignore
                const token = response.token;

                if (token) {
                    const storage = TokensLocalStorage.getInstance();
                    storage.setAccessToken(token);
                    dispatch(userActions.setAuth(true));
                } else {
                    console.log('error')
                }
            } catch (e: any) {
                console.log(e)
            }
        };

export const getGallery =
    (): AsyncAction =>
        async (dispatch, _, {mainProtectedApi}) => {
            try {
                const response = await mainProtectedApi.getGallery();
                // @ts-ignore
                dispatch(userActions.setAlbums(response.albums));
                // @ts-ignore
                dispatch(userActions.setPhotos(response.photos));
                dispatch(setAuth(true))
            } catch (e: any) {
                console.log(e)
            }
        };