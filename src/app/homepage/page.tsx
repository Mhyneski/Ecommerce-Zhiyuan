import React from 'react'
import Navbar from '../components/navbar'
import {motion} from "framer-motion"
import { fadeIn } from "../../framerMotion/variants";

export default function
    () {
    return (
        <div id='home' className='min-h-screen flex'>
            <Navbar />
            <div
            className='hidden lg:block absolute -left-270 -top-290 w-full h-[2000px] bg-[linear-gradient(180deg,#000000,#1584bb)] rotate-50'></div>
            <div className='min-h-screen w-1/2 hidden lg:block'>
                <motion.div
                 variants={fadeIn("down", 0)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.1 }} 
                className='h-[50vh] relative flex items-center justify-center'>
                    <h1 className='lg:text-[7rem] xl:text-[10rem] 3xl:text-[14rem] z-1 absolute left-4 top-42 text-white font-bold opacity-16 tracking-tighter' style={{ fontFamily: "var(--font-antonio)" }}>BILMAGIC</h1>
                    <h1 className='lg:text-[7rem] xl:text-[12rem] 3xl:text-[14rem] absolute lg:-left-15 lg:-bottom-0 xl:-left-35 xl:-bottom-40 3xl:-left-53 3xl:-bottom-49 rotate-270 z-1 text-white tracking-tighter font-bold drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)]' style={{ fontFamily: "var(--font-antonio)" }}>BILMAGIC</h1>
                    {/* <motion.button variants={fadeIn("right", 0)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.1 }}  className='absolute top-128 right-90 cursor-pointer text-white bg-[linear-gradient(180deg,#a6a6a6,#ffffff)] z-1 text-sm p-4 px-6 font-bold'>SHOP WITH CONFIDENCE</motion.button> */}
                </motion.div>
            </div>
            <div>

            </div>

            <div className='flex flex-col w-full lg:w-1/2 justify-center items-center mt-6 gap-6'>
                
                <motion.div
                  variants={fadeIn("up", 0)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.1 }} 
                className='bg-[linear-gradient(180deg,#000000,#1584bb)] h-[300px] w-[400px] lg:h-[400px] lg:w-[480px] xl:w-[600px] 2xl:h-[450px] 2xl:w-[680px] rounded-4xl p-6 flex flex-col items-center '>

                    <div className='flex flex-col items-center justify-center mt-8'>
                        <h1 className='text-white text-xl md:text-3xl mb-4'>FLASH SALE !</h1>
                        <h2 className='text-white text-sm md:text-lg'>GET 20% OFF - LIMITED TIME OFFER!</h2>
                    </div>


                    <div className='flex gap-4 text-white mt-10 md:mt-20' style={{ fontFamily: "var(--font-dm-sans)" }}>
                        <div className='flex flex-col items-center'>
                            <p className='md:text-5xl pb-2'>05</p>
                            <span className='text-sm md:text-1xl'>DAYS</span>
                        </div>
                        <span className='text-3xl'>:</span>
                        <div className='flex flex-col items-center'>
                            <p className='md:text-5xl pb-2'>14</p>
                            <span className='text-sm md:text-1xl'>HOURS</span>
                        </div>
                        <span className='text-3xl'>:</span>
                        <div className='flex flex-col items-center'>
                            <p className='md:text-5xl pb-2'>50</p>
                            <span className='text-sm md:text-1xl'>MINUTES</span>
                        </div>
                        <span className='text-3xl'>:</span>
                        <div className='flex flex-col items-center'>
                            <p className='md:text-5xl pb-2'>30</p>
                            <span className='text-sm md:text-1xl'>SECONDS</span>
                        </div>
                    </div>


                    <button className='bg-[linear-gradient(180deg,#a6a6a6,#ffffff)] text-[#0b3452] rounded-full py-2 w-40 mt-10 2xl:mt-19 md:text-1xl cursor-pointer uppercase font-bold'>Shop Now</button>
                </motion.div>


                <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 xl:mt-7'>
                    <motion.div
                     variants={fadeIn("right", 0)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: false, amount: 0.1 }}  
                    className='bg-[linear-gradient(90deg,#000000,#1584bb)] h-[150px] w-[400px] md:h-[220px] lg:h-[150px] lg:w-[480px] xl:w-[300px] 2xl:h-[220px] 2xl:w-[340px] rounded-4xl p-4 flex flex-col justify-between items-center md:items-start'>
                        <p className='text-white text-sm 2xl:-mb-17 md:text-[1rem] pl-3 pt-3'>FLAT 20% DISCOUNT</p>
                        <h3 className='text-white text-lg md:text-3xl pl-3 pb-5'>LATEST CHALKS</h3>
                        <span className='uppercase text-start w-full pr-3 text-white'>view more</span>
                    </motion.div>
                    <motion.div 
                     variants={fadeIn("left", 0)}
                     initial="hidden"
                     whileInView="show"
                     viewport={{ once: false, amount: 0.1 }} 
                    className='relative bg-[linear-gradient(135deg,#000000,#1584bb)] items-center h-[150px] w-[400px] md:h-[220px] lg:h-[150px] lg:w-[480px] xl:w-[300px] 2xl:h-[220px] 2xl:w-[340px] rounded-4xl md:items-start p-4 flex flex-col justify-between'>
                        <p className='text-white text-sm lg:-mb-9 xl:-mb-5 2xl:-mb-17 md:text-[1rem] pl-3 pt-3'>FLAT 15% DISCOUNT</p>
                        <h3 className='text-white text-lg md:text-3xl pl-2 pt-4'>CRICAL CUE STICKS COLLECTION</h3>
                        <span className='uppercase text-start w-full pr-3 text-white'>view more</span>
                        <img src="/images/crical.png" alt="" className='absolute right-0 bottom-5 w-[70%] object-cover hidden 2xl:block' />
                    </motion.div>
                </div>
            </div>

        </div>
    )
}
