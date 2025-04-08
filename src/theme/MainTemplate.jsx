import React from 'react'
import HeaderMain from '../components/Header/Header'
import SidebarMenu from '../components/SidebarMenu/SidebarMenu'


const MainTemplate  = ({ children = null }) => {
  const enlaces = [
    { href: "/usuarios", label: "Usuarios" },
    { href: "/lenguajes-populares", label: "Lenguajes populares" },
    { href: "/puntajes", label: "Puntajes" }
  ];

  return (
    <>
      <HeaderMain />
      <main className='main-content'>
        <SidebarMenu list={enlaces} />
        <section>
          {children}
        </section>
      </main>
    </>
  )
}

export default MainTemplate
