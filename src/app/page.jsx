import SignUp from "@/components/SignUp/SignUp"
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <main className={`flex justify-center p-3 items-center h-screen`}>
      
  <SignUp />
  
    </main>
  )
}
