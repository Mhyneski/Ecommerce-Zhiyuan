import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Ferris Wheel Component
const FerrisWheel = () => {
    const items = [
        { name: "Playing Cue", image: "/images/playingcue.png" },
        { name: "BREAK CUE", image: "/images/breakcue.png" },
        { name: "JUMP CUE", image: "/images/jumpcue.png" },
        { name: "JUMP BREAK CUE", image: "/images/jumpbreakcue.png" },
        { name: "BATT", image: "/images/batt.png" },
        { name: "SHAFT", image: "/images/shaft.png" },
        { name: "BAG / CASE", image: "/images/bagcase.png" },
        { name: "CUE EXTENSION", image: "/images/cueext.png" },
        { name: "CUE TIP", image: "/images/cuetip.png" },
        { name: "CHALK", image: "/images/chalk.png" },
        { name: "GLOVES", image: "/images/gloves.png" },
        { name: "ACCESSORIES / TOOLS", image: "/images/accesories.png" },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-rotate the wheel every 3 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [items.length]);

    // Calculate position of each item
    const calculatePosition = (index: number) => {
        const totalItems = items.length;
        const angle = (Math.PI * (index - activeIndex) * 2) / totalItems;
        const radius = 200;

        // Final position (when item is centered)
        const x = -Math.cos(angle) * radius;
        const y = -Math.sin(angle) * radius;

        // Starting position (above the center)
        const startY = -500; // Start higher up
        const startX = 0; // Start centered horizontally

        // Show only one item at a time
        const visible = index === activeIndex;

        return { 
            startX, 
            startY, 
            x, 
            y, 
            visible,
            zIndex: visible ? 100 : -1 
        };
    };

    return (
        <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
            <div className="relative h-full" style={{ perspective: "1000px" }}>
                {items.map((item, index) => {
                    const pos = calculatePosition(index);
                    return (
                        <motion.div
                            key={`wheel-item-${index}`}
                            className="absolute top-0 left-0"
                            initial={{
                                x: pos.startX,
                                y: pos.startY,
                                opacity: 0,
                                scale: 0.7,
                            }}
                            animate={{
                                x: pos.x,
                                y: pos.y,
                                opacity: pos.visible ? 1 : 0,
                                scale: pos.visible ? 1 : 0.7,
                            }}
                            exit={{
                                x: pos.x * 1.5,
                                y: pos.y + 200, 
                                opacity: 0,
                                scale: 0.5,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                duration: 0.8,
                            }}
                            style={{
                                zIndex: pos.zIndex,
                                transformOrigin: "center center",
                            }}
                        >
                            <div
                                className="bg-gradient-to-b from-[#a6a6a6b3] to-[#ffffffb3] rounded-4xl p-4 shadow-lg flex flex-col items-center justify-center"
                                style={{
                                    width: "290px",
                                    height: "260px",
                                }}
                            >
                                {pos.visible && (
                                <div className="flex justify-start text-lg  w-full text-white uppercase mb-3 pl-4" style={{ fontFamily: "var(--font-roboto)" }}>
                                    {item.name}
                                </div>
                            )}
                            <div className="h-full">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                                </div>
                            </div>
                            
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default FerrisWheel;