import { getAuth, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/router";



export const SignOut = () =>{
    const router = useRouter()
    signOut(auth).then(() => {
        // Sign-out successful.
router.push('./')
    
      }).catch((error) => {
        // An error happened.
      });
}