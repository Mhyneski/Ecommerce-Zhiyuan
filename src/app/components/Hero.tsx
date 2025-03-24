import React from 'react';

export default function Hero() {
    return (
        <div className='w-[500px] md:w-[1000px] pb-10 md:pb-20 md:mt-20 md:-mb-10 relative'>
            <h1 className='text-subtext text-5xl md:text-8xl font-bold mb-5' style={{ fontFamily: "var(--font-roboto)" }}>CUE UP FOR</h1>
            <h1 className='text-subtext text-5xl md:text-8xl font-bold mb-5' style={{ fontFamily: "var(--font-roboto)" }}>SUCCESS - FIND THE</h1>
            <h1 className='text-subtext text-5xl md:text-8xl font-bold inline mb-5 mr-3' style={{ fontFamily: "var(--font-roboto)" }}>PERFECT GEAR FOR</h1>

            
            <div className='flex items-center gap-3 mt-2'>
                <span className='text-5xl md:text-7xl font-bold text-subtext'>YOUR</span>
                <span className='italic text-2xl md:text-4xl font-bold text-subtext'>PERFECT SHOT</span>
            </div>
        </div>
    );
}
