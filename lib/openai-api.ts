import axios from 'axios';

const openaiApiKey = `${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`;


export async function fetchAINews(): Promise<string[]> {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/text-davinci-003/completions',
      {
        prompt: 'Summarize the top AI or Machine Learning news article today. Please provide the URL for the article',
        max_tokens: 100,
        n: 5,
        stop: null,
        temperature: 1.0,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${openaiApiKey}`,
        },
      }
    );

    if (response.data.choices) {
      return response.data.choices.map((choice: { text: string }) => choice.text.trim());
    }
  } catch (error) {
    console.error('Error fetching AI news:', error);
  }

  return [];
}
