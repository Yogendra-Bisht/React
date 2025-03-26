import {useEffect, useState} from "react"

function useCurrencyinfo(currency){
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
        .then((res)=>res.json)
        .then((res)=> setdata(res[currency]))
        console.log(data);
        
    },[currency])
    return data
}
export default useCurrencyinfo;