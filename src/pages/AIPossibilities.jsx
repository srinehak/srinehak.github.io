import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/Particles';
import SEO from '../components/SEO';

const useCases = [
  {
    title: "Content Ideation & Generation Assistant",
    industry: "Creator Tools",
    problem: "Creators struggled to generate consistent, fresh content.",
    solution: "AI copilot that suggests content formats, hooks, and posts.",
    impact: "Increased posting frequency and audience engagement."
  },
  {
    title: "Predictive Maintenance Agent",
    industry: "Manufacturing",
    problem: "Unplanned equipment downtime affecting production.",
    solution: "AI agent analyzes sensor data and flags anomalies in real-time.",
    impact: "Downtime reduced by 30%; maintenance costs dropped."
  },
  {
    title: "Patient Intake & Symptom Triage Agent",
    industry: "HealthTech",
    problem: "Clinics were overloaded with front-desk inquiries and appointment requests.",
    solution: "Deploy AI assistant for symptom collection and triage routing.",
    impact: "Saved 15+ hours/week per staff and increased patient throughput."
  },
  {
    title: "Emission Tracking Data Assistant",
    industry: "ClimateTech",
    problem: "Teams spent too much time compiling environmental impact data.",
    solution: "AI agent automated data ingestion and compliance reporting.",
    impact: "Reduced reporting time from days to minutes."
  },
  {
    title: "Internal HR/Support Agent",
    industry: "Healthcare",
    problem: "Staff spent hours answering routine HR and benefits questions.",
    solution: "Internal chatbot integrated with policies and payroll systems.",
    impact: "Freed 40% of HR team's time."
  },
  {
    title: "KYC & Compliance Support Bot",
    industry: "Fintech",
    problem: "Manual onboarding and regulation compliance were slowing user acquisition.",
    solution: "AI agents handle KYC document parsing and compliance FAQs.",
    impact: "Onboarding time reduced by 50%; increased signups."
  },
  {
    title: "Claims Processing Assistant",
    industry: "Finance / Insurance",
    problem: "Slow manual claims review affecting customer satisfaction.",
    solution: "AI agent pre-screens and categorizes claim documentation.",
    impact: "Cut processing time by 60%."
  },
  {
    title: "Route Optimization Chatbot",
    industry: "Logistics / Transport",
    problem: "Inefficient routing and delays from dispatch errors.",
    solution: "AI assistant provides optimized routes and traffic alerts.",
    impact: "Improved delivery ETAs and fuel efficiency."
  },
  {
    title: "Knowledge Assistant for Consultants",
    industry: "Professional Services",
    problem: "Time lost searching internal docs, decks, and notes.",
    solution: "Agent retrieves and summarizes relevant knowledge instantly.",
    impact: "Saved ~6 hours/week per team member."
  },
  {
    title: "Tenant Support & Maintenance Bot",
    industry: "Construction / Real Estate",
    problem: "High volume of repetitive maintenance queries.",
    solution: "AI agent handles ticket intake, FAQs, and basic troubleshooting.",
    impact: "Reduced service tickets by 35%."
  }
];

export default function AIPossibilities() {
  return (
    <>
      <SEO
        title="AI Use Cases & Success Stories - Real-World Applications | The Inceptica"
        description="Explore real-world AI applications across industries. From content generation to predictive maintenance, discover how our AI solutions drive business transformation and efficiency."
        name="The Inceptica"
        type="website"
      />
      <div className="min-h-screen bg-black pt-32 pb-20 relative">
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Endless AI Possibilities
          </h1>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Discover the transformative potential of AI for your business. Partner with us to turn your innovative ideas into reality and stay ahead in the digital age.
          </p>
        </motion.div>



        {/* Use Cases Path */}
        <div className="relative max-w-7xl mx-auto mb-16">
          {/* Connecting Path */}
          <div className="absolute left-1/2 top-0 bottom-0 flex flex-col">
            {/* Main line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-[#3B82F6]/40 to-transparent" />
            
            {/* Animated glow effect */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#3B82F6]/20 blur-sm" />
            
            {/* Moving light effect */}
            <motion.div 
              className="absolute left-0 w-0.5 h-32 bg-gradient-to-b from-transparent via-[#3B82F6] to-transparent"
              animate={{
                y: [0, 1000],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
          
          <div className="grid grid-cols-1 gap-16">
            {/* Group use cases in pairs */}
            {Array.from({ length: Math.ceil(useCases.length / 2) }, (_, rowIndex) => (
              <div key={rowIndex} className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {useCases.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => {
                  const isLeft = index === 0;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, delay: 0.1 * index }}
                      viewport={{ once: false, margin: '-100px' }}
                      className={`relative ${isLeft ? 'lg:pr-8' : 'lg:pl-8'} group`}
                    >
                      {/* Glowing Node */}
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`absolute top-6 w-4 h-4 rounded-full bg-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.6)] z-20 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.8)] transition-shadow duration-300 ${isLeft ? 'right-[-12px] lg:right-[-2px]' : 'left-[-12px] lg:left-[-2px]'}`}
                      >
                        <div className="absolute inset-0 rounded-full bg-[#3B82F6] animate-ping opacity-20" />
                        <div className="absolute inset-[-4px] rounded-full bg-[#3B82F6]/10 blur-sm" />
                      </motion.div>

                      {/* Content Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative backdrop-blur-sm rounded-xl overflow-hidden"
                      >
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-purple-500/5 group-hover:translate-y-1 transition-all duration-300" />
                        <div className="absolute inset-0 border border-white/10 group-hover:border-[#3B82F6]/30 transition-colors duration-300" />

                        <div className="relative p-6 z-10">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="text-sm text-[#3B82F6] font-medium tracking-wide px-3 py-1 rounded-full border border-[#3B82F6]/30 bg-[#0A1628]">
                              {item.industry}
                            </div>
                            <div className="h-px flex-grow bg-gradient-to-r from-[#3B82F6]/30 to-transparent" />
                          </div>

                          <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-[#3B82F6] transition-colors">
                            {item.title}
                          </h3>

                          <div className="grid md:grid-cols-3 gap-6 text-white/80">
                            <div className="space-y-2 group/section hover:text-white transition-colors">
                              <div className="text-sm text-[#3B82F6]/80 group-hover/section:text-[#3B82F6]">Problem</div>
                              <div>{item.problem}</div>
                            </div>

                            <div className="space-y-2 group/section hover:text-white transition-colors">
                              <div className="text-sm text-[#3B82F6]/80 group-hover/section:text-[#3B82F6]">AI Solution</div>
                              <div>{item.solution}</div>
                            </div>

                            <div className="space-y-2 group/section hover:text-white transition-colors">
                              <div className="text-sm text-[#3B82F6]/80 group-hover/section:text-[#3B82F6]">Impact</div>
                              <div>{item.impact}</div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-[#3B82F6] rounded-full hover:bg-[#2563EB] transition-colors duration-300"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
}
