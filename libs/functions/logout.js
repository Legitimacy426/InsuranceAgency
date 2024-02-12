import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";



export const SignOut = () =>{
    const router = useRouter()
    signOut(auth).then(() => {
        // Sign-out successful.
        localStorage.removeItem("userId")
        router.push('./')
    
      }).catch((error) => {
       console.log(error)
      });
}