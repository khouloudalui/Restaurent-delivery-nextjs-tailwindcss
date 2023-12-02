import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
    return (
        <Link href="/cart" className='flex items-center gap-4 text-red-500'>
            <div className='relative w-8 h-8 md:w-5 md:h-5'>
                <Image src="/cart.png" alt="cart.png" fill />
            </div>
            <span> Cart(3)</span>
        </Link>
    )
}

export default CartIcon
//FIXME:cart link dnst center