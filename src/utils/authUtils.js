'use client'
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import {auth} from "@/firebase/config"
export function googleHandler () {
    const provider= new GoogleAuthProvider()
signInWithPopup(auth, provider).then((user)=> {
    console.log(user)
}).catch((err)=> {
    console.log(err)
})
}