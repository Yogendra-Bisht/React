import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){
  const [otp, setotp] = useState("");
  function createotp(){
    const otpValue = Math.floor(Math.random() * 100000);
    setotp(otpValue)
  }


    // createOtp();

  return (
    <>
    <h3>Click the button to generate your OTP:</h3>
      <button onClick={createotp}>Generate OTP</button>
      <p>Your OTP is: <strong>{otp}</strong></p> {/* Display the generated OTP */}
      
    </>
  )
}

export default App
