"use client"

import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/navigation";




export const authenticate = async () =>{
  const domainp = "https://insurance-agency-bice.vercel.app/"
  const domaind = "http://localhost:3000/"
  const router = useRouter()
   onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        
        console.log(uid)
        return {userId:uid}
        
        // ...
      } else {
        // User is signed out
        // ...
  router.push(domainp)
        console.log('not logged in')


      }
    });
}


export const signout = () =>{

  signOut(auth).then(() => {
    router.push(domaind)
  }).catch((error) => {
return(<h1>loading....</h1>)
  });
}