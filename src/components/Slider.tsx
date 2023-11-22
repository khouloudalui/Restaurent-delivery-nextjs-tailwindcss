'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  { id: 1, title: "test1", image: "/slide2.png" },
  { id: 2, title: "test2", image: "/slide2.png" },
  { id: 3, title: "test3", image: "/slide3.jpg" }
]


const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    // const interval = setInterval(
    //   () => setCurrentSlide(prev => prev === 2 ? 0 : prev + 1), 2000)
    // return () => clearInterval(interval)
  }, [])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-6.5rem)] lg:flex-row'>
      <div className='flex items-center justify-center flex-col gap-8 text-red-500 font-bold flex-1 bg-orange-50'>
        <h1 className='text-3xl md:text-4xl text-center uppercase p-4'>
          {data[currentSlide].title}</h1>
        <button className='bg-red-500 text-white py-4 px-8'>order now</button>
      </div>
      <div className='w-full relative flex-1 lg:h-full'>
        <Image src={data[currentSlide].image} alt="slide1.png" fill className='object-cover' />
      </div>
    </div>
  )
}

export default Slider
