'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Menu from './Menu'
import CartIcon from './CartIcon'
import Image from 'next/image'
import MoadalLogin from './MoadalLogin'

const Navbar = () => {
    const user = false
    const [modalOpen, setModalOpen] = useState<boolean>(true)

    return (
        <div className='flex justify-between items-center h-12  p-4 border-b-2 border-b-red-500 uppercase md:h-20 lg:px-10 xl:px-40'>
            <div className='hidden md:flex gap-4 flex-1 text-red-500'>
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/">Contact</Link>
            </div>
            {/* logo */}
            <div className='text-xl md:font-semibold md:text-center flex-1 text-red-500'>
                <Link href="/">Fasty Pasty</Link>
            </div>
            {/* mobile menu */}

            <div className='md:hidden'>
                <Menu />
            </div>

            <div className='hidden md:flex items-center justify-end gap-4 flex-1'>
                <div className='md:absolute top-3 right-4 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 rounded-lg px-2 text-red-500'>
                    <Image src="/phone.png" alt="phone.png" width={20} height={20} />
                    <span>6455664</span>
                </div>
                {user ? (<Link href="/orders" className='text-red-500'>Orders</Link>) : (
                    <>
                        <h1 className='cursor-pointer text-red-500' onClick={() => setModalOpen(true)}>Login</h1>
                        <MoadalLogin modalOpen={modalOpen} setModalOpen={setModalOpen} >
                            <div className='p-6 flex items-center justify-center h-[calc(100vh-10rem)] '>
                                <div className='h-full  rounded-md flex flex-col p-6 gap-6'>
                                    <h1 className='font-bold'>Welcome!</h1>
                                    <p>log into your account or create new one</p>
                                    <button className='flex  items-center gap-4 p-4 ring-1  justify-center ring-slate-200 rounded-md'>
                                        <Image src="/google.png" alt="google.png" width={20} height={20} className='object-contain' />
                                        <span>Sign in with google</span>
                                    </button>
                                    <button className='flex  items-center gap-4 p-4 ring-1 justify-center  ring-slate-200  rounded-md'>
                                        <Image src="/facebook.png" alt="facebook.png" width={20} height={20} className='object-contain' />
                                        <span>Sign in with Facebook</span>
                                    </button>
                                    <p>Have a problem?<Link href="/">Contact us</Link></p>
                                </div>
                            </div>
                        </MoadalLogin></>)}

                <CartIcon />
            </div>
        </div>
    )
}

export default Navbar
