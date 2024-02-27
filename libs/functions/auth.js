"use client"

import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useRouter } from "next/navigation";




export const authenticate = async () =>{

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
  router.push("http://localhost:3000/")
        console.log('not logged in')


      }
    });
}


export const signout = () =>{

  signOut(auth).then(() => {
    router.push("http://localhost:3000/")
  }).catch((error) => {
return(<h1>loading....</h1>)
  });
}