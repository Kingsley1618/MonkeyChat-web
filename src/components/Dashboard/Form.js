'use client'
import React,{useState} from 'react'
import Image from "next/image"

import { Input } from 'antd';
import { useAuth } from '@/app/authContext/authContext';
export default function Form() {
    const [image, setImage] = useState(null)
 const {input, setInput} = useAuth()
 function inputHandler(event) {
    setInput(event.target.value)
}
    function changeHandler(event) {
        const selectedFile = event.target.files[0]
if(selectedFile) {
    setImage(selectedFile)
    console.log(image)
}
    }

  return (
    <div className = "flex-1 p-[50px]">
<h1 className="md:text-[2.5rem] text-[2rem] font-bold">What&apos;s your name?</h1>
<div>Adding your name and profile photo helps your teammates recognize and connect with you more easily.</div>
<div className="w-[100%] relative">
<Input placeholder="Enter your full name" onChange={inputHandler} className="py-2 w-[100%] text-[21px] mt-6" minLength={0} maxLength={15}/>
<span className="font-bold absolute right-10 top-10">{input.length}</span>
</div>

<div className="flex md:flex-row flex-col mt-8 gap-x-6 items-center">
<div>
<h1>Your profile photo(optional)</h1>
<label htmlFor="profileImageInput" className="cursor-pointer">
  <input id="profileImageInput" type="file" className="hidden" onChange={changeHandler} accept="image/*" />
  <div className="max-w-[200px] h-[100px] p-2 bg-gray-300 flex items-center justify-center mt-4 rounded-lg">
    {image ? (
      <Image
        src={window.URL.createObjectURL(image)}
        alt="image"
        className="max-w-[100%] max-h-[100%] object-contain"
        width={130}
        height={100}
      />
    ) : (
      <span className="text-gray-600 font-bold text-lg">Click to upload</span>
    )}
  </div>
</label>


</div>


<div className="md:mt-0 mt-8">
    <h1>Help your teammates know they&apos;re talking to the right person.</h1>
   <button type="button" className='font-bold px-2 py-1 border-gray-300 rounded-md border-2 mx-auto block md:mt-1 mt-5'>Upload photo</button>
</div>

</div>
<button type="button" className='font-bold px-2 py-2 rounded-lg border-gray-300 border-2 mx-auto bg-[rgb(87,22,87)] block md:mt-0 mt-5 text-white w-[100%] max-w-[200px]'>Next</button>
    </div>
  )
}
