import React, { lazy } from 'react'
import {  Route, Routes } from 'react-router-dom';

const Home = lazy(()=>import('../components/Home/Home'))

const RoutersIn = () => {
    return(
    <Routes>
        <Route path="*" element={<Home />} />
    </Routes>
    )
}


export default RoutersIn