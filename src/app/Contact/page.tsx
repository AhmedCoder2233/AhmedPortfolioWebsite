'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      value: "ahmedmemon3344@gmail.com",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      icon: FiPhone,
      title: "Phone",
      value: "+92 336 8952826",
      gradient: "from-cyan-600 to-teal-600"
    },
    {
      icon: FiMapPin,
      title: "Location",
      value: "Karachi, Pakistan",
      gradient: "from-pink-600 to-rose-600"
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen py-20 px-4 flex items-center">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
        
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-600 opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 40, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/50 to-cyan-900/50 border border-purple-500/30 text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <HiSparkles className="mr-2 text-purple-400" />
            Get In Touch
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Feel free to reach out and let's create something amazing
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-8 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 transition-all text-center group"
            >
              <motion.div
                className={`p-4 rounded-xl bg-gradient-to-br ${info.gradient} w-fit mx-auto mb-4`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <info.icon className="text-white text-2xl" />
              </motion.div>
              
              <h3 className="text-white font-semibold text-lg mb-2">
                {info.title}
              </h3>
              
              <p className="text-gray-400">
                {info.value}
              </p>

              {/* Hover Glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl"
                style={{
                  background: `radial-gradient(circle at center, rgba(168, 85, 247, 0.1), transparent 70%)`
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Contact;
