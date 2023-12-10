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
    const user = false;

    const closeMenu = () => {
        setOpen(false);
    };
    const menuLinks = links.map((item) => (
        <Link href={item.url} key={item.id} onClick={closeMenu}>
            {item.title}
        </Link>
    ));
    const userLink = user ? (

        <Link href="/orders" onClick={closeMenu}>
            Orders
        </Link>

    ) : (
        <Link href="/login" onClick={closeMenu}>
            Login    </Link>
    );

    return (
        <div >
            <Image
                src={open ? "/close.png" : "/open.png"}
                alt="menu icon"
                width={20}
                height={20}
                onClick={() => setOpen(!open)}
            />
            {open &&
                <div className='w-full flex flex-col bg-red-500 text-white  absolute left-0 top-24 h-[calc(100vh-6rem)] gap-8 text-2xl p-4 z-10 items-center justify-center'>
                    {menuLinks}
                    {userLink}
                </div>}

        </div>
    )
}

export default Menu
