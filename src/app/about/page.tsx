"use client"
import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Details = [
  {
    image: "../images/8ball.png",
    description: "Welcome to Bilmagic, your premier destination for high-quality billiards equipment and accessories. As a brand under Zhiyuan Company.",
    color: "bg-[linear-gradient(135deg,#a6a6a6,#ffffff)]",
    size: "text-2xl",
    width: "max-w-[300px]"
  },
  {
    image: "../images/10ball.png",
    description: "Bilmagic is your go-to hub for premium cue sticks and billiards gear. We craft our own Bilmagic-branded cue sticks with precision and expertise, catering to both professionals and enthusiasts.",
    color: "bg-[linear-gradient(90deg,#000000,#1584bb)]",
    size: "text-2xl",
    width: "max-w-[280px]"
  },
  {
    image: "../images/3ball.png",
    description: "As a trusted distributor of top brands like Peri, we offer a diverse selection of high-performance cues—ensuring every player finds their perfect match.",
    color: "bg-[linear-gradient(90deg,#000000,#737373)]",
    size: "text-2xl",
    width: "max-w-[300px]"
  },
];

export default function Aboutpage() {

  const rackVariants = {
    hidden: {
      x: 300,
      opacity: 0
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        duration: 0.8
      }
    }
  };

  return (
    <motion.div
      id='about'
      className="relative min-h-screen flex flex-col items-center pt-17"
    >


      <motion.img
        src="/images/rack.png"
        className="w-[5000px] absolute left-[900px] -top-[460px] rotate-3"
        alt="rack"
        variants={rackVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      />



      <h1 className="text-center text-5xl mt-20 opacity-50 font-bold text-white" style={{ fontFamily: "var(--font-antonio)" }}>ABOUT US</h1>

      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-12 mt-20 md:gap-35 md:-ml-93 md:mt-35 max-w-6xl px-4">

        {Details.map((detail, index) => (
          <div
            key={index}
            className={`relative md:col-span-4 h-[450px] w-[365px] p-6 rounded-3xl shadow-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] ${detail.color} flex flex-col items-center text-center hover:scale-130 transition-all duration-300 ease-in-out`}>
            <img
              src={detail.image}
              alt="Billiard Ball"
              className="absolute -top-44 hover:scale-110 transition-all duration-300 ease-in-out w-50 h-85 object-cover"
            />
            <p className={`mt-20 ${detail.size} font-medium text-white ${detail.width} text-left`} style={{ fontFamily: "var(--font-dm-sans)" }}>
              {detail.description}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}