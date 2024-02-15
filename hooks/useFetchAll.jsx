"use client"

import React, { useEffect, useState } from 'react'

function useFetchAll(tag,limit) {

    const [error,setError] = useState('')
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
// https://insurance-agency-bice.vercel.app/api/
//http://localhost:3000/api/
    const fetchData = async () =>{
        const url = `https://insurance-agency-bice.vercel.app/api/${tag}`
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


  return (
 {error,data,loading}
  )
}

export default useFetchAll