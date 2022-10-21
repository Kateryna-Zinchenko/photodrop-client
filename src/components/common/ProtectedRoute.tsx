import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import TokensLocalStorage from "../../utils/local-storage/TokensLocalStorage";
import {getGallery} from "../../store/actions/user";
import {Navigate} from 'react-router-dom';

const ProtectedRoute = ({children}: any) => {
    const isAuth = useSelector((state: any) => state.userReducer.isAuth)
    const dispatch = useDispatch<any>();

    const token = TokensLocalStorage.getInstance().getAccessToken()

    if (!token){
        return <Navigate to='/'/>
    }
    if(isAuth && TokensLocalStorage.getInstance().getAccessToken()){
        return children
    }

    if (!isAuth && TokensLocalStorage.getInstance().getAccessToken()){
        dispatch(getGallery())
    }

    return children

};

export default ProtectedRoute;