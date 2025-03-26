export const chatCompletion = async (messages) => {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: messages,
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error('Error in chatCompletion:', error);
    throw error;
  }
};

export const analyzeCode = async (code) => {
  const messages = [
    { role: 'system', content: 'You are a code analysis assistant.' },
    { role: 'user', content: `Please analyze this code for potential issues and suggest improvements:\n\n${code}` }
  ];
  return chatCompletion(messages);
};

export const generateImage = async (prompt) => {
  try {
    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: '1024x1024'
      })
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.data[0].url;
  } catch (error) {
    console.error('Error in generateImage:', error);
    throw error;
  }
};

export const analyzeText = async (text) => {
  const messages = [
    { role: 'system', content: 'You are a text analysis assistant.' },
    { role: 'user', content: `Please analyze this text and provide insights:\n\n${text}` }
  ];
  return chatCompletion(messages);
};

export const processDocument = async (document) => {
  const messages = [
    { role: 'system', content: 'You are a document processing assistant.' },
    { role: 'user', content: `Please process this document and extract key information:\n\n${document}` }
  ];
  return chatCompletion(messages);
};
