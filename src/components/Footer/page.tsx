"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="relative py-8 px-4 bg-black border-t border-blue-900/40">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-cyan-900/5 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-7xl mx-auto text-center"
      >
        <p className="text-blue-200/80">
          © 2025 Ahmed Memon. Built with{' '}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent font-semibold">
            passion
          </span>{' '}
          and code.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
