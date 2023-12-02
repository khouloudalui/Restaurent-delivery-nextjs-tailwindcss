import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className=' h-[calc(100vh-9rem)] md:h-[calc(100vh-8rem)] flex flex-col text-red-500 overflow-hidden lg:flex-row'>
      <div className='h-1/2 p-4 flex flex-col justify-center lg:h-full lg:w-2/3 lg:px-20 xl:px-40  overflow-y-auto'>
        
       <div className='pt-[9rem] md:pt-[9rem] lg:pt-0'>
       <div className='flex items-center justify-between mb-4    '>
          <Image src="/temporary/p1.png" alt="p1.png" width={100} height={100} />
          <div>
            <h1 className='uppercase font-bold text-xl'>icilian</h1>
            <span>large</span>
          </div>
          <h2 className='font-bold'>55dt</h2>
          <span className='cursor-pointer'>X</span>
        </div>

       

       


        <div className='flex items-center justify-between mb-4 '>
          <Image src="/temporary/p1.png" alt="p1.png" width={100} height={100} />
          <div>
            <h1 className='uppercase font-bold text-xl'>icilian</h1>
            <span>large</span>
          </div>
          <h2 className='font-bold'>55dt</h2>
          <span className='cursor-pointer'>X</span>
        </div>



        <div className='flex items-center justify-between mb-4 '>
          <Image src="/temporary/p1.png" alt="p1.png" width={100} height={100} />
          <div>
            <h1 className='uppercase font-bold text-xl'>icilian</h1>
            <span>large</span>
          </div>
          <h2 className='font-bold'>55dt</h2>
          <span className='cursor-pointer'>X</span>
        </div>
       </div>

      </div>
      

      


      

      <div className='h-1/2 p-6  bg-slate-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 lg:px-11 xl:px-10 2xl:text-xl 2xl:gap-6'>
        <div className='flex  justify-between'>
          <span>subtotal (3 items)</span>
          <span>18dt</span>
        </div>

        <div className='flex  justify-between'>
          <span>service coat</span>
          <span>7dtdt</span>
        </div>

        <div className='flex  justify-between'>
          <span>delivary</span>
          <span>5dtdt</span>
        </div>


        <hr className='my-2'/>

        <div className='flex  justify-between'>
          <span>total</span>
          <span>5dtdt</span>
        </div>

        <button className='bg-red-500 text-white p-3 rounded-md w-1/2 self-end '>checkout</button>
      </div>
    </div>
  )
}

export default CartPage
