import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ModalContentLogin = () => {
    return (
        <div className='md:p-6 p-2 flex items-center justify-center h-[calc(100vh-10rem)] overflow-y-hidden'>
            <div className='h-full text-xs md:text-lg rounded-md text-black flex flex-col p-6 gap-6'>
                <h1 className='font-bold'>Welcome!</h1>
                <p>log into your account or create new one</p>
                <button className='flex  items-center gap-4 p-4 ring-1   ring-slate-200 rounded-md'>
                    <Image src="/google.png" alt="google.png" width={20} height={20} className='object-contain' />
                    <span >Sign in with google</span>
                </button>
                <button className='flex  items-center gap-4 p-4 ring-1  ring-slate-200  rounded-md'>
                    <Image src="/facebook.png" alt="facebook.png" width={20} height={20} className='object-contain' />
                    <span>Sign in with Facebook</span>
                </button>
                <p className='text-sm'>Have a problem ? <Link href="/" className='text-blue-500 underline'>Contact us</Link></p>
            </div>
        </div>
    )
}

export default ModalContentLogin
