import { div } from 'framer-motion/client'
import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <div className='fixed w-full z-2'>
    <div className='flex'>
        <img src="../images/bilmagicLogo.png" alt="" className='h-[70px] object-cover object-center w-auto mt-3 ml-3'/>
    <nav className='flex justify-center -ml-55 flex-1'>
        <div className='flex justify-evenly mt-6 w-[800px]'>
          <div className='group'>
            <Link href="" className='text-white text-lg hover:underline transition-all duration-500 '>HOME</Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500">
            </div>
            </div>
            <Link href="" className='text-white text-lg'>ABOUT US</Link>
            <Link href="" className='text-white text-lg'>SHOP</Link>
            <Link href="" className='text-white text-lg'>CONTACT US</Link>
        </div>
    </nav>
    </div>
    </div>
  )
}