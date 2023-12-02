import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-6 flex items-center justify-center h-[calc(100vh-10rem)] '>
      <div className='h-full shadow-2xl rounded-md flex flex-col p-6 gap-6'>
        <h1 className='font-bold'>Welcome!</h1>
        <p>log into your account or create new one</p>
        <button className='flex  items-center gap-4 p-4 ring-1  justify-center ring-slate-200 rounded-md'>
          <Image src="/google.png" alt="google.png" width={20} height={20} className='object-contain' />
          <span>Sign in with google</span>
        </button>
        <button className='flex  items-center gap-4 p-4 ring-1 justify-center  ring-slate-200  rounded-md'>
          <Image src="/facebook.png" alt="facebook.png" width={20} height={20} className='object-contain'/>
          <span>Sign in with Facebook</span>
        </button>
        <p>Have a problem?<Link href="/">Contact us</Link></p>
      </div>
    </div>
  )
}

export default page
