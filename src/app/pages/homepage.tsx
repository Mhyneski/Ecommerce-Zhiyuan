import React from 'react';
import Hero from "../components/hero";
import Navbar from "../components/navbar";

export default function Homepage() {
    return (
        <div className='flex flex-col min-h-screen overflow-hidden'>
            <Navbar />
            
            <div className='relative flex flex-grow items-center justify-start px-16'>
                <Hero />
                <img 
                    src="../images/ongod.png" 
                    alt="" 
                    className='absolute -right-[32px] -bottom-[280px] w-[1080px] h-auto max-h-[85vh] pointer-events-none'
                />
            </div>
            
            <div className='h-[200px] bg-subtext w-full mt-auto'>
                
            </div>
        </div>
    );
}
