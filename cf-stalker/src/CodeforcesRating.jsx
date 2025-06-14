import React, { useState } from 'react';
import SubmissionTable from './SubmissionTable';

const tabLabels = {
  ok: 'Correct ✅',
  wa: 'Wrong ❌',
  tle: 'TLE ⏰',
  other: 'Others ❓'
};

function CodeforcesRating() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState({ ok: [], wa: [], tle: [], other: [] });
  const [tab, setTab] = useState('ok');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const sortData = (arr) =>
    arr.slice().sort((a, b) => b.rating - a.rating || new Date(b.date) - new Date(a.date));

  const handleSubmit = async () => {
    if (!username.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://codeforces.com/api/user.status?handle=${username}`);
      const result = await response.json();

      if (result.status !== 'OK') throw new Error('Failed to fetch');

      const submissions = result.result.slice(0, 500);
      const temp = { ok: [], wa: [], tle: [], other: [] };
      const seen = new Set();

      for (let sub of submissions) {
        if (!sub.problem || !sub.verdict) continue;

        const key = sub.problem.contestId + '-' + sub.problem.index;
        if (seen.has(key)) continue;

        seen.add(key);
        const entry = {
          name: sub.problem.name,
          url: `https://codeforces.com/problemset/problem/${sub.problem.contestId}/${sub.problem.index}`,
          rating: sub.problem.rating || 0,
          date: new Date(sub.creationTimeSeconds * 1000).toLocaleDateString(),
          verdict: sub.verdict
        };

        if (sub.verdict === 'OK') temp.ok.push(entry);
        else if (sub.verdict === 'WRONG_ANSWER') temp.wa.push(entry);
        else if (sub.verdict === 'TIME_LIMIT_EXCEEDED') temp.tle.push(entry);
        else temp.other.push(entry);
      }

      setData(temp);
    } catch (err) {
      setError('Failed to fetch data. Try again.');
    }
    setLoading(false);
  };

  const hasData = Object.values(data).some(arr => arr.length > 0);
  const bgColor = darkMode ? '#0f1a1d' : '#f7f7f7';
  const textColor = darkMode ? '#eee' : '#222';
  const inputBg = darkMode ? '#1e272e' : '#fff';
  const inputBorder = darkMode ? '#555' : '#ccc';

  return (
    <div style={{ border:'4rem',minHeight: '100vh', backgroundColor: bgColor, color: textColor, padding: '2rem' }}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          backgroundColor: darkMode ? '#555' : '#ddd',
          color: darkMode ? '#fff' : '#000',
          border: 'none',
          borderRadius: '8px',
          padding: '0.5rem 1rem',
          cursor: 'pointer'
        }}
      >
        {darkMode ? '🌙 Light Mode' : '☀️ Dark Mode'}
      </button>

      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Codeforces Insights
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter Codeforces username"
          style={{
            padding: '1rem',
            fontSize: '1.1rem',
            borderRadius: '8px',
            width: '300px',
            border: `1px solid ${inputBorder}`,
            textAlign: 'center',
            backgroundColor: inputBg,
            color: textColor
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            padding: '0.75rem 1.5rem',
            fontSize: '1.1rem',
            borderRadius: '8px',
            backgroundColor: '#00cec9',
            border: 'none',
            cursor: 'pointer',
            color: '#000'
          }}
        >
          Get Submissions
        </button>
      </div>

      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}

      {hasData && (
        <>
          <div style={{ marginTop: '2rem', textAlign: 'center' }}>
            {Object.keys(tabLabels).map((key) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                style={{
                  margin: '0 0.5rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  border: tab === key ? '2px solid #00cec9' : `1px solid ${inputBorder}`,
                  backgroundColor: tab === key ? (darkMode ? '#1e272e' : '#d1f3f2') : (darkMode ? '#142024' : '#eee'),
                  color: '#00cec9',
                  cursor: 'pointer'
                }}
              >
                {tabLabels[key]}
              </button>
            ))}
          </div>

          <SubmissionTable data={data} tab={tab} sortData={sortData} />
        </>
      )}
    </div>
  );
}

export default CodeforcesRating;
