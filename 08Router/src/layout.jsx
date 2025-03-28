import React from 'react'
import{outlet} from 'react-router-dom'
import header from './Components/header'
import footer from './Components/footer'
import home from './Components/home'
function layout() {
  return (
    <>
    <header/>
    <outlet/>

    <footer/>
    </>
  )
}

export default layout