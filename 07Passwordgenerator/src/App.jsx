import { useState, setCallback } from 'react'
import './App.css'

function App() {
  // const [length, setlength]= useState(8);
  // const [numAllowed, setNumAllowed]=useState(false);
  // const [charAllowed, setCharAllowed]=useState(false);
  // const [password, setPassword]=useState("");
  // const passwordgenerator = setCallback(()=>{
  //   let pass = "";
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  //   if(numAllowed){
  //     str += "1234567890";
  //   }
  //   if(charAllowed){
  //     str += "@!$#%*&{}_+=-";
  //   }
  //   function setPassword() {
  //     for (let i = 1; i <= str.length; i++) {
  //       let char = Math.floor(Math.random()*str.length+1)
  //       let pass = str.charAt(char)
         
  //      }
  //      }
  //   setPassword(pass);
    
  // },[length, numAllowed, charAllowed,setPassword])

  return (
    <>
      {/* Page Wrapper */}
      <div className="w-screen h-screen bg-black font-bold text-white text-center flex flex-col justify-center items-center">
        {/* Title */}
        <h1 className="text-3xl mb-4">Password Generator</h1>
  
        {/* Inner Box */}
        <div className="bg-slate-400 w-1/2 h-32 flex justify-center items-center rounded-lg">
          {/* Content inside the box (optional) */}
          {/* <p className="text-black text-lg">Your password will appear here</p> */}
          <input 
          type="text"
          // value={password}
          className='outline-none w-1/2 py-1 px-3 rounded-lg h-8'
          placeholder='Password'
          readOnly
           />
           <button className='bg-blue-600 rounded-lg outline-none px-3 py-0.5 shrink-0 '
           >Copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'> 
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>

        </div>

        </div>
      </div>
    </>
  );
  
}

export default App
