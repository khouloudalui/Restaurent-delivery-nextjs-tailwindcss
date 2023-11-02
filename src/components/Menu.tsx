'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 1, title: "Menu", url: "/menu" },
    { id: 1, title: "Working Hours", url: "/" },
    { id: 1, title: "Contact", url: "/" },
]


const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div >
            <Image src={open ? "/close.png" : "/open.png"} alt="menu icon" width={20} height={20} onClick={() => setOpen(!open)} />
            <div className='w-full flex flex-col bg-red-500 text-white  absolute left-0 top-24 h-[calc(100vh-6rem)] gap-8 text-2xl p-4 z-10 items-center justify-center'>
                {links.map(item => (<Link href={item.url} key={item.id}>{item.title}</Link>))}
            </div>

        </div>
    )
}

export default Menu
