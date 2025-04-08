import React, { lazy } from 'react'
import {  Route, Routes } from 'react-router-dom';

const Login = lazy(()=>import('../components/Auth/Login'))
const PasswordRecovery = lazy(()=>import('../components/Auth/PasswordRecovery'))
const Register = lazy(()=>import('../components/Auth/Register'))

const RoutersOut = () => {
    return(
    <Routes>
        <Route path="*" element={<Login />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/register" element={<Register />} />
    </Routes>
    )
}


export default RoutersOut