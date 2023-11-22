'use client'
import React from 'react'
import Countdown from 'react-countdown'


const endingDate= new Date("2023-11-25")
const CountDown = () => {
  return (
    <div className='text-orange-300 text-5xl font-bold' ><Countdown date={endingDate}/></div>
    
  )
}

export default CountDown
