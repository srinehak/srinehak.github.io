import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  BeakerIcon,
  WrenchIcon,
  CpuChipIcon,
  CloudArrowUpIcon,
  ChartBarIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const steps = [
  {
    title: "Design & Planning",
    description: "Blueprint your AI agent's architecture and capabilities",
    tools: ["LangChain", "LangGraph", "LangFlow"],
    icon: BeakerIcon,
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    title: "Development",
    description: "Build robust and scalable AI agent systems",
    tools: ["OpenAI", "Anthropic", "Mistral", "DeepSeek"],
    icon: WrenchIcon,
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    title: "Integration",
    description: "Connect agents with data sources and systems",
    tools: ["LangSmith", "Supabase", "Browserbase", "exa"],
    icon: CpuChipIcon,
    color: "from-indigo-500/20 to-indigo-600/20"
  },
  {
    title: "Deployment",
    description: "Deploy agents to production environments",
    tools: ["Composio", "Docker", "Kubernetes"],
    icon: CloudArrowUpIcon,
    color: "from-green-500/20 to-green-600/20"
  },
  {
    title: "Monitoring",
    description: "Track performance and gather insights",
    tools: ["LangSmith", "Grafana", "Prometheus"],
    icon: ChartBarIcon,
    color: "from-yellow-500/20 to-yellow-600/20"
  },
  {
    title: "Security & Compliance",
    description: "Ensure secure and compliant operation",
    tools: ["Azure Security", "AWS Security Hub", "Vault"],
    icon: ShieldCheckIcon,
    color: "from-red-500/20 to-red-600/20"
  }
];

const StepCard = ({ step, index }) => {
  const { title, description, tools, icon: Icon } = step;
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`w-full md:w-[calc(50%-4rem)] ${isEven ? 'md:mr-auto' : 'md:ml-auto'} mb-24 last:mb-0 relative group`}
    >
      {/* Connecting line to timeline */}
      <div 
        className="absolute top-8 h-[2px] bg-gradient-to-r from-[#3B82F6]/50 to-[#3B82F6] transition-all duration-300 group-hover:from-[#3B82F6] group-hover:to-[#60A5FA]"
        style={{
          left: isEven ? 'auto' : '-4rem',
          right: isEven ? '-4rem' : 'auto',
          width: '4rem'
        }}
      />
      <div className="relative z-10 p-6 group-hover:translate-y-[-4px] transition-all duration-300">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3B82F6]/10 to-[#3B82F6]/5 p-[1px] relative group-hover:shadow-lg group-hover:shadow-[#3B82F6]/20 transition-all duration-300">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#3B82F6]/20 to-[#3B82F6]/10 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-75" />
            <div className="relative w-full h-full rounded-xl bg-[#0A1628] flex items-center justify-center">
              <Icon className="w-8 h-8 text-[#3B82F6] group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex-1 pt-2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent">
                Step {index + 1}
              </span>
              <h3 className="text-2xl font-semibold text-white group-hover:text-[#3B82F6] transition-colors duration-300">
                {title}
              </h3>
            </div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm rounded-full bg-gradient-to-br from-[#3B82F6]/10 to-[#3B82F6]/5 text-[#3B82F6] hover:from-[#3B82F6]/20 hover:to-[#3B82F6]/10 transition-all duration-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const GlowingDot = () => (
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#3B82F6] shadow-lg shadow-[#3B82F6]/50 z-20">
    {/* Pulsing effect */}
    <div className="absolute inset-0 animate-ping rounded-full bg-[#3B82F6] opacity-25" />
    {/* Inner glow */}
    <div className="absolute inset-0 rounded-full bg-[#3B82F6] shadow-[0_0_10px_4px_rgba(59,130,246,0.5)]" />
  </div>
);

const FlowLine = () => (
  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px]">
    {/* Gradient line */}
    <div className="w-full h-full bg-gradient-to-b from-[#3B82F6] via-[#6366F1] to-[#8B5CF6] rounded-full" />
    {/* Top dot */}
    <GlowingDot />
    {/* Bottom dot */}
    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#8B5CF6] shadow-lg shadow-[#8B5CF6]/50 z-20">
      {/* Pulsing effect */}
      <div className="absolute inset-0 animate-ping rounded-full bg-[#8B5CF6] opacity-25" />
      {/* Inner glow */}
      <div className="absolute inset-0 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_4px_rgba(139,92,246,0.5)]" />
    </div>
  </div>
);

export default function DevelopmentFlow() {
  return (
    <section className="min-h-screen py-32 bg-[#060B14] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
            className="text-4xl font-bold text-white inline-block relative mb-4"
          >
            Our Development Process
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
            />
          </motion.h2>
          <p className="text-xl text-gray-400">Our systematic approach to building solutions</p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative mt-16">
          <FlowLine />
          <div className="relative mt-8">
            {steps.map((step, index) => (
              <StepCard
                key={step.title}
                step={step}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
