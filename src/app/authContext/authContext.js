'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from "@/firebase/config"; 

import {onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({children}) {
  
    const [currentUser, setCurrenUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState("")
  
    onAuthStateChanged(auth, (user)=> {
   
        if(user) {
            setCurrenUser(user)
 
    setLoading(false)
        } 
    })
    

return  <AuthContext.Provider value = {{currentUser, input, setInput}}>
    {!loading && children}
        </AuthContext.Provider>

}




export const useAuth = () => {
    return useContext(AuthContext);
  };