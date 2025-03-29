import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Ferris Wheel Component
const FerrisWheel = () => {
    // Sample items - replace with actual product images
    const items = [
        { name: "Playing Cue", image: "/images/3ball.png" },
        { name: "Tip", image: "/images/8ball.png" },
        { name: "Chalk", image: "/images/10ball.png" },
        { name: "Case", image: "/images/crical.png" },
        { name: "Bridge", image: "/images/ongod.png" },
        { name: "Glove", image: "/images/rack.png" },
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
                                y: pos.y + 200, // Move down when exiting
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
                                className="bg-gray-400/70 rounded-xl p-4 shadow-lg flex items-center justify-center"
                                style={{
                                    width: "200px",
                                    height: "200px",
                                }}
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            {pos.visible && (
                                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-white font-medium text-center whitespace-nowrap">
                                    {item.name}
                                </div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default FerrisWheel;