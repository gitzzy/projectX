import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menubar from './components/Menubar'
import Navbar from './components/Navbar'
import Base from './components/Base'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Menubar/> */}
     {/* <Navbar/> */}
     <Base/>
    </>
  )
}

export default App
