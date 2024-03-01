import axios from "axios";
import { useState } from "react";


const useFetch=()=>{
   const[apiData,setApidata]=useState();
   const getApi=(url)=>{
    axios.get(url)
        .then(res=>setApidata(res.data))
        .catch(err=>console.log(err))
   }

   return [apiData, getApi]
}

export default useFetch;