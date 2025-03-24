"use client"
import React, { useRef } from 'react';
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Button from '../components/button';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

export default function Homepage() {  
    return (
        <div id='home' className='relative flex flex-col min-h-screen'>
            <Navbar/>
            <div className=' flex flex-grow items-center md:px-16 mb-24'>
                <motion.div
                    variants={fadeIn("right", 0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    className='z-2'>
                    <Hero />
                    <div className=''>
                        <Button
                            text='SHOP WITH CONFIDENCE'
                            onClick={() => alert("MIC CHECK!")}
                            design='shadow-lg w-[300px] cursor-pointer text-1xl'
                        />
                    </div>
                </motion.div>
                <img src="../images/homeeffect.png" alt="" className='absolute w-[49%] opacity-72 -left-52 bottom-79' />
                <motion.img
                variants={fadeIn("left", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                    src="../images/ongod.png"
                    alt=""
                    className='absolute hidden md:flex -right-[48px] -bottom-[85px] w-[1020px] h-auto max-h-[85vh] pointer-events-none'
                />
            </div>
        </div>
    );
}
