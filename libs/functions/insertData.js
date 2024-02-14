export const insertData = async (tag,data) =>{
  // https://insurance-agency-bice.vercel.app/api/
  // http://localhost:3000/api/
    const url = `http://localhost:3000/api/${tag}`
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
    
    return await res.json({message:"success"})
    } catch (error) {
      return {message:error.message}
    }
}