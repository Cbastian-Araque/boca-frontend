import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

// Rutas
import Usuarios from '../pages/Usuarios'
import UserSettingsPage from '../pages/UserSettingsPage'
import PagePuntajes from '../pages/Puntajes'
import LenguajesPopulares from '../pages/LenguajesPopulares'
const Home = lazy(() => import('../components/Home/Home'))

const RoutersIn = () => {
  return (
    <Routes>
      <Route path="*" element={<Home />} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/user-settings" element={<UserSettingsPage />} />
      <Route path="/puntajes" element={<PagePuntajes />} />
      <Route path="/lenguajes-populares" element={<LenguajesPopulares />} />
    </Routes>
  )
}

export default RoutersIn
