'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Image src={open ? "/close.png" : "/open.png"} alt="menu icon" width={20} height={20} onClick={()=>setOpen(!open)} />

        </div>
    )
}

export default Menu
