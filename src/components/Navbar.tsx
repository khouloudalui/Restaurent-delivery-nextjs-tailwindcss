import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center  h-12 text-red-500 p-4 border-b-2 border-b-red-500 '>
            <div>
                <Link href="/">Fasty Pasty</Link>
            </div>
            <div>
                <Menu />
            </div>
        </div>
    )
}

export default Navbar
