import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'


function App() {
  const [bgcolor, setBgColor] = useState('red')
  // console.log(props);
  const handleColorChange = (color) => {
    setBgColor(color); // Update the background color
  };
  

  return (
    
    
    <>
    
    <div className={`h-screen w-screen`} style = {{backgroundColor: bgcolor}}>
      <div className='bg-orange-400 w-screen rounded-lg flex justify-center items-center gap-10 h-12'>
        <Button color="red" onClick={handleColorChange}/>
        <Button color="green" onClick={handleColorChange}/>
        <Button color="yellow" onClick={handleColorChange}/>
        <Button color="gray" onClick={handleColorChange}/>
        <Button color="pink" onClick={handleColorChange}/>
        <Button color="black" onClick={handleColorChange}/>
        <Button color="white" onClick={handleColorChange}/>
        <Button color="orange" onClick={handleColorChange}/>
        <Button color="brown" onClick={handleColorChange}/>
        <Button color="skyblue" onClick={handleColorChange}/>
        <Button color="blue" onClick={handleColorChange}/>
      </div>

    </div>

    </>
    
  )
}

export default App
