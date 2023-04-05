import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import { fetchAINews } from '../lib/openai-api';
import Link from 'next/link';

const HomePage: React.FC = () => {
  const [newsSummaries, setNewsSummaries] = useState<string[]>([]);

  useEffect(() => {
    async function fetchNews() {
      const summaries = await fetchAINews();
      setNewsSummaries(summaries);
    }

    fetchNews();
  }, []);

  return (
    <Layout title="Home" description="Welcome to a NextJS and GPT-3 demo">
    <h1 className="red-header">Welcome to </h1>
    <p>
      This is a small demo of a NextJS page displaying the top AI & Machine Learning news summaries generated by OpenAI's GPT-3 API.
    </p>

    <h2 className="red-header">Top AI & Machine Learning News</h2>
    <div className="news-container">
      {newsSummaries.map((summary, index) => (
        <div key={index} className="news-block">
          <img src={`https://picsum.photos/200/200?random=${index}`} alt={`News ${index}`} />
          <div className="news-content">
            <ul>
              {summary.split('\n').map((line, lineIndex) => (
                <li key={`line-${lineIndex}`}>{line}</li>
              ))}
            </ul>
            <Link href="https://example.com" target="_blank" rel="noopener noreferrer" className="red-link">
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  </Layout>
  );
};

export default HomePage;