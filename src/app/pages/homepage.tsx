import React from 'react';
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Button from '../components/button';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

export default function Homepage() {
    return (
        <div className='relative flex flex-col min-h-screen'>
            <Navbar />
            <div className=' flex flex-grow items-center px-16 ml-19 mb-25'>
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
                            onClick={() => alert("NIGGA CHECK!")}
                            design='shadow-lg -mt-5 w-[300px] py-5 cursor-pointer text-1xl'
                        />
                    </div>
                </motion.div>
                <img src="../images/homeeffect.png" alt="" className='absolute w-[70%] opacity-72 -left-70 bottom-41' />
                <motion.img
                variants={fadeIn("left", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                    src="../images/ongod.png"
                    alt=""
                    className='absolute -right-[48px] -bottom-[85px] w-[1020px] h-auto max-h-[85vh] pointer-events-none'
                />
            </div>
        </div>
    );
}
