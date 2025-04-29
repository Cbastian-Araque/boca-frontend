import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

// Rutas
const Usuarios = lazy(() => import('../pages/Usuarios'))
const UserSettingsPage = lazy(() => import('../pages/UserSettingsPage'))
const PagePuntajes = lazy(() => import('../pages/Puntajes'))
const LenguajesPopulares = lazy(() => import( '../pages/LenguajesPopulares'))
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
