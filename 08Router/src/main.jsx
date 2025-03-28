import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProider} from 'react-router-dom'
import header from './Components/header'
import footer from './Components/footer'
import home from './Components/home'
const router = createBrowserRouter([
  {
    path: '/',
    element : <layout/>,
    children : [
      {path: '/',
        element : <home/>
      },
      {
        path : 'about',
        element : <about/>
      }
    ]
  }
])

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProider router = {router}/>
   
  </StrictMode>,
)
