import { motion } from 'framer-motion';

const logos = [
  {
    name: 'ChatGPT',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    description: 'Advanced AI platform\nfor natural conversations'
  },
  {
    name: 'Claude',
    logo: 'https://wpforms.com/wp-content/uploads/2024/08/claude-logo.png',
    description: 'Advanced AI assistant\nfor complex reasoning'
  },
  {
    name: 'Gemini',
    logo: 'https://brandlogo.org/wp-content/uploads/2024/06/Gemini-Icon-300x300.png.webp',
    description: 'Google\'s advanced AI\nfor multimodal tasks'
  },
  {
    name: 'GitHub Copilot',
    logo: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png',
    description: 'AI-powered assistance\nfor code development'
  },
  {
    name: 'Codeium',
    logo: 'https://codeium.com/favicon.ico',
    description: 'Intelligent code completion\nand development tools'
  },
  {
    name: 'DeepSeek',
    logo: 'https://brandlogos.net/wp-content/uploads/2025/02/deepseek_logo_icon-logo_brandlogos.net_s5bgc.png',
    description: 'Advanced language models\nfor code generation tasks'
  },
  {
    name: 'Mistral AI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Mistral_AI_logo_%282025%E2%80%93%29.svg/1200px-Mistral_AI_logo_%282025%E2%80%93%29.svg.png',
    description: 'Enterprise-grade models\nfor AI solutions'
  },
  {
    name: 'Cohere',
    logo: 'https://pbs.twimg.com/profile_images/1650250832909152260/760DZ0cv_400x400.png',
    description: 'Advanced LLMs and APIs\nfor enterprise solutions'
  },
  {
    name: 'Jasper',
    logo: 'https://img.icons8.com/?size=512&id=ij6f4GUUwLE8&format=png',
    description: 'AI content creation\nand writing assistant'
  }
];

export default function LLMLogos() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
      {logos.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center p-4 sm:p-6 bg-[#0A0F1C] rounded-xl hover:bg-[#11172B] transition-all duration-300"
        >
          <div className="w-16 h-16 mb-4 relative">
            <img
              src={item.logo}
              alt={`${item.name} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
          <p className="text-xs sm:text-sm text-light/70 text-center whitespace-pre-line leading-relaxed min-h-[2.75rem] sm:min-h-[3rem] px-2 flex items-center justify-center">{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}