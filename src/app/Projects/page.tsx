import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiCode } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "AI-Powered Task Manager & Real Time Chat",
      description: "Intelligent task management with Real time chatting & Workspace creation",
      tech: ["React", "Tailwind", "Supabase", "Framer-motion"],
      gradient: "from-purple-600 to-blue-600",
      liveLink: "https://www.bigbullcamp.com/"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration and real-time inventory",
      tech: ["Next.js", "Stripe", "Sanity CMS"],
      gradient: "from-cyan-600 to-teal-600",
      liveLink: "https://final-hackathon-3-zzop.vercel.app/"
    },
    {
      title: "Ocean SMP Minecraft Website",
      description: "Full Functional and animated Minecraft website for Ocean SMP",
      tech: ["React", "Framer-motion"],
      gradient: "from-pink-600 to-rose-600",
      liveLink: "https://mine-craft-website-nbbv.vercel.app/"
    },
    {
      title: "Agency Website",
      description: "Full Animated website for agency",
      tech: ["TypeScript", "D3.js", "Firebase", "Tailwind"],
      gradient: "from-orange-600 to-amber-600",
      liveLink: "https://agency-website-s1m1.vercel.app/"
    },
    {
      title: "Minecraft Website for Arista MC",
      description: "A Fully Functional & animated website for minecraft",
      tech: ["React-icons", "Framer-motion", "React", "Stripe"],
      gradient: "from-indigo-600 to-purple-600",
      liveLink: "https://arista-mc-xnlt.vercel.app/"
    },
    {
      title: "Call Agent For Barber",
      description: "Inbound Call agent for barber shop that handles appointment booking in natural language",
      tech: ["n8n", "Retell AI"],
      gradient: "from-blue-600 to-cyan-600",
      liveLink: null
    },
    {
      title: "Voice & Chat Bot",
      description: "Voice & Chat bot that helps user to guide about the services, contact details of company",
      tech: ["n8n", "ElevenLabs", "React"],
      gradient: "from-red-600 to-pink-600",
      liveLink: null
    },
    {
        title: "Lead Generation System",
        description: "Fully Functional lead generation system that generate leads from google maps, twitter (X), linkedin & facebook",
        tech: ["React", "Apify", "FastAPI", "NeonDB"],
        gradient: "from-blue-600 to-cyan-600",
        liveLink: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="relative min-h-screen py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
            My Work
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of innovative solutions I've built using modern technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden transition-all duration-300 hover:border-purple-500/50">
                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                {/* Card Content */}
                <div className="relative p-6 h-full flex flex-col">
                  {/* Icon/Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FiCode className="text-white text-xl" />
                    </motion.div>
                    
                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 transition-colors"
                      >
                        <FiExternalLink className="text-purple-400" />
                      </motion.a>
                    )}
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <motion.span
                        key={techIdx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIdx * 0.1 }}
                        className="px-3 py-1 text-xs rounded-full bg-purple-900/30 text-purple-300 border border-purple-500/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at ${hoveredIndex === idx ? '50%' : '0%'} ${hoveredIndex === idx ? '50%' : '0%'}, rgba(168, 85, 247, 0.1), transparent 40%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;