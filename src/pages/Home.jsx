import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ParticlesBackground from '../components/Particles';
import Sphere3D from '../components/Sphere3D';
import LLMLogos from '../components/LLMLogos';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#060B14]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <ParticlesBackground />
        </div>

        {/* Background spheres */}
        <Sphere3D />
        
        {/* Content */}
        <div className="container relative text-center mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 space-y-6"
          >
            <motion.div 
              className="text-center flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="max-w-5xl mx-auto text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                  <div className="bg-gradient-to-r from-white via-[#3B82F6] to-white text-transparent bg-clip-text whitespace-nowrap">On-Demand AI Experts.</div>
                  <div className="bg-gradient-to-r from-white via-[#3B82F6] to-white text-transparent bg-clip-text">Crafting Tailored AI Agents.</div>
                </h1>

                <div className="w-full max-w-[24rem] sm:max-w-[32rem] lg:max-w-[40rem] h-[1px] relative overflow-hidden my-6 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent" />
                  <motion.div
                    className="absolute inset-0 w-[200%] h-full"
                    animate={{
                      x: ["-100%", "0%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatType: "reverse"
                    }}
                  >
                    <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent blur-[2px]" />
                  </motion.div>
                </div>
                
                <div className="space-y-8 mb-12">
                  <p className="text-lg sm:text-xl md:text-2xl bg-gradient-to-r from-[#3B82F6] via-white to-[#3B82F6] text-transparent bg-clip-text max-w-4xl mx-auto">
                    Hire expert AI developers from Inceptica to craft intelligent AI agents and AI solutions that deliver measurable business outcomes.
                  </p>
                  <div className="relative max-w-4xl mx-auto">
                    <div className="flex justify-center gap-8 sm:gap-16 items-center text-lg sm:text-xl md:text-2xl">
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="relative group"
                      >
                        <span className="absolute -inset-2 blur-md bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors duration-300"></span>
                        <span className="relative font-semibold text-white">Scalable.</span>
                      </motion.span>
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
                        className="relative group"
                      >
                        <span className="absolute -inset-2 blur-md bg-indigo-500/20 rounded-lg group-hover:bg-indigo-500/30 transition-colors duration-300"></span>
                        <span className="relative font-semibold text-white">Reliable.</span>
                      </motion.span>
                      <motion.span
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, delay: 1, repeat: Infinity, ease: "easeInOut" }}
                        className="relative group"
                      >
                        <span className="absolute -inset-2 blur-md bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors duration-300"></span>
                        <span className="relative font-semibold text-white">Fast.</span>
                      </motion.span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 md:gap-24 mt-16">
                  <motion.button
                    onClick={() => navigate('/contact')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn bg-[#0A1628] hover:bg-[#1A2638] text-white text-lg sm:text-xl px-8 py-4 rounded-lg font-medium min-w-[250px] border border-[#1E293B]"
                  >
                    Hire AI Specialists Now
                  </motion.button>
                  <motion.button
                    onClick={() => navigate('/technology')}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn bg-transparent hover:bg-white/5 text-white text-lg sm:text-xl px-8 py-4 rounded-lg font-medium min-w-[250px] border border-[#1E293B]"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B14] via-[#0A1628]/50 to-[#060B14] opacity-50" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
              className="text-4xl font-bold text-white inline-block relative mb-4"
            >
              Why Choose Inceptica
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
              />
            </motion.h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Enterprise AI services that deliver measurable business outcomes
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                title: 'Strategic AI Services',
                description: 'Expert guidance to help you transcend traditional automation with intelligent AI solutions.',
                icon: (
                  <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                )
              },
              {
                title: 'Custom AI Solutions',
                description: 'Purpose-built AI solutions that integrate deeply with your business context and operations.',
                icon: (
                  <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                )
              },
              {
                title: 'AI Implementation',
                description: 'End-to-end deployment and support to ensure your AI solutions deliver measurable outcomes.',
                icon: (
                  <svg className="w-8 h-8 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center group"
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#3B82F6]/10 to-[#60A5FA]/10 group-hover:from-[#3B82F6]/20 group-hover:to-[#60A5FA]/20 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#3B82F6] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LLM Integration Section */}
      <section className="py-24 bg-[#080D19]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
              className="text-4xl font-bold text-white inline-block relative mb-4"
            >
              AI Agent Integration
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
              />
            </motion.h2>
            <p className="text-xl text-light/70 max-w-2xl mx-auto">
              Powering AI agents with industry-leading language models and platforms
            </p>
          </motion.div>
          <LLMLogos />
        </div>
      </section>
    </div>
  );
}

