import React from 'react'
import HeaderMain from '../components/Header/Header'
import SidebarMenu from '../components/SidebarMenu/SidebarMenu'

const MainTemplate  = ({ children = null }) => {
  return (
    <>
      <HeaderMain />
      <main className='main-content'>
        <SidebarMenu />
        <section>
          {children}
        </section>
      </main>
    </>
  )
}

export default MainTemplate
