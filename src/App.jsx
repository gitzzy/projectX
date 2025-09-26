import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menubar from './components/Menubar'
import Navbar from './components/Navbar'
import Base from './components/Base'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FullPost from './components/FullPost'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Menubar/> */}
     {/* <Navbar/> */}
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Base/>}/>
        <Route path='/post' element={<FullPost/>}/>
      </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
