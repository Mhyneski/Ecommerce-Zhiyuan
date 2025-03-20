import React from 'react'

export default function Hero() {
    return (
        <div className='w-[850px] pb-40 ml-4 min-w-[800px] mt-20'>
            <h1 className='text-subtext text-7xl font-bold mb-4' style={{ fontFamily: "var(--font-roboto)" }}>CUE UP FOR  
            </h1>
            <h1 className='text-subtext text-7xl font-bold mb-4' style={{ fontFamily: "var(--font-roboto)" }}>SUCCESS - FIND THE
            </h1>
            <h1 className='text-subtext text-7xl font-bold inline mb-4 mr-3' style={{ fontFamily: "var(--font-roboto)" }}>PERFECT GEAR FOR 
            </h1>
            <p className='ml-2 text-subtext text-4xl inline absolute left-18 bottom-51 w-full' style={{ fontFamily: "var(--font-roboto)" }} >
              <span className='text-7xl font-bold text-subtext'>YOUR</span>  <span style={{ fontFamily: "var(--font-roboto)" }} className='absolute italic bottom-5 ml-3 text-4xl'>PERFECT SHOT</span>
            </p>
        </div>
    )
}
