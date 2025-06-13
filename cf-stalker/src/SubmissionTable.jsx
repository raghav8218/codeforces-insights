import React from 'react';

function SubmissionTable({ data, tab, sortData }) {
  return (
    <table style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ backgroundColor: '#1f2b2d', color: '#00cec9' }}>
          <th style={{ border: '1px solid #444', padding: '8px' }}>#</th>
          <th style={{ border: '1px solid #444', padding: '8px' }}>Problem</th>
          <th style={{ border: '1px solid #444', padding: '8px' }}>Link</th>
          <th style={{ border: '1px solid #444', padding: '8px' }}>Rating</th>
          <th style={{ border: '1px solid #444', padding: '8px' }}>Date</th>
          {tab === 'other' && <th style={{ border: '1px solid #444', padding: '8px' }}>Verdict</th>}
        </tr>
      </thead>
      <tbody>
        {sortData(data[tab]).map((entry, idx) => (
          <tr key={idx}>
            <td style={{ border: '1px solid #444', padding: '8px', textAlign: 'center' }}>{idx + 1}</td>
            <td style={{ border: '1px solid #444', padding: '8px' }}>{entry.name}</td>
            <td style={{ border: '1px solid #444', padding: '8px' }}>
              <a href={entry.url} target="_blank" rel="noopener noreferrer">
                Open
              </a>
            </td>
            <td style={{ border: '1px solid #444', padding: '8px' }}>{entry.rating}</td>
            <td style={{ border: '1px solid #444', padding: '8px' }}>{entry.date}</td>
            {tab === 'other' && (
              <td style={{ border: '1px solid #444', padding: '8px' }}>{entry.verdict}</td>
            )}
          </tr>
        ))}
        {data[tab].length === 0 && (
          <tr>
            <td colSpan={tab === 'other' ? 6 : 5} style={{ textAlign: 'center', padding: '10px' }}>
              No submissions in this category.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default SubmissionTable;
