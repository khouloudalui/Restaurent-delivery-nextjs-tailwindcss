'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import CartIcon from './CartIcon'

const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Working Hours", url: "/" },
    { id: 4, title: "Contact", url: "/" },
]


const Menu = () => {
    const [open, setOpen] = useState(false)
    const user = true;
    return (
        <div >
            <Image src={open ? "/close.png" : "/open.png"} alt="menu icon" width={20} height={20} onClick={() => setOpen(!open)} />
            {open && <div className='w-full flex flex-col bg-red-500 text-white  absolute left-0 top-24 h-[calc(100vh-6rem)] gap-8 text-2xl p-4 z-10 items-center justify-center'>
                {links.map(item => (<Link href={item.url} key={item.id} onClick={() => setOpen(false)}>{item.title}</Link>))}
                {user ? <Link href="/login" onClick={() => setOpen(false)}>Login</Link>
                    : <Link href="/orders" onClick={() => setOpen(false)}>Orders</Link>}
                <Link href="/cart" onClick={() => setOpen(false)}><CartIcon /></Link>
            </div>}

        </div>
    )
}

export default Menu
