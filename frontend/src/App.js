import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [backendMessage, setBackendMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5001/api/hello')
      .then(res => res.json())
      .then(data => {
        setBackendMessage(data.message);
        setLoading(false);
      })
      .catch(() => {
        setBackendMessage('Backend not connected yet');
        setLoading(false);
      });
  }, []);

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">CS348 Project</h1>
        <p className="subtitle">Database-Backed Application</p>
        
        <div className="card">
          <h2>🚀 Hello World!</h2>
          <p>Python + React Stack Ready</p>
        </div>

        <div className="card backend-status">
          <h3>Backend Status</h3>
          {loading ? (
            <p className="loading">Connecting...</p>
          ) : (
            <p className="message">{backendMessage}</p>
          )}
        </div>

        <div className="tech-stack">
          <span className="tech">Python</span>
          <span className="tech">Flask</span>
          <span className="tech">React</span>
          <span className="tech">SQL</span>
        </div>
      </div>
    </div>
  );
}

export default App;