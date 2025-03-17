import React from 'react'

export default function page() {
  return (
    <div className='h-[93vh] md:flex items-center justify-center'>
      <div className='w-1/2 flex flex-col justify-center items-center gap-2'>
        <h1 className='text-cosmos font-bold text-4xl'>Mhyne jhestine P Magno</h1>
        <img src="../images/Mhyne.jpg" alt="" className='h-[500px] max-w-full'/>
        <h2 className='text-walnut text-3xl'>Front-end Developer</h2>
      </div>
      <div className='w-1/2 flex flex-col justify-center items-center gap-2'>
        <h1 className='text-cosmos font-bold text-4xl'>Jarod Pilipina</h1>
        <img src="../images/hev.jpg" alt="" className='h-[500px] max-w-full' />
        <h2 className='text-walnut text-3xl'>Back-end Developer</h2>
      </div>
    </div>
  )
}
