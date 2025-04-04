import { createContext } from "react";
import react from 'react'
 
// Creating variable context
export const Datacontext = createContext();

// creating provider

export const DataProvider=({children})=>{
    let myname = "Yogi";
    let age = 21;
    // console.log(children);
    
    return <Datacontext.Provider value ={{myname,age}}>
        {children}
        {/* console.log(children); */}
        

    </Datacontext.Provider>
}

