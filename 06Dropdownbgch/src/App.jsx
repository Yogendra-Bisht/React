import { useState } from 'react'
import './App.css'

function App({}) {
  const [value, setbgcolor] = useState('red')
  const changecolor=(event)=>{
    setbgcolor(event.target.value)

  }

  return (
    <>
    <div className='h-screen w-screen ' style = {{backgroundColor: value}}>
      <div className='items-center justify-center align-middle' style={{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <label for="Colors" className='bg-black rounded-lg text-white font-bold' style = {{backgroundColor: value}}>Choose a color :   </label>
        <select name="Colors" id=" Colors" className='rounded-lg font-bold style = {{backgroundColor: value}}' onChange={changecolor}>
        
           // Use onChange event
          <option value="red" >Red</option>
          <option value="green" >Green</option>
          <option value="blue" >Blue</option>
          <option value="black" >Black</option>
          <option value="brown" >Brown</option>
          <option value="purple" >Purple</option>
          <option value="white" >White</option>
          <option value="orange" >Orange</option>
          <option value="black" >Black</option>
          </select> 
        
      </div>

    </div>

    
    </>
  )
}

export default App
