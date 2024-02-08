
export const fetchAll = async(tag)=>{
    const url = `https://insurance-agency-bice.vercel.app/api//${tag}`
  try {
    const res = await fetch(url,{cache:"no-store"})
    if(!res.ok){
        throw new Error("Failed to fetch")
      
    }

    return  await res.json()
  } catch (error) {
    console.log(error)
  }

}