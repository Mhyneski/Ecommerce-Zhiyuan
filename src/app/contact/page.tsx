"use client"
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { PiHeadset } from "react-icons/pi";
import { CiFacebook } from "react-icons/ci";
import { RiTiktokLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion"
import { fadeIn } from "../../framerMotion/variants";

const Details = [
    {
        design:"p-4 md:p-4 md:pl-9 md:pt-5 lg:absolute shadow-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] lg:top-17 lg:left-0 rounded-4xl bg-[linear-gradient(90deg,#000000,#1584bb)] w-[350px] h-[250px] md:h-[250px] md:w-[349px] z-2",
        svg: <CiLocationOn size={30} className="text-white hidden lg:block" />,
        title: "OFFICE LOCATION",
        description: `10TH FLOOR ALVEO PARK TRIANGLE TOWER,
32ND STREET CORNER 11TH AVENUE, BONIFACIO GLOBAL CITY, 
TAGUIG, PHILIPPINES`
    },
    {
        design: "p-4 md:p-4 md:pl-9 md:pt-5 lg:absolute shadow-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] lg:-bottom-7 lg:left-81 rounded-4xl bg-[linear-gradient(90deg,#000000,#1584bb)] w-[350px] h-[250px] xl:h-[250px] xl:w-[349px] z-1",
        svg: <CiClock2 size={30} className="text-white hidden lg:block" />,
        title: "WORKING HOURS",
        description: `MONDAY TO SUNDAY 
`,
        number: "8AM - 7PM"
    },
    {
        design: "p-4 md:p-4 md:pl-9 md:pt-5 lg:absolute shadow-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] lg:right-5 lg:top-10 rounded-4xl bg-[linear-gradient(90deg,#000000,#1584bb)] w-[350px] h-[250px] xl:h-[250px] xl:w-[349px]",
        svg: <PiHeadset size={30} className="text-white hidden lg:block" />,
        title: "COMMUNICATION",
        description: "bilmagic5@gmail.com",
        number: "09192305994"
    }
]

export default function Contactpage() {
    return (
        <div id="contact" className="min-h-screen w-full flex flex-col">
            <div className="relative h-[90vh] flex flex-col lg:flex-row items-center p-4 pt-12">
                <div className="relative flex justify-center w-[900px] z-1">
                    <motion.div 
                    variants={fadeIn("up", 0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
                    className="absolute -top-20 -left-13 right-0 rounded-full bg-[linear-gradient(90deg,#000000,#1584bb)] h-[280px] w-[280px] -z-1"></motion.div>
                    <motion.div
                    variants={fadeIn("up", 0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }} 
                    className="absolute -bottom-15 right-10 rounded-full bg-[linear-gradient(90deg,#000000,#1584bb)] h-[180px] w-[180px] -z-1 hidden lg:block"></motion.div>
                    
                    <motion.iframe
                    variants={fadeIn("down", 0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }} 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3861.8198800561004!2d121.0537008!3d14.5522906!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c907d9601225%3A0x8495ad7d16ee750c!2sAlveo%20Park%20Triangle%20Tower!5e0!3m2!1sen!2sph!4v1742818377087!5m2!1sen!2sph"
                        width="650"
                        height="550"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-[350px] w-[350px] md:w-[650px] lg:w-[650px] lg:h-[550px]"
                    ></motion.iframe>
                </div>
                <div className="absolute text-3xl opacity-50 shadow-2xl  top-30 rounded-full right-220 text-white font-bold" style={{ fontFamily: "var(--font-antonio)" }}>CONTACT US</div>

                {/* bottom left circle */}
                <motion.div 
                variants={fadeIn("down", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="absolute -bottom-9 -left-5 rounded-full bg-[linear-gradient(90deg,#000000,#1584bb)] h-[120px] w-[120px] z-1"></motion.div>

                {/*top right circle */}
                <motion.div 
                variants={fadeIn("up", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }}
                className="absolute right-19 -top-11 rounded-full bg-[linear-gradient(90deg,#000000,#1584bb)] h-[120px] w-[120px] z-1"></motion.div>

                <motion.div
                variants={fadeIn("left", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.1 }} 
                className="flex flex-row md:flex-row gap-5 p-4 relative items-center h-[500px] w-[500px] md:w-[900px] justify-center">
                    {Details.map((details, index) => (
                        <div
                            key={index} className={details.design}>
                            {details.svg}
                            <h1 className="text-white font-bold xl:pt-2 xl:mt-2 xl:mb-2" style={{ fontFamily: "var(--font-roboto)" }}>{details.title}</h1>
                            <p className="xl:pt-5 text-white text-sm lg:text-lg" style={{ fontFamily: "var(--font-roboto)" }}>{details.description}</p>
                            <p className="text-white" style={{ fontFamily: "var(--font-roboto)" }}>{details.number}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
            <footer className="h-[10vh] bg-[linear-gradient(90deg,#000000,#1584bb)] flex justify-between relative z-2">
                <p className=" text-white uppercase lg:pl-20 lg:pt-4 text-2xl " style={{ fontFamily: "var(--font-dm-sans)" }}>Get in touch with us</p>
                <div className="flex flex-col lg:pr-13 lg:pt-3">
                    <p className="text-white text-2xl" style={{ fontFamily: "var(--font-dm-sans)" }}>FOLLOW US</p>
                    <div className="flex pt-1 gap-2">
                        <CiFacebook className="text-white" size={20} />
                        <RiTiktokLine className="text-white" size={20} />
                        <FaInstagram className="text-white" size={20} />
                    </div>
                </div>
            </footer>
        </div>
    );
}
