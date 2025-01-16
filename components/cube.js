"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export function CubeGrid() {
  // State to keep track of the currently active cube
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Interval to update the active cube every 1 second
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 9);
    }, 1000); // Change active cube every 1000ms (1 second)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-2 w-[200px] h-[200px]">
      {Array.from({ length: 9 }).map((_, i) => (
        <motion.div
          key={i}
          className="bg-white/90 rounded-sm"
          // Conditionally animate the cube based on whether it's active
          animate={
            i === activeIndex
              ? { y: -20, scale: 1.5, zIndex: 10 } // Move up and scale up
              : { y: 0, scale: 1, zIndex: 1 } // Original position and scale
          }
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.5,
          }}
        />
      ))}
    </div>
  );
}

export function CubeCluster() {
  return (
    <div className="relative w-[300px] h-[300px]">
      {Array.from({ length: 27 }).map((_, i) => {
        const x = (i % 3) * 40;
        const y = Math.floor((i % 9) / 3) * 40;
        const z = Math.floor(i / 9) * 40;

        return (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-white/10 rounded-sm"
            style={{
              transform: `translate3d(${x}px, ${y}px, ${z}px)`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: i * 0.05,
              duration: 0.5,
            }}
          />
        );
      })}
    </div>
  );
}
