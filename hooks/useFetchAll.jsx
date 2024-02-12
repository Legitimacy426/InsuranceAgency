"use client"

import React, { useEffect, useState } from 'react'

function useFetchAll(tag) {

    const [error,setError] = useState('')
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    const fetchData = async () =>{
        const url = `http://localhost:3000/api/${tag}`
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
},[tag])


  return (
 {error,data,loading}
  )
}

export default useFetchAll