import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const Details = [
  {
    image: "../images/8ball.png",
    description: "Welcome to Bilmagic, your premier destination for high-quality billiards equipment and accessories. As a brand under Zhiyuan Company.",
    color: "bg-darkGrayish",
    size: "text-3xl",
    width: "max-w-[300px]"
  },
  {
    image: "../images/10ball.png",
    description: "Bilmagic is your go-to hub for premium cue sticks and billiards gear. We craft our own Bilmagic-branded cue sticks with precision and expertise, catering to both professionals and enthusiasts.",
    color: "bg-darkBlueish",
    size: "text-2xl",
    width: "max-w-[280px]"
  },
  {
    image: "../images/3ball.png",
    description: "As a trusted distributor of top brands like Peri, we offer a diverse selection of high-performance cues—ensuring every player finds their perfect match.",
    color: "bg-lightGrayish",
    size: "text-3xl",
    width: "max-w-[350px]"
  },
];

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col items-center pt-17">
      <img src="../images/rack.png" className='w-470 absolute -right-223 -top-105' alt="rack" />
      <h1 className="text-center text-5xl mt-20 text-white">ABOUT US</h1>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-35 -ml-93 mt-35 max-w-6xl px-4">
        {Details.map((detail, index) => (
          <div key={index} className={`relative col-span-4 h-[450px] w-[365px] p-6 rounded-3xl shadow-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] ${detail.color} flex flex-col items-center text-center hover:scale-130 transition-all duration-300 ease-in-out`}>
            <img src={detail.image} alt="Billiard Ball" className="absolute -top-44 hover:scale-110 transition-all duration-300 ease-in-out w-200 h-85 object-cover" />
            <p className={`mt-20 ${detail.size} font-medium text-white ${detail.width} text-left`}>{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}