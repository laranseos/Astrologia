import React from "react";
import {Routes, Route, Navigate, BrowserRouter} from 'react-router-dom'
import Landing from "./Landing";
import Chat from "./Chat"
const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigate to='/astrologia'/>} />
                <Route path='/astrologia' element={<Landing />} />
                <Route path='/disponivel-onlineconsulta' element={<Chat/>} />
            </Routes>
        </BrowserRouter>
        
    )
}

export default Routers