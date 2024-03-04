"use client"

import React, { useEffect, useState } from 'react'

function FetchAll(tag,limit) {

    const [error,setError] = useState('')
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const urld = "https://insurance-agency-bice.vercel.app/api"
    const urlp= "http://localhost:3000/api"
    const fetchData = async () =>{
        const url = `${urlp}/${tag}`
        const q = ""
        try {
          const res = await fetch(url,{cache:"no-store"})
          if(!res.ok){
             setError("Failed to fetch")
              throw new Error("Failed to fetch")
             
          }
      
          const newData =  await res.json()
          setLoading(false)
          // setData(newData)
// apply limitering here
           if(limit=="all"){
           newData.sort((a, b) => a.createdAt - b.createdAt)
            setData(newData)
           }else{
            while (newData.length > limit) {
              newData.pop(); // Remove the last element
          }
          newData.sort((a, b) => b.createdAt - a.createdAt)
          setData(newData)
           }
        } catch (error) {
          console.log(error)
          setLoading(false)
          setError(error.message)
        }
       }

       useEffect(()=>{
        fetchData()
       },[tag,limit])

{switch(tag) {
  case "clients":
    return ( {ce:error,cd:data,cl:loading})
   
  case "vehicles":
    return ( {ve:error,vd:data,vl:loading})

  case "policies":
    return ( {pe:error,pd:data,pl:loading})
    
  case "quotes":
    return ( {qe:error,qd:data,ql:loading})

  default:
    return ( {error,data,loading})
} }

}

export default FetchAll