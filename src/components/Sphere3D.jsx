import { motion } from 'framer-motion';

export default function Sphere3D() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Left sphere */}
      <motion.div
        className="absolute -left-[25%] -top-[25%] w-[120vh] h-[120vh]"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.9, 1, 0.9]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-[#0066FF] via-[#003399]/70 to-transparent blur-3xl" />
          <div className="absolute inset-0 rounded-full border-[3px] border-[#0066FF]/20" />
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-[#0066FF]/10 to-transparent" />
        </div>
      </motion.div>

      {/* Right sphere */}
      <motion.div
        className="absolute -right-[25%] -bottom-[25%] w-[110vh] h-[110vh]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.85, 0.95, 0.85]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-[#0066FF] via-[#003399]/70 to-transparent blur-3xl" />
          <div className="absolute inset-0 rounded-full border-[3px] border-[#0066FF]/20" />
          <div className="absolute inset-0 rounded-full bg-gradient-radial from-[#0066FF]/10 to-transparent" />
        </div>
      </motion.div>

      {/* Small glowing orbs */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#0066FF]"
          style={{
            left: `${25 + i * 15}%`,
            top: `${35 + i * 12}%`,
            width: `${8 + i * 4}px`,
            height: `${8 + i * 4}px`,
            filter: 'blur(4px)'
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  );
}
