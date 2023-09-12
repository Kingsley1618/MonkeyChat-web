import React from 'react'
import { useAuth } from '@/app/authContext/authContext'
import Image from "next/image"

export default function SideBar() {
    const {currentUser, input, inputHandler} = useAuth()
 
  return (
    <div className="flex-[0.3] w-[100%] min-w-[250px]  bg-[rgb(63,14,64)] sm:flex flex-col hidden">

<div className="border-y-[rgb(82,38,83)] border-y-[1px]  text-white px-3 py-3 font-bold text-[18px]">
    <h1 className="hover:bg-[rgb(77,42,81)] px-2 rounded-md">Kingsley</h1>
    </div>
    <div className="px-2 mt-3">
<h1 className="text-[rgb(198,183,198)] px-2">Direct message</h1>
<div className="flex space-x-2">
<Image src ={currentUser?.photoURL} width = {25} height = {25} className='rounded-md' alt="profile"/>
<div className="text-white font-bold">{input}</div>
<div className="text-[rgb(142,97,122)]">you</div>

</div>
</div>
    </div>
  )
}
