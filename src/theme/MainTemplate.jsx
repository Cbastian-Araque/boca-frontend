import React from 'react'
import HeaderMain from '../components/Header/Header'
import SidebarMenu from '../components/SidebarMenu/SidebarMenu'

const MainTemplate = ({ children = null }) => {
  const enlaces = [
    { href: '*', label: 'Inicio' },
    { href: '/user-settings', label: 'Ajustes de usuario' },
    { href: '/usuarios', label: 'Usuarios' },
    { href: '/lenguajes-populares', label: 'Lenguajes populares' },
    { href: '/puntajes', label: 'Puntajes' },
  ]

  return (
    <>
      <HeaderMain />
      <main className="main-content">
        <SidebarMenu list={enlaces} />
        <section className="rounded-2xl bg-white shadow-lg p-4 min-h-screen w-full">
          {children}
        </section>
      </main>
    </>
  )
}

export default MainTemplate
