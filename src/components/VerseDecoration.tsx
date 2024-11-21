import React from 'react';
import { motion } from 'framer-motion';

export const VerseDecoration = () => {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -90 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="absolute -z-10 w-full h-full"
    >
      <svg
        viewBox="0 0 500 500"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10"
      >
        <g transform="translate(250,250)">
          {[...Array(8)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 45})`}>
              <path
                d="M0 -200 C50 -150 50 -100 0 -50 C-50 -100 -50 -150 0 -200"
                fill="none"
                stroke="rgb(220, 38, 38)"
                strokeWidth="2"
                className="animate-pulse"
              />
              <path
                d="M0 -180 C40 -140 40 -90 0 -60 C-40 -90 -40 -140 0 -180"
                fill="none"
                stroke="rgb(185, 28, 28)"
                strokeWidth="1.5"
              />
            </g>
          ))}
          <circle
            cx="0"
            cy="0"
            r="210"
            fill="none"
            stroke="rgb(220, 38, 38)"
            strokeWidth="1"
            className="animate-pulse"
          />
        </g>
      </svg>
    </motion.div>
  );
};