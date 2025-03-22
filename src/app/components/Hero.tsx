import React from 'react';

export default function Hero() {
    return (
        <div className='w-[850px] pb-40 ml-2 min-w-[800px] mt-16 -mb-10 relative'>
            <h1 className='text-subtext text-7xl font-bold mb-5' style={{ fontFamily: "var(--font-roboto)" }}>CUE UP FOR</h1>
            <h1 className='text-subtext text-7xl font-bold mb-5' style={{ fontFamily: "var(--font-roboto)" }}>SUCCESS - FIND THE</h1>
            <h1 className='text-subtext text-7xl font-bold inline mb-5 mr-3' style={{ fontFamily: "var(--font-roboto)" }}>PERFECT GEAR FOR</h1>

            {/* FIXED: Wrap the sentence in a flexbox to align properly */}
            <div className='flex items-center gap-3 mt-2'>
                <span className='text-7xl font-bold text-subtext'>YOUR</span>
                <span className='italic text-4xl font-bold text-subtext'>PERFECT SHOT</span>
            </div>
        </div>
    );
}
