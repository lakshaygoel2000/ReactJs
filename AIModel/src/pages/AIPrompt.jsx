import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import '../styles/AIPrompt.css';

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

function AIPrompt() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse('');

    try {
      const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });
      setResponse(result.text || 'No response from AI');
      console.log(result)
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-wrapper">
      <div className="ai-card">
        <h1 className="ai-title">Ask Gemini AI</h1>
        <form onSubmit={handleSubmit} className="ai-form">
          <textarea
            className="ai-textarea"
            placeholder="Type your prompt..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            required
          />
          <button type="submit" disabled={loading} className="ai-button">
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </form>

        {error && <div className="ai-error">{error}</div>}

        {response && (
          <div className="ai-response">
            <h3>Response:</h3>
            <p>{response.length > 2000 ? response.substring(0, 2000) + '...' : response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AIPrompt;
