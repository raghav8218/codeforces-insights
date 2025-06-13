import React from 'react';

function Tabs({ tab, setTab, tabNames, data }) {
  return (
    <div style={{ marginTop: '1rem' }}>
      {Object.keys(tabNames).map((key) => (
        <button
          key={key}
          onClick={() => setTab(key)}
          style={{
            margin: '0.3rem',
            padding: '0.4rem 0.8rem',
            backgroundColor: tab === key ? '#111' : '#eee',
            color: tab === key ? 'white' : 'black',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {tabNames[key]} ({data[key].length})
        </button>
      ))}
    </div>
  );
}

export default Tabs;
