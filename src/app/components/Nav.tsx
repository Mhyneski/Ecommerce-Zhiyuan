import React from 'react'
import Link from "next/link";

export default function Nav() {
  return (
    <div>
      <nav className="h-[60px] items-center justify-evenly border-solid hidden md:flex">
        <Link href="/" className="text-3xl p-4 font-bold hover:bg-cosmos rounded-full hover:text-white cursor-pointer transition-all duration-300 ease-in-out">Zhiyuan</Link>
        <Link href="/shop" className="text-3xl p-4 font-bold hover:bg-cosmos rounded-full hover:text-white cursor-pointer transition-all duration-300 ease-in-out">Shop</Link>
        <Link href="/about" className="text-3xl p-4 font-bold hover:bg-cosmos rounded-full hover:text-white cursor-pointer transition-all duration-300 ease-in-out">About Us</Link>
        <Link href="/devs" className="text-3xl p-4 font-bold hover:bg-cosmos rounded-full hover:text-white cursor-pointer transition-all duration-300 ease-in-out">Developers</Link>
      </nav>
    </div>
  )
}
