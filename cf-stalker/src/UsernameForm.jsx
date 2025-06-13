import React from 'react';

function UsernameForm({ username, setUsername, fetchSubmissions }) {
  return (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '4rem',
        gap: '1rem'
    }}>
      <input
    type="text"
    placeholder="Enter Codeforces username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={fetchSubmissions} style={{ padding: '1rem', marginLeft: '0.5rem' }}>
        Get Submissions
      </button>
    </div>
  );
}

export default UsernameForm;
