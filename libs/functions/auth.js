import { useRouter } from "next/router"

export const authenticate = () =>{
   const userId =  localStorage.getItem("userId") 
if(!userId){
   const router = useRouter()
   router.push('./')
}else{

}
}