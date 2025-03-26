import DevelopmentFlow from '../components/DevelopmentFlow';
import ParticlesBackground from '../components/Particles';
import { motion } from 'framer-motion';
import {
  CpuChipIcon,
  ArrowPathIcon,
  ChatBubbleBottomCenterTextIcon,
  BoltIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  CommandLineIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: "AI Consulting & Strategy",
    description: "Expert guidance in developing your AI roadmap and selecting\nthe right solutions to achieve your business objectives.",
    Icon: CpuChipIcon
  },
  {
    title: "Custom AI Development",
    description: "End-to-end development of intelligent AI solutions that\nintegrate deeply with your operations and business context.",
    Icon: ArrowPathIcon
  },
  {
    title: "AI Implementation",
    description: "Seamless deployment of AI solutions that transform\noperations and deliver measurable business outcomes.",
    Icon: ChatBubbleBottomCenterTextIcon
  },
  {
    title: "AI Operations & Support",
    description: "Ongoing optimization and maintenance of your AI systems\nto ensure continuous value and performance.",
    Icon: BoltIcon
  }
];

const capabilities = [
  {
    title: "Enterprise AI Solutions",
    description: "Comprehensive AI services tailored for enterprise needs, from strategy and development to implementation and support.",
    Icon: CircleStackIcon
  },
  {
    title: "Industry Expertise",
    description: "Deep understanding of your industry's challenges and opportunities to deliver targeted AI solutions that drive growth.",
    Icon: WrenchScrewdriverIcon
  },
  {
    title: "Advanced Technology",
    description: "Leveraging cutting-edge AI frameworks and tools to build solutions that deliver superior business value.",
    Icon: CommandLineIcon
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security and compliance measures ensuring safe and responsible AI implementation.",
    Icon: ShieldCheckIcon
  },
  {
    title: "Scalable Solutions",
    description: "AI services designed to grow with your business, from pilot projects to full-scale enterprise deployments.",
    Icon: UserGroupIcon
  },
  {
    title: "Proven Results",
    description: "Track record of delivering measurable business outcomes through strategic AI implementation.",
    Icon: ChartBarIcon
  }
];

const Card = ({ title, description, Icon }) => (
  <div className="group relative p-6 transition-all duration-300 hover:translate-y-[-4px]">
    <div className="flex items-center gap-6 mb-4">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-[#3B82F6]/10 blur-xl group-hover:bg-[#3B82F6]/20 transition-colors duration-300" />
        <div className="relative w-12 h-12 flex items-center justify-center">
          <Icon className="w-6 h-6 text-[#3B82F6] group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white group-hover:text-[#3B82F6] transition-colors duration-300">{title}</h3>
    </div>
    <p className="text-gray-400 leading-relaxed pl-[72px]">{description}</p>
  </div>
);

export default function Services() {
  return (
    <div className="relative min-h-screen bg-[#060B14]">
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-16">
        {/* Our Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
            className="text-5xl font-bold text-white inline-block relative mb-6"
          >
            AI Services & Solutions
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
            />
          </motion.h1>
          <p className="text-xl text-white/80 leading-relaxed mb-16">
            As your AI services partner, we help organizations transcend traditional automation through intelligent solutions that transform operations and deliver measurable business outcomes.
          </p>
        </motion.div>

        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
            className="text-4xl font-bold text-white inline-block relative mb-6"
          >
            Core AI Solutions
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
            />
          </motion.h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Our flagship AI solutions combine cutting-edge technology with practical implementation, designed to address your specific business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card {...service} />
            </motion.div>
          ))}
        </div>

        {/* Our Capabilities Section */}
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
            className="text-4xl font-bold text-white inline-block relative mb-6"
          >
            Our Capabilities
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
            />
          </motion.h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            Explore our technical expertise and advanced capabilities in delivering cutting-edge AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card {...capability} />
            </motion.div>
          ))}
        </div>
      </div>
      <DevelopmentFlow />
    </div>
  );
}
