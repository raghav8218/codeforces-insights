import React from 'react';

function SortButton({ sortAsc, toggleSort }) {
  return (
    <div style={{ margin: '1rem 0' }}>
      <button
        onClick={toggleSort}
        style={{
          padding: '0.4rem 0.8rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Sort by Rating: {sortAsc ? 'Asc' : 'Desc'}
      </button>
    </div>
  );
}

export default SortButton;
