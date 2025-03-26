import { motion } from 'framer-motion';
import ParticlesBackground from '../components/Particles';
import Sphere3D from '../components/Sphere3D';

const technologies = {
  frameworks: {
    title: "Frameworks & Orchestration",
    color: "bg-[#4285F4]",
    items: [
      {
        id: "LC",
        name: "LangChain",
        description: "Framework for building AI agents powered by LLMs,\nenabling structured workflows and seamless integrations.",
        tag: "Popular"
      },
      {
        id: "LG",
        name: "LangGraph",
        description: "Tool for designing structured AI agent workflows,\nsupporting advanced branching logic and dependencies."
      },
      {
        id: "LS",
        name: "LangSmith",
        description: "Platform for testing and monitoring LLM applications,\nwith comprehensive debugging and optimization tools."
      },
      {
        id: "LM",
        name: "LangMem",
        description: "Advanced memory management system for AI agents,\nensuring context persistence across workflow stages."
      },
      {
        id: "LF",
        name: "Langflow",
        description: "Visual tool for designing and managing AI workflows,\nstreamlining the development and deployment process."
      },
      {
        id: "CA",
        name: "CrewAI",
        description: "Orchestrates multiple AI agents in collaborative teams,\ncoordinating them to solve complex business challenges.",
        tag: "Trending"
      },
      {
        id: "AI",
        name: "agent.ai",
        description: "Platform for creating and managing AI-powered agents,\nenhancing automation and decision-making processes."
      }
    ]
  },
  modelProviders: {
    title: "Model Providers",
    color: "bg-[#EA4335]",
    items: [
      {
        id: "OA",
        name: "OpenAI",
        description: "Leading provider of powerful language models (GPT-3.5, GPT-4),\ndelivering state-of-the-art AI capabilities\nfor diverse enterprise applications.",
        tag: "Industry Leader"
      },
      {
        id: "CG",
        name: "ChatGPT",
        description: "Leading conversational AI platform\npowered by advanced language models\ndelivering natural, engaging interactions\nwith real-time contextual understanding"
      },
      {
        id: "CL",
        name: "Claude",
        description: "Advanced AI assistant by Anthropic focused on safety,\ndelivering reliable and controlled interactions\nwith enhanced ethical considerations."
      },
      {
        id: "DS",
        name: "DeepSeek",
        description: "Provider of advanced large language models and tools,\nspecializing in AI assistants and generation,\nwith focus on performance and accuracy."
      },
      {
        id: "MI",
        name: "Mistral",
        description: "European pioneer in efficient language model development,\noffering both open-weight and proprietary solutions\nwith state-of-the-art performance metrics.",
        tag: "Fast-growing"
      },
      {
        id: "CO",
        name: "Cohere",
        description: "Enterprise-focused language model provider and platform,\noptimized for RAG and semantic search capabilities,\nwith advanced content generation features."
      },
      {
        id: "G",
        name: "Gemini",
        description: "Google's advanced multimodal AI model series,\nprocessing text, images, audio, and code seamlessly,\nwith integrated cross-modal understanding.",
        tag: "Multimodal"
      },
      {
        id: "GC",
        name: "GitHub Copilot",
        description: "Advanced code completion platform\npowered by machine learning models\ndelivering intelligent suggestions\nwith deep language understanding",
        tag: "Code Assistant"
      },
      {
        id: "CD",
        name: "Codeium",
        description: "Enterprise-grade AI coding assistant and platform,\nproviding real-time suggestions and analysis,\nwith advanced code optimization capabilities.",
        tag: "Enterprise AI"
      },
      {
        id: "JP",
        name: "Jasper",
        description: "AI-powered content generation platform for marketing,\ndelivering high-quality, brand-aligned content\nwith customizable tone and style options.",
        tag: "Content AI"
      }
    ]
  },
  vectorDatabases: {
    title: "Vector Databases & Retrieval",
    color: "bg-[#FBBC04]",
    items: [
      {
        id: "CH",
        name: "Chroma",
        description: "Open-source vector database for AI applications,\noptimized for storing and retrieving embeddings efficiently."
      },
      {
        id: "PC",
        name: "Pinecone",
        description: "Cloud-native vector database for enterprise needs,\ndelivering high-performance similarity search and RAG.",
        tag: "Enterprise"
      },
      {
        id: "NE",
        name: "Neon",
        description: "Serverless PostgreSQL database with vector capabilities,\ndesigned for modern AI-powered applications."
      },
      {
        id: "MV",
        name: "Milvus",
        description: "Open-source vector database for AI applications,\nfocused on scalability and high-performance search."
      },
      {
        id: "WE",
        name: "Weaviate",
        description: "Open-source vector search engine for AI systems,\nenabling semantic search and knowledge graph integration.",
        tag: "Popular Search"
      },
      {
        id: "QD",
        name: "Qdrant",
        description: "Production-ready vector similarity search engine,\nfeaturing extended filtering for neural network embeddings."
      },
      {
        id: "PG",
        name: "pgvector",
        description: "PostgreSQL extension for vector similarity search,\nenabling direct storage and querying of embeddings in databases.",
        tag: "SQL Integration"
      }
    ]
  },
  backend: {
    title: "Backend & Data Infrastructure",
    color: "bg-[#34A853]",
    items: [
      {
        id: "EX",
        name: "exa",
        description: "AI-native data indexing and retrieval system,\noptimized for connecting LLMs to external data sources."
      },
      {
        id: "SB",
        name: "supabase",
        description: "Open-source alternative to Firebase for AI applications,\nproviding authentication, database, and API support.",
        tag: "Open Source"
      },
      {
        id: "CP",
        name: "composio",
        description: "Integration and automation platform for AI systems,\nspecializing in composable workflows and multi-agent orchestration."
      },
      {
        id: "BB",
        name: "Browserbase",
        description: "Cloud platform for modern AI applications,\nfocused on browser-based automation and execution."
      }
    ]
  },
  conversational: {
    title: "Conversational AI/Bot Frameworks",
    color: "bg-[#7B1FA2]",
    items: [
      {
        id: "RA",
        name: "Rasa",
        description: "Open-source framework for conversational AI systems,\nempowering advanced chatbots and virtual assistants."
      },
      {
        id: "GD",
        name: "Google Dialogflow",
        description: "Google's enterprise conversational AI platform,\nfor building sophisticated chatbots and voice assistants.",
        tag: "Enterprise"
      },
      {
        id: "MB",
        name: "Microsoft Bot Framework",
        description: "Comprehensive suite of Microsoft's AI tools,\nfocused on developing and deploying conversational agents."
      },
      {
        id: "WA",
        name: "IBM Watson Assistant",
        description: "Enterprise-grade chatbot framework with NLP capabilities,\nspecializing in customer support and business automation."
      }
    ]
  },
  mlLibraries: {
    title: "ML Libraries & AI Enhancements",
    color: "bg-[#00796B]",
    items: [
      {
        id: "HF",
        name: "Hugging Face Transformers",
        description: "Industry-leading repository of pre-trained models,\npowering advanced NLP and AI agent development.",
        tag: "Community Favorite"
      },
      {
        id: "LI",
        name: "LlamaIndex",
        description: "Framework for enhancing AI with external data sources,\nenabling context-aware retrieval and processing.",
        tag: "RAG Tool"
      },
      {
        id: "HS",
        name: "Haystack",
        description: "Open-source NLP framework for advanced AI applications,\nfocusing on search, QA, and retrieval-augmented generation."
      },
      {
        id: "SP",
        name: "Spacy",
        description: "Industrial-strength NLP library with pre-trained models,\noffering comprehensive text processing and analysis capabilities.",
        tag: "NLP Toolkit"
      }
    ]
  }
};

const TechnologyCard = ({ item, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -4 }}
    transition={{ duration: 0.5 }}
    className="group relative"
  >
    <div className="flex flex-col items-start p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative">
          <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center z-10 relative group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-white text-lg font-semibold">{item.id}</span>
          </div>
          <div className={`absolute inset-0 ${color} rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-[#3B82F6] transition-colors duration-300">{item.name}</h3>
        {item.tag && (
          <span className="px-3 py-1 text-xs text-[#3B82F6] bg-[#3B82F6]/10 rounded-full group-hover:bg-[#3B82F6]/20 transition-colors duration-300">
            {item.tag}
          </span>
        )}
      </div>
      <motion.p 
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
        className="text-gray-400 text-sm leading-relaxed pl-16">{item.description}</motion.p>
    </div>
  </motion.div>
);

const TechnologySection = ({ title, color, items }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="mb-24"
  >
    <div className="flex items-center gap-6 mb-12">
      <div className="relative">
        <div className={`w-16 h-16 ${color} rounded-xl flex items-center justify-center z-10 relative group-hover:scale-110 transition-transform duration-300`}>
          <span className="text-white text-2xl font-bold">{title[0]}</span>
        </div>
        <div className={`absolute inset-0 ${color} rounded-xl blur-2xl opacity-20`} />
      </div>
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} 
          className="text-3xl font-bold text-white inline-block relative"
        >
          {title}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
          />
        </motion.h2>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <TechnologyCard item={item} color={color} />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export default function Technology() {
  return (
    <div className="relative min-h-screen bg-[#060B14]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>
      <Sphere3D />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-16">
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
            Our AI Technology Stack
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/80 to-transparent origin-left"
            />
          </motion.h1>
          <p className="text-xl text-white/80 leading-relaxed mb-8">
            Explore our comprehensive suite of cutting-edge AI technologies and tools that power our solutions. From advanced language models to robust infrastructure, we leverage the best in the industry.
          </p>
        </motion.div>

        {Object.entries(technologies).map(([key, section]) => (
          <TechnologySection
            key={key}
            title={section.title}
            color={section.color}
            items={section.items}
          />
        ))}
      </div>
    </div>
  );
}
