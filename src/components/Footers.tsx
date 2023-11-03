import Link from 'next/link'
import React from 'react'

const Footers = () => {
    return (
        <div className='flex justify-between items-center text-red-500 md:h-24 p-10 lg:p-20'>
            <Link href="/" className='font-semibold text-xl'>Fasty PAsty</Link>
            <p>ALL RIGHTS RESERVED.</p>
        </div>
    )
}

export default Footers
