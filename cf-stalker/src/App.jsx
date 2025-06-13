import { useState } from 'react';
import CodeforcesRating from './CodeforcesRating';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="toggle-btn"
        >
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <CodeforcesRating />
    </div>
  );
}

export default App;
