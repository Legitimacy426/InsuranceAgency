export const deleteData = async (tag,id) =>{
    const urld = "https://insurance-agency-bice.vercel.app/api"
    const urlp= "http://localhost:3000/api"

    
      const url = `${urld}/${tag}/${id}`
      try {
        const res = await fetch(url,{
        method:"DELETE",
        headers:{
          "content-Type":"application/json"
        },
        // body:JSON.stringify(data)
      
        }
       )
       
       console.log(res)
      
       if(!res.ok){
        throw new Error("Failed to delete")
      }
      
      return await res.json({message:"success"})
      } catch (error) {
        return {message:error.message}
      }
  }