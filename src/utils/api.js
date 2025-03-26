// OpenAI API Configuration
export const API_CONFIG = {
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  apiUrl: import.meta.env.VITE_OPENAI_API_URL,
  model: import.meta.env.VITE_OPENAI_MODEL,
  maxTokens: parseInt(import.meta.env.VITE_MAX_TOKENS) || 1000,
  temperature: parseFloat(import.meta.env.VITE_TEMPERATURE) || 0.7,
};

// System prompts for different modes
const SYSTEM_PROMPTS = {
  generate: 'You are an expert programmer. Generate clean, efficient, and well-documented code based on the user\'s requirements.',
  explain: 'You are a programming tutor. Analyze and explain code in detail, focusing on its purpose, implementation, and potential improvements.',
  debug: 'You are a debugging expert. Identify issues in the code, explain their impact, and suggest fixes.',
  chat: 'You are a helpful AI assistant with expertise in programming and software development.',
};

// Helper function to create headers
export const createHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${API_CONFIG.apiKey}`,
});

// Helper function to create messages array with system prompt
const createMessages = (mode, userInput, previousMessages = []) => {
  const messages = [
    { role: 'system', content: SYSTEM_PROMPTS[mode] },
    ...previousMessages,
    { role: 'user', content: userInput },
  ];
  return messages;
};

// Main API call function
export const callOpenAI = async (mode, userInput, previousMessages = []) => {
  try {
    const response = await fetch(`${API_CONFIG.apiUrl}/chat/completions`, {
      method: 'POST',
      headers: createHeaders(),
      body: JSON.stringify({
        model: API_CONFIG.model,
        messages: createMessages(mode, userInput, previousMessages),
        temperature: mode === 'generate' ? 0.7 : 0.3, // Lower temperature for explanations and debugging
        max_tokens: API_CONFIG.maxTokens,
      }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    throw error;
  }
};

// Format code response
export const formatCodeResponse = (mode, response) => {
  const content = response.content;
  
  switch (mode) {
    case 'generate':
      // Extract code and explanation from the response
      const codeMatch = content.match(/```[\s\S]*?```/);
      return {
        type: 'generated',
        code: codeMatch ? codeMatch[0].replace(/```\w*\n?|```/g, '') : content,
        explanation: content.replace(/```[\s\S]*?```/g, '').trim(),
      };

    case 'explain':
      // Parse explanation into sections
      const sections = content.split('\n\n').map(section => {
        const [title, ...content] = section.split('\n');
        return {
          title: title.replace('###', '').trim(),
          content: content.join('\n').trim(),
        };
      });
      return { type: 'explanation', sections };

    case 'debug':
      // Parse debug information
      const issues = content.split('\n\n')
        .filter(issue => issue.includes('Issue:') || issue.includes('Problem:'))
        .map(issue => {
          const lines = issue.split('\n');
          return {
            type: issue.toLowerCase().includes('critical') || issue.toLowerCase().includes('error') ? 'error' : 'warning',
            line: parseInt(lines[0].match(/\d+/) || '0'),
            message: lines.find(l => l.includes('Issue:') || l.includes('Problem:'))?.split(':')[1]?.trim() || 'Issue detected',
            suggestion: lines.find(l => l.includes('Solution:') || l.includes('Fix:'))?.split(':')[1]?.trim() || 'Review the code',
          };
        });
      return { type: 'debug', issues };

    default:
      return { type: 'chat', content };
  }
};
