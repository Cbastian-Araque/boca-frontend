import React, { lazy } from 'react'
import {  Route, Routes } from 'react-router-dom';

// Rutas
import Usuarios from '../pages/Usuarios';
const Home = lazy(()=>import('../components/Home/Home'))

const RoutersIn = () => {
    return(
    <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
    </Routes>
    )
}


export default RoutersIn