export const insertData = async (tag,data) =>{
  // https://insurance-agency-bice.vercel.app/api/
    const url = `https://insurance-agency-bice.vercel.app/api/${tag}`
    try {
      const res = await fetch(url,{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(data)
    
      }
     )
     
     console.log(res)
    
     if(!res.ok){
      throw new Error("Failed to insert")
    }
    
    return await res.json()
    } catch (error) {
      return {message:error.message}
    }
}