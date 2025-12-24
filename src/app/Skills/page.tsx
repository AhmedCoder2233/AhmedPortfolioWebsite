import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiLayers,
  FiCpu,
  FiZap,
  FiMic
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const SkillsSection = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: FiCode,
      color: 'from-purple-600 to-pink-600',
      skills: [
        { name: 'HTML', level: 95, icon: '🌐' },
        { name: 'CSS', level: 92, icon: '🎨' },
        { name: 'JavaScript', level: 90, icon: '⚡' },
        { name: 'React.js', level: 88, icon: '⚛️' },
        { name: 'Next.js', level: 85, icon: '▲' },
        { name: 'TailwindCSS', level: 93, icon: '🎯' },
      ]
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      icon: FiLayers,
      color: 'from-blue-600 to-cyan-600',
      skills: [
        { name: 'Python', level: 87, icon: '🐍' },
        { name: 'FastAPI', level: 84, icon: '⚡' },
        { name: 'PostgreSQL', level: 82, icon: '🐘' },
        { name: 'Supabase', level: 86, icon: '🔥' },
        { name: 'NeonDB', level: 80, icon: '💫' },
      ]
    },
    {
      id: 'ai',
      title: 'AI & Automation',
      icon: FiCpu,
      color: 'from-cyan-600 to-teal-600',
      skills: [
        { name: 'OpenAI Agents SDK', level: 88, icon: '🤖' },
        { name: 'n8n', level: 90, icon: '🔗' },
        { name: 'RAG', level: 85, icon: '📚' },
        { name: 'Voice Agents', level: 83, icon: '🎙️' },
        { name: 'Call Agents', level: 81, icon: '📞' },
      ]
    },
    {
      id: 'voice',
      title: 'Voice & Audio AI',
      icon: FiMic,
      color: 'from-teal-600 to-green-600',
      skills: [
        { name: 'Retell AI', level: 86, icon: '🗣️' },
        { name: 'ElevenLabs', level: 89, icon: '🎵' },
      ]
    },
  ];

  return (
    <section id="skills" className="relative py-12 sm:py-16 md:py-20 px-4 overflow-hidden bg-slate-950">
      {/* Optimized Static Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Optimized Static Orbs - No animation on mobile */}
      <div className="hidden md:block absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 text-xs sm:text-sm text-purple-300 mb-4 sm:mb-6"
          >
            <HiSparkles className="mr-1.5 sm:mr-2 text-sm sm:text-base" />
            TECHNICAL EXPERTISE
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 px-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Mastering the modern tech stack to build powerful, scalable solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {skillCategories.map((category, categoryIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: categoryIdx * 0.08, duration: 0.5 }}
              onHoverStart={() => setHoveredCategory(category.id)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="relative group/category"
            >
              {/* Optimized Glow Effect - Only on desktop */}
              <div
                className={`hidden sm:block absolute -inset-1 bg-gradient-to-br ${category.color} rounded-2xl sm:rounded-3xl blur-lg transition-opacity duration-300`}
                style={{ 
                  opacity: hoveredCategory === category.id ? 0.3 : 0.1,
                }}
              />

              {/* Card */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800/95 to-slate-900 backdrop-blur-xl border border-purple-500/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 overflow-hidden h-full">
                {/* Removed animated background pattern for performance */}

                {/* Header */}
                <div className="relative z-10 flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-xl flex-shrink-0`}>
                    <category.icon className="text-xl sm:text-2xl md:text-3xl text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate">{category.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{category.skills.length} Technologies</p>
                  </div>
                </div>

                {/* Skills */}
                <div className="relative z-10 space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIdx * 0.05 + skillIdx * 0.03, duration: 0.3 }}
                      className="group/skill"
                    >
                      {/* Skill Name & Icon */}
                      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <span className="text-lg sm:text-xl md:text-2xl flex-shrink-0">
                            {skill.icon}
                          </span>
                          <span className="text-white font-medium text-sm sm:text-base truncate">{skill.name}</span>
                        </div>
                        <span className="text-gray-400 text-xs sm:text-sm font-semibold flex-shrink-0 ml-2">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative h-1.5 sm:h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: categoryIdx * 0.05 + skillIdx * 0.03 + 0.2,
                            duration: 0.8,
                            ease: 'easeOut'
                          }}
                          className={`h-full bg-gradient-to-r ${category.color} relative`}
                        >
                          {/* Removed continuous shine effect for performance */}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Skill Count Badge */}
                <div className="absolute top-4 sm:top-5 md:top-6 right-4 sm:right-5 md:right-6 w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-slate-800/80 backdrop-blur-sm border border-purple-500/20 flex items-center justify-center">
                  <span className={`text-base sm:text-lg md:text-xl font-bold bg-gradient-to-br ${category.color} bg-clip-text text-transparent`}>
                    {category.skills.length}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12"
        >
          {[
            { value: '20+', label: 'Technologies', icon: FiCode },
            { value: '4', label: 'Specializations', icon: FiLayers },
            { value: '2+', label: 'Years Learning', icon: FiZap },
            { value: '100%', label: 'Dedication', icon: HiSparkles },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.3 }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="relative group/stat"
            >
              <div className="hidden sm:block absolute -inset-1 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl sm:rounded-2xl blur-md opacity-0 group-hover/stat:opacity-30 transition-opacity" />
              <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 text-center border border-purple-500/10">
                <stat.icon className="text-2xl sm:text-2xl md:text-3xl text-purple-400 mx-auto mb-1.5 sm:mb-2" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">{stat.value}</div>
                <div className="text-gray-400 text-xs sm:text-sm leading-tight">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;