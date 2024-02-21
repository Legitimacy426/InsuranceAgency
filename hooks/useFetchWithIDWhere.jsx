"use client"

import React, { useEffect, useState } from 'react'
import { conn } from '../libs/mongoDB'



function useFetchWithIDWhere(tag,id,q) {

    const [error,setError] = useState('')
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    const fetchData = async () =>{
        const url = `https://insurance-agency-bice.vercel.app/api/${tag}/${id}`
        try {
         await conn()
         const newData = []
      
       console.log("newDat>...........",newData)
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
return ({data,error,loading})
}

export default useFetchWithIDWhere