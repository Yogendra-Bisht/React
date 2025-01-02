import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count =0;
  const [count, setcount]=useState(0);
  
  let addone=()=>{
    
    if(count<20){
      setcount(count+1);
    }
  }
  let removeone=()=>{
    
    if(count > -10){
      setcount(count-1);
    }
  }
  

  return (
    <>
      <h3>Limited counts avalible</h3>
      <br />
      <button 
      onClick={addone}>Add by one : {count}</button>
      <br />
      <br />
      <button
      onClick={removeone}
      >Remove by one : {count}</button>

      
    </>
  )
}

export default App
