import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Otp, setCount] = useState()
  function createOtp(){
    let otp = Math.random()*100000
    let Otp = Math.floor(otp)
    // console.log(`Your OTP is : ${Otp}`);
    return Otp
    }
    // createOtp();

  return (
    <>
    <button onClick={createOtp}>Your otp is : {Otp}</button>
      
    </>
  )
}

export default App
