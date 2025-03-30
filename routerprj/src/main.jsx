import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'


import { NavLink, BrowserRouter as Router, Routes,Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-gray-200 h-dvh w-dvw'>
    <Router>
    <div className='bg-blue-400 flex gap-3.5 w-dvw '>
    <NavLink to ="/" className={"text-white"}>Home</NavLink>
    <NavLink to ="/About" className={"text-white"}>About</NavLink>
    <NavLink to ="/Contact" className={"text-white"}>Contact</NavLink>
    </div>

      <div className='flex   justify-center'>
      <div className=''>
      <Routes>
      <Route path ="/" element = {<Home/>}/>
      <Route path ="/Contact" element = {<Contact/>}/>
      <Route path ="/About" element = {<About/>}/>
      </Routes>
      </div>
      </div>

    </Router>
    </div>
    
    
    
  </StrictMode>,
)
