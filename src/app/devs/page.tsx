import React from 'react'

const Developer = [
  {
    name: "Mhyne jhestine Magno",
    role: "Front-end Developer",
    image: "../images/Mhyne.jpg"
  },
  {
    name: "Jarod Pilipina",
    role: "Back-end Developer",
    image: "../images/hev.jpg"
  },
]

export default function page() {
  return (
    <div className='h-[93vh] md:flex items-center justify-center'>
      {Developer.map((developer, index) => (
        <div key={index} className='w-1/2 flex flex-col justify-center items-center gap-2'>
          <h1 className='text-cosmos font-bold text-4xl'>{developer.name}</h1>
          <img src={developer.image} alt="" className='h-[500px] max-w-full' />
          <h2 className='text-walnut text-3xl'>{developer.role}</h2>
        </div>
      ))}
    </div>
  )
}
