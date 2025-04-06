import { useState } from 'react'
import './App.css'
import HeaderMain from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderMain />
    </>
  )
}

export default App
