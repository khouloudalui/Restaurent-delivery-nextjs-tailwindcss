import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      <div className='flex-1 flex flex-col justify-center items-center text-white gap-4 text-center gap-8  p-6 '>
        <h1 className='text-5xl font-bold xl:text-6xl'>Delicious burger & frensh fry</h1>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolores ullam ratione ipsum earum natus aperiam eveniet cumque? </p>
        <CountDown />
        <button className=" text-white  px-3 py-3 bg-red-500 rounded-md">
          Order now
        </button>
      </div>
      <div className='relative flex flex-1 w-full p-16 md:h-full'>
        <Image src="/offerProduct.png" alt="" fill className='object-contain' />
      </div>
    </div>
  )
}

export default Offer
