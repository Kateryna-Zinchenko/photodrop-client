import React from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './styles/globals.css';
import store from "./store";
import AddSelfie from "./components/pages/addSelfie/AddSelfie";
import Profile from "./components/pages/profile/Profile";
import ChangeName from "./components/pages/changeName/ChangeName";
import VerificationPhone from "./components/pages/verificationPhone/VerificationPhone";
import VerificationCode from "./components/pages/verificationCode/VerificationCode";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Album from "./components/pages/album/Album";

export type AppDispatch = typeof store.dispatch;

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        <Route path='/' element={<VerificationPhone/>}/>
                        <Route path='/code' element={<VerificationCode/>}/>
                        <Route path='/add-selfie' element={<AddSelfie/>}/>
                        <Route path='/dashboard' element={<Dashboard/>}/>
                        <Route path='/album' element={<Album/>}/>
                        <Route path='/profile' element={<Profile/>}/>
                        <Route path='/change-name' element={<ChangeName/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;