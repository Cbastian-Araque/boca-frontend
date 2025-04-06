import { useState } from 'react'
import './App.css'
import HeaderMain from './components/Header/Header'
import SidebarMenu from './components/SidebarMenu/SidebarMenu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderMain />
      <main className='main-content'>
        <SidebarMenu />
        <section>
          <h2>Tabla de información</h2>
        </section>
      </main>
    </>
  )
}

export default App
