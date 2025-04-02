import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/Particles';
import { LightBulbIcon, RocketLaunchIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline';

const values = [
  {
    title: "Innovation First",
    description: "We push the boundaries of AI technology, constantly exploring new possibilities and solutions that transcend traditional automation.",
    icon: LightBulbIcon,
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    title: "Client Success",
    description: "Your success is our success. We're committed to delivering intelligent agents that create measurable business value and transform operations.",
    icon: RocketLaunchIcon,
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    title: "Collaborative Spirit",
    description: "We believe in deep partnership, working closely with clients to develop purpose-built solutions that adapt to their unique business context.",
    icon: UserGroupIcon,
    color: "from-indigo-500/20 to-indigo-600/20"
  },
  {
    title: "Ethical AI",
    description: "We develop AI agents with strong ethical principles, ensuring transparency, responsibility, and trustworthy decision-making capabilities.",
    icon: SparklesIcon,
    color: "from-cyan-500/20 to-cyan-600/20"
  }
];

const team = [
  {
    name: "Swarnalatha Duttaluri",
    role: "Founder",
    description: "Business leader driving enterprise AI adoption at Inceptica, enabling organizations to solve real-world challenges and scale operations through intelligent, tailored automation solutions.",
    linkedin: "https://www.linkedin.com/in/swarna-latha-a2064062/",
    image: "/images/team/swarnalatha-duttaluri.jpg"
  },
  {
    name: "Neha Korugundla",
    role: "Co-Founder",
    description: "Strategic leader driving product innovation at Inceptica, enabling enterprises to align AI solutions with business goals to enhance efficiency, decision-making, and operational impact.",
    linkedin: "https://www.linkedin.com/in/srinehakorugundla/",
    image: "/images/team/neha-korugundla.jpeg"
  },
  {
    name: "Sri Arardhi",
    role: "Mentor & Advisor",
    description: "Technology strategist guiding enterprise success at Inceptica, enabling organizations to accelerate AI adoption and drive digital transformation through scalable, impactful solutions.",
    linkedin: "https://www.linkedin.com/in/sriarardhi/",
    image: "/images/team/sri-arardhi.jpg"
  }
];

const highlights = [
  {
    title: "Beyond Traditional Automation",
    description: "Our intelligent agents understand context, make decisions, and take autonomous action to transform your operations and enhance decision-making.",
    gradient: "from-blue-600/20 to-cyan-600/20"
  },
  {
    title: "Purpose-Built Solutions",
    description: "We develop tailored AI agents that integrate deeply with your operations and adapt to your unique business context for lasting impact.",
    gradient: "from-indigo-600/20 to-blue-600/20"
  },
  {
    title: "Practical Implementation",
    description: "Bridging the gap between advanced AI capabilities and real-world application, we guide your transformation with clarity and confidence.",
    gradient: "from-purple-600/20 to-indigo-600/20"
  }
];

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#060B14] pt-24">
      <ParticlesBackground theme="about" />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
            className="text-5xl font-bold text-white inline-block relative mb-6"
          >
            Beyond AI Tools—Building Intelligent Agents
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
            />
          </motion.h1>
          <p className="text-xl text-gray-300 mb-4">
            We empower organizations to transcend traditional automation by building intelligent AI agents that understand context,
            make decisions, and take autonomous action—transforming operations and delivering measurable outcomes.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto mb-32 relative"
        >
          <div className="absolute left-0 right-0 h-[120%] top-1/2 -translate-y-1/2 bg-gradient-to-b from-blue-600/[0.03] via-purple-600/[0.03] to-cyan-600/[0.03] blur-3xl -z-10" />
          
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
              className="text-3xl font-bold text-white inline-block relative"
            >
              Our Mission
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
              />
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl text-white/90 leading-relaxed font-medium text-center max-w-3xl mx-auto mb-24"
          >
            To empower organizations to transcend traditional automation by building and deploying intelligent AI agents 
            that understand context, make decisions, and take autonomous action—transforming operations, enhancing 
            decision-making, and delivering measurable business outcomes.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <h3 className="text-[#3B82F6] font-semibold text-lg">Our Vision</h3>
              <p className="text-white/80 leading-relaxed">
                Creating AI systems that achieve true intelligence and autonomy, moving beyond basic automation to deliver 
                transformative business value.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <h3 className="text-[#3B82F6] font-semibold text-lg">Our Approach</h3>
              <p className="text-white/80 leading-relaxed">
                Developing tailored, purpose-built solutions that integrate deeply with your operations and adapt to your 
                unique business context.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 1.2,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <h3 className="text-[#3B82F6] font-semibold text-lg">Our Promise</h3>
              <p className="text-white/80 leading-relaxed">
                Bridging the gap between advanced AI capabilities and practical implementation, guiding your transformation 
                with clarity and confidence.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-24"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
              className="text-3xl font-bold text-white inline-block relative"
            >
              Our Story
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
              />
            </motion.h2>
          </div>
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-white/90 leading-relaxed text-lg">
                Inceptica was founded with a bold vision: to help organisations move beyond traditional automation and embrace 
                a future powered by intelligent AI agents—autonomous systems that understand context, make decisions, and take action.
              </p>
              
              <p className="text-white/80 leading-relaxed">
                Our founding team recognised an opportunity to rethink how AI is built and applied—shifting the focus from generic 
                tools to intelligent agents that deliver real, lasting impact. While AI was advancing rapidly, many organisations 
                were still struggling to apply it meaningfully. Tools were abundant, but what they truly needed were purpose-built 
                agents that could integrate deeply into operations and drive measurable outcomes.
              </p>
            </div>

            <p className="text-[#3B82F6] font-semibold text-xl text-center">
              That's the mission Inceptica was created to serve.
            </p>

            <div className="space-y-6">
              <p className="text-white/80 leading-relaxed">
                We bring together a team of expert AI developers, solution architects, and domain specialists who design and deploy 
                intelligent agents tailored to your needs. Whether it's enhancing decision-making, orchestrating complex workflows, 
                or transforming user experiences, our agents are built to operate in real time, at scale, and in tune with your business.
              </p>

              <p className="text-white/80 leading-relaxed">
                At Inceptica, we believe AI agents aren't just a trend—they're the foundation of the next era of enterprise software. 
                And we're here to help you lead that transformation with clarity, confidence, and speed.
              </p>
            </div>

            <p className="text-xl font-medium text-white/90 text-center">
              This is just the beginning. Let's build the future of intelligent systems—together.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-6xl mx-auto mb-24"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
              className="text-3xl font-bold text-white inline-block relative"
            >
              Our Values
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
              />
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="group"
              >
                <div className="flex items-start space-x-4">
                  <div className="opacity-70 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-[#3B82F6]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#3B82F6] transition-colors duration-300">{value.title}</h3>
                    <p className="text-white/70 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto mb-32 relative"
        >
          <div className="absolute left-0 right-0 h-[120%] top-1/2 -translate-y-1/2 bg-gradient-to-b from-purple-600/[0.03] via-blue-600/[0.03] to-cyan-600/[0.03] blur-3xl -z-10" />
          
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
              className="text-3xl font-bold text-white inline-block relative"
            >
              Our Leadership
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
              />
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.4 + index * 0.2,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group"
              >
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <div className="w-32 h-32 rounded-full mx-auto overflow-hidden bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 relative">
                      {member.image && (
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-[#3B82F6] transition-colors duration-300">{member.name}</h3>
                    <p className="text-[#3B82F6] font-medium mt-1">{member.role}</p>
                  </div>
                  <p className="text-white/70 leading-relaxed">{member.description}</p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-white/60 hover:text-[#3B82F6] transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="ml-2">Connect on LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-6xl mx-auto relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628] via-[#1E293B] to-[#0A1628] opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative px-8 py-16 text-center"
          >
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
                className="text-3xl font-bold text-white inline-block relative"
              >
                Join Our Team
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
                />
              </motion.h2>
            </div>
            <div className="max-w-2xl mx-auto">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-white/80 leading-relaxed mb-12 text-lg"
              >
                We're always looking for talented individuals who share our passion for AI and innovation. 
                If you're excited about shaping the future of technology and want to work with cutting-edge AI solutions, 
                we'd love to hear from you.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] hover:from-[#60A5FA] hover:to-[#3B82F6] rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                >
                  <span>Get in Touch</span>
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
}