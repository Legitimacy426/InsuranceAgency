"use client"

import React, { useEffect, useState } from 'react'

function useFetchWithID(tag,id) {

    const [error,setError] = useState('')
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
// https://insurance-agency-bice.vercel.app/api/
//http://localhost:3000/api/
    const fetchData = async () =>{
        const url = `https://insurance-agency-bice.vercel.app/api/${tag}/${id}`
        try {
          const res = await fetch(url,{cache:"no-store"})
          if(!res.ok){
             setError("Failed to fetch")
              throw new Error("Failed to fetch")
             
          }
      
          const newData =  await res.json()
          setLoading(false)
          setData(newData)
        } catch (error) {
          console.log(error)
          setLoading(false)
          setError(error.message)
        }
       }
useEffect(()=>{
 
 fetchData()
},[id])


  return (
 {error,data,loading}
  )
}

export default useFetchWithID