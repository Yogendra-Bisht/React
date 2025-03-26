
import { useState } from 'react';
import './App.css'

function App(){
const [password, makepassword]=useState(0);

  let length = 8;
  
  
  

 function createpassword(){
  let password = "";
  let units = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  for(let i=0; i<length; i++){
 
   let r = Math.floor(Math.random()*units.length);
   
   password += units[r];
    }
    makepassword(password);
 }

  
  


    

  return (
    <>
    <div className='h-dvh w-dvw bg-black flex  justify-center items-center '>
      <div className='text-amber-50 text-2xl h-40 w-56 bg-gray-500 text-center flex justify-center items-center border-amber-50 border-3 '>
        {/* <h2>{password}</h2> */}
        <output className='bg-black border-2 read-only: rounded-sm'>{password}</output>
        

      </div>
      <button className='text-2xl text-amber-50 ml-3.5 bg-blue-400 rounded-sm' onClick={()=>{createpassword()}}>Create</button>
    </div>
    
      
    </>
  )
}


export default App
