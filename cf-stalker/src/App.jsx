import { useState, useEffect } from 'react';
import CodeforcesRating from './CodeforcesRating';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
        <button onClick={() => setDarkMode(prev => !prev)} className="toggle-btn">
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <CodeforcesRating />
    </div>
  );
}

export default App;
