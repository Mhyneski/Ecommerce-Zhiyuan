"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Intro({ 
  onAnimationEnd, 
  imageSrc = "/images/8ball.png" 
}: { 
  onAnimationEnd: () => void,
  imageSrc?: string 
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 700);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => onAnimationEnd()}
    >
      {isVisible && (
        <motion.div
          key="intro"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: -1000, opacity: 0 }}
          transition={{ 
            exit: { duration: 1.5, ease: "easeInOut" }
          }}
          className="fixed inset-0 flex justify-center items-center bg-[linear-gradient(90deg,#000000,#1584bb)] z-50"
        >
          <motion.div 
            className="w-60 h-60 rounded-full overflow-hidden"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          >
            <Image
              src={imageSrc}
              alt="Spinning 8-ball"
              width={2000}
              height={1000}
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}