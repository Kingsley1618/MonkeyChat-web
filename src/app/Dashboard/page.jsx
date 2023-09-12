'use client'
import React from 'react'
import Navbar from "@/components/Dashboard/Navbar"
import Sidebar from "@/components/Dashboard/SideBar"
import Form from "@/components/Dashboard/Form"
export default function Dashboard() {
  return (
   <div className="flex flex-col h-screen">
    
   <Navbar />
  
   <div className="flex flex-[1]">
<Sidebar />
<Form />
   </div>
   </div>
  )
}
