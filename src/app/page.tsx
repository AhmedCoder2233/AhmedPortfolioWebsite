'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiCode } from 'react-icons/hi';
import Hero from '@/app/HeroSection/page'
import AboutSection from '@/app/About/page'
import Skills from '@/app/Skills/page'
import Projects from "@/app/Projects/page"
import Contact from "@/app/Contact/page"

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    // Complete loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* Opening Animation Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center"
          >
            {/* Static Gradient Background with Fade Out */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-900 via-slate-900 to-cyan-900"
              initial={{ opacity: 1 }}
              animate={{ opacity: [1, 1, 0] }}
              transition={{ duration: 2.5, times: [0, 0.7, 1] }}
            />

            {/* Overlay Pattern that fades */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.3, 0] }}
              transition={{ duration: 2.5, times: [0, 0.7, 1] }}
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
                  radial-gradient(circle at 80% 70%, rgba(6, 182, 212, 0.15) 0%, transparent 50%),
                  linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3))
                `,
              }}
            />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center px-4">
              {/* Animated Logo Container */}
              <div className="relative mb-8 sm:mb-12">
                {/* Glow effect behind logo */}
                <motion.div
                  className="absolute inset-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full blur-3xl"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: [0, 0.6, 0.4],
                    scale: [0.5, 1.2, 1],
                  }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 70%)',
                    margin: '-20%',
                  }}
                />

                {/* Hexagon rings */}
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute"
                    initial={{ opacity: 0, scale: 0, rotate: 0 }}
                    animate={{ 
                      opacity: [0, 0.6, 0.3],
                      scale: [0, 1 + index * 0.15, 1 + index * 0.15],
                      rotate: index % 2 === 0 ? 360 : -360,
                    }}
                    transition={{ 
                      duration: 1.5,
                      delay: index * 0.15,
                      ease: "easeOut",
                      rotate: {
                        duration: 20 + index * 5,
                        repeat: Infinity,
                        ease: "linear"
                      }
                    }}
                    style={{
                      width: `${100 + index * 30}px`,
                      height: `${100 + index * 30}px`,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <polygon
                        points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                        fill="none"
                        stroke={index === 0 ? 'rgba(168, 85, 247, 0.4)' : index === 1 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(6, 182, 212, 0.3)'}
                        strokeWidth="1"
                        className={index === 1 ? 'stroke-dasharray-[5,5]' : ''}
                      />
                    </svg>
                  </motion.div>
                ))}

                {/* Center Logo */}
                <motion.div
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1.2, 1], 
                    rotate: [180, 0, 0],
                    opacity: [0, 1, 1],
                  }}
                  transition={{ 
                    duration: 1.2, 
                    ease: [0.34, 1.56, 0.64, 1],
                    times: [0, 0.7, 1]
                  }}
                  className="relative"
                >
                  <motion.div
                    className="w-20 h-20 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center shadow-2xl relative overflow-hidden"
                    animate={{
                      boxShadow: [
                        '0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(168, 85, 247, 0.3)',
                        '0 0 60px rgba(6, 182, 212, 0.6), 0 0 100px rgba(6, 182, 212, 0.3)',
                        '0 0 40px rgba(168, 85, 247, 0.6), 0 0 80px rgba(168, 85, 247, 0.3)',
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-20"
                      animate={{
                        x: ['-200%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 1,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <HiCode className="text-white text-5xl sm:text-7xl relative z-10" />
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Floating particles */}
                {[...Array(8)].map((_, i) => {
                  const angle = (i * 360) / 8;
                  const distance = 80;
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                      style={{
                        background: i % 2 === 0 ? 
                          'linear-gradient(135deg, #a855f7, #3b82f6)' : 
                          'linear-gradient(135deg, #3b82f6, #06b6d4)',
                        top: '50%',
                        left: '50%',
                        boxShadow: '0 0 10px rgba(168, 85, 247, 0.8)',
                      }}
                      initial={{ 
                        opacity: 0,
                        x: -8,
                        y: -8,
                      }}
                      animate={{
                        opacity: [0, 1, 0.6, 0],
                        x: [
                          -8,
                          Math.cos((angle * Math.PI) / 180) * distance - 8,
                        ],
                        y: [
                          -8,
                          Math.sin((angle * Math.PI) / 180) * distance - 8,
                        ],
                        scale: [0, 1, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        delay: 0.5 + i * 0.1,
                        ease: "easeOut"
                      }}
                    />
                  );
                })}
              </div>

              {/* Name with Glitch Effect */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                className="mb-6 sm:mb-8"
              >
                <div className="relative">
                  {/* Glitch layers */}
                  <motion.h2
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-center relative z-10"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    style={{ 
                      backgroundSize: '200% auto',
                      textShadow: '0 0 30px rgba(168, 85, 247, 0.5)',
                    }}
                  >
                    Ahmed Memon
                  </motion.h2>
                  
                  {/* Glitch effect layers */}
                  <motion.h2
                    className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl font-bold text-purple-500 text-center opacity-70"
                    animate={{
                      x: [-2, 2, -2],
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      repeatDelay: 5,
                    }}
                    style={{ mixBlendMode: 'screen' }}
                  >
                    Ahmed Memon
                  </motion.h2>
                  
                  <motion.h2
                    className="absolute inset-0 text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-500 text-center opacity-70"
                    animate={{
                      x: [2, -2, 2],
                      opacity: [0, 0.7, 0],
                    }}
                    transition={{
                      duration: 0.3,
                      repeat: Infinity,
                      repeatDelay: 5,
                      delay: 0.1,
                    }}
                    style={{ mixBlendMode: 'screen' }}
                  >
                    Ahmed Memon
                  </motion.h2>
                </div>
                
                <motion.p
                  initial={{ opacity: 0, letterSpacing: '0.5em' }}
                  animate={{ opacity: 1, letterSpacing: '0.2em' }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="text-gray-400 text-sm sm:text-base text-center mt-3 uppercase tracking-widest"
                  style={{
                    textShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
                  }}
                >
                  Full Stack Developer
                </motion.p>
              </motion.div>

              {/* Futuristic Progress Bar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="w-64 sm:w-80 md:w-96"
              >
                {/* Progress container with border */}
                <div className="relative">
                  {/* Outer glow */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-full blur-sm"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  
                  {/* Progress track */}
                  <div className="relative h-2 sm:h-2.5 bg-slate-900/80 backdrop-blur-sm rounded-full overflow-hidden border border-purple-500/30">
                    {/* Animated scanning line */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Actual progress with segments */}
                    <motion.div
                      className="absolute inset-y-0 left-0 rounded-full overflow-hidden"
                      initial={{ width: '0%' }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      style={{
                        background: 'linear-gradient(90deg, #a855f7 0%, #3b82f6 50%, #06b6d4 100%)',
                      }}
                    >
                      {/* Segment effect */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(255,255,255,0.1) 8px, rgba(255,255,255,0.1) 10px)',
                        }}
                      />
                      
                      {/* Moving shine */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      
                      {/* Bright tip glow */}
                      <motion.div
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-8 bg-cyan-400 blur-xl"
                        animate={{
                          opacity: [0.6, 1, 0.6],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Stats Display */}
                <motion.div
                  className="flex justify-between items-center mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.span 
                    className="text-xs sm:text-sm text-gray-400 font-medium tracking-wider"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    INITIALIZING
                  </motion.span>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                      animate={{
                        boxShadow: [
                          '0 0 5px rgba(6, 182, 212, 0.5)',
                          '0 0 15px rgba(6, 182, 212, 1)',
                          '0 0 5px rgba(6, 182, 212, 0.5)',
                        ],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    />
                    <span className="text-sm sm:text-base font-mono font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {progress}%
                    </span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Loading dots */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="flex items-center space-x-1.5 sm:space-x-2 mt-6 sm:mt-8"
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* Corner decorations */}
            <motion.div
              className="absolute top-8 left-8 sm:top-12 sm:left-12 w-16 h-16 sm:w-20 sm:h-20 border-l-2 border-t-2 border-purple-500/30 rounded-tl-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
            <motion.div
              className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 w-16 h-16 sm:w-20 sm:h-20 border-r-2 border-b-2 border-cyan-500/30 rounded-br-2xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
        <Hero/>
        <AboutSection/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  );
};

export default Home;