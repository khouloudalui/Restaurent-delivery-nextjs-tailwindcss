import Link from 'next/link'
import React from 'react'

const Footers = () => {
    return (
        <div className='flex justify-between items-center text-red-500 h-12 p-4 md:h-24 px-10 lg:px-20 xl:px-40'>
            <Link href="/" className='font-semibold text-xl'>Fasty PAsty</Link>
            <p>ALL RIGHTS RESERVED.</p>
        </div>
    )
}

export default Footers
