import { useRouter } from "next/navigation"

export const authenticate = () =>{
   const userId =  localStorage.getItem("userId") 
if(!userId){
   const router = useRouter()
   router.push('./')
}else{
  return {userId:userId}
}
}