import React, { useState } from "react";

const initialItems = [
  { name: "Item C1", active: true },
  { name: "Item C2", active: false },
  { name: "Item C3", active: true },
];

export default function ComponentC() {
  const [items] = useState(initialItems);

  const handleArrowClick = (itemName: string) => {
    alert(`Arrow clicked for ${itemName}`);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
      <h2 style={{ fontWeight: 'bold', paddingBottom: 12 }}>Action Center</h2>
      <p style={{ paddingBottom: 12 }}>Here are some quick actions you can take based on components of your business.</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map((item, idx) => (
          <React.Fragment key={item.name}>
            {idx > 0 && (
              <hr style={{ border: 0, borderTop: '1px solid #eee', margin: '8px 0' }} />
            )}
            <li style={{ display: 'flex', alignItems: 'center', padding: '8px 0' }}>
              <span style={{ flex: 1 }}>{item.name}</span>
              <span
                style={{
                  background: item.active ? '#e0f7e9' : '#f5f5f5',
                  color: item.active ? '#1a7f37' : '#888',
                  borderRadius: 12,
                  padding: '2px 12px',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  marginRight: 12,
                }}
              >
                {item.active ? 'Active' : 'Inactive'}
              </span>
              <button
                onClick={() => handleArrowClick(item.name)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
                aria-label={`Action for ${item.name}`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5l8 7-8 7" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
} 