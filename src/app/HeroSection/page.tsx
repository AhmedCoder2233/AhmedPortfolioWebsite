import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { SiReact, SiNextdotjs, SiTypescript, SiPython, SiTailwindcss } from 'react-icons/si';

const Hero = () => {
  const techIcons = [
    { Icon: SiReact, color: '#61DAFB', delay: 0 },
    { Icon: SiNextdotjs, color: '#FFFFFF', delay: 0.1 },
    { Icon: SiTypescript, color: '#3178C6', delay: 0.2 },
    { Icon: SiPython, color: '#3776AB', delay: 0.3 },
    { Icon: SiTailwindcss, color: '#06B6D4', delay: 0.4 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600 opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan-600 opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="mb-6"
        >
          <motion.span
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-500/30 text-sm"
            animate={{
              boxShadow: [
                '0 0 20px rgba(168, 85, 247, 0.3)',
                '0 0 40px rgba(168, 85, 247, 0.5)',
                '0 0 20px rgba(168, 85, 247, 0.3)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <HiSparkles className="mr-2 text-purple-400" />
            Available for Freelance Work
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.7, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Ahmed Memon
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.9, duration: 0.8 }}
          className="text-2xl md:text-3xl text-gray-300 mb-4"
        >
          Full Stack Web & AI Automation Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.1, duration: 0.8 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Crafting seamless digital experiences with cutting-edge technologies.
          Transforming ideas into intelligent, scalable solutions.
        </motion.p>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.3, duration: 0.8 }}
          className="flex items-center justify-center space-x-6 mb-12"
        >
          {techIcons.map(({ Icon, color, delay }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 4.3 + delay, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.2 }}
              className="relative group"
            >
              <Icon
                className="text-4xl md:text-5xl"
                style={{ color }}
              />
              <motion.div
                className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                style={{ backgroundColor: color }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 rounded-lg overflow-hidden group"
          >
            <a href='#projects' className="relative z-10 text-white font-semibold flex items-center">
              View My Work
              <FiArrowDown className="ml-2" />
            </a>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: '200% auto' }}
            />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-lg border-2 border-purple-500/50 hover:border-purple-500 text-white font-semibold transition-all hover:bg-purple-500/10"
          >
            <a href="#contact">            Get In Touch
</a>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;