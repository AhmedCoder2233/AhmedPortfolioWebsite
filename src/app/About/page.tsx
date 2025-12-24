import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiCpu, 
  FiZap, 
  FiTrendingUp,
  FiGlobe
} from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';

const AboutSection = () => {
  const stats = [
    { value: '2+', label: 'Years Experience', color: '#a855f7' },
    { value: '50+', label: 'Projects Built', color: '#3b82f6' },
    { value: '17', label: 'Years Old', color: '#06b6d4' },
  ];

  const expertise = [
    { icon: FiCode, title: 'Full Stack Development', desc: 'Building modern web applications' },
    { icon: FiCpu, title: 'AI Automation', desc: 'Creating intelligent solutions' },
    { icon: FiTrendingUp, title: 'Self-Learner', desc: 'Constantly evolving & growing' },
  ];

  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 px-4 overflow-hidden">
      {/* Optimized Background */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs sm:text-sm text-purple-400 mb-4 sm:mb-6"
          >
            <HiSparkles className="mr-1.5 sm:mr-2 text-sm sm:text-base" />
            ABOUT ME
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 px-4">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Passionate Developer
            </span>
          </h2>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative group mb-8 sm:mb-12"
        >
          {/* Optimized Border Glow - Only on larger screens */}
          <div className="hidden sm:block absolute -inset-[1px] bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl sm:rounded-3xl opacity-20 group-hover:opacity-30 blur-sm transition-opacity duration-500" />
          
          <div className="relative bg-slate-900/90 sm:bg-slate-900/80 backdrop-blur-xl border border-purple-500/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="grid md:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-start md:items-center">
              {/* Left: Story */}
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center flex-shrink-0"
                  >
                    <FiCode className="text-2xl sm:text-3xl text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Ahmed Memon</h3>
                    <p className="text-purple-400 font-medium text-sm sm:text-base">17-Year-Old Developer</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  Hi! I'm a <span className="text-white font-semibold">Full Stack Web Developer</span> and <span className="text-white font-semibold">AI Automation Developer</span> who's been coding for over 2 years. Currently studying at <span className="text-purple-400 font-semibold">Governor House IT Initiative Sindh</span>, I'm passionate about turning ideas into reality through clean code and innovative solutions.
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm"
                  >
                    🎓 Governor House IT
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm"
                  >
                    📚 2+ Years Learning
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm"
                  >
                    ⚡ Available
                  </motion.div>
                </div>
              </div>

              {/* Right: Stats */}
              <div className="grid grid-cols-3 md:flex md:flex-col gap-3 sm:gap-4">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="relative group/stat"
                  >
                    <div
                      className="absolute -inset-1 rounded-xl sm:rounded-2xl blur opacity-40 group-hover/stat:opacity-60 transition-opacity"
                      style={{ background: stat.color }}
                    />
                    <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 text-center min-w-[70px] sm:min-w-[100px]">
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1" style={{ color: stat.color }}>
                        {stat.value}
                      </div>
                      <div className="text-[9px] sm:text-[10px] md:text-xs text-gray-400 whitespace-nowrap leading-tight">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Expertise Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-purple-500/10">
              {expertise.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                  className="group/card relative"
                >
                  <div className="hidden sm:block absolute -inset-[1px] bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg sm:rounded-xl opacity-0 group-hover/card:opacity-30 blur transition-opacity duration-300" />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-5 h-full">
                    <item.icon className="text-2xl sm:text-3xl text-purple-400 mb-2 sm:mb-3" />
                    <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">{item.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl overflow-hidden group inline-flex items-center bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500"
          >
            <span className="relative z-10 text-white font-semibold flex items-center text-sm sm:text-base">
              <FiGlobe className="mr-1.5 sm:mr-2 text-base sm:text-lg" />
              <a href="mailto:ahmedmemon3344@gmail.com">
              Let's Work Together
              </a>
              <FiZap className="ml-1.5 sm:ml-2 text-base sm:text-lg" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;