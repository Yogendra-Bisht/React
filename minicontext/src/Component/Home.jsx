import React, { useContext } from 'react'
import { Datacontext } from './Contextdata'
// import { Datacontext } from './Contextdata'

function Home() {
    const {myname, age}=useContext(Datacontext);
  return (
    
    <div>
        <h2>This is home and my name is {myname} and my age is {age} </h2>
    </div>
  )
}

export default Home