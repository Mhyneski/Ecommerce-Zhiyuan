import Link from 'next/link'
import React from 'react'

export default function navbar() {
  return (
    <div className='flex'>
        <img src="../images/bilmagicLogo.jpg" alt="" className='h-[70px] object-cover object-center w-auto mt-3 ml-3'/>
    <nav className='flex justify-center -ml-10 flex-1'>
        <div className='flex justify-evenly mt-5 w-[800px]'>
            <Link href="" className='text-subtext text-2xl'>HOME</Link>
            <Link href="" className='text-subtext text-2xl'>ABOUT US</Link>
            <Link href="" className='text-subtext text-2xl'>SHOP</Link>
            <Link href="" className='text-subtext text-2xl'>CONTACT US</Link>
        </div>
    </nav>
    </div>
  )
}
