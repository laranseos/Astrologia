import React from "react";
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom'
import Landing from "./Landing";
import Chat from "./Chat"
const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/home'/>} />
                <Route path='/home' element={<Landing />} />
                <Route path='/chat' element={<Chat/>} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default Routers