import React, { useState } from "react";

const initialItems = [
  { name: "Activity 1" },
  { name: "Activity 2" },
  { name: "Activity 3" },
];

export default function ComponentD() {
  const [open, setOpen] = useState(true);
  const [items] = useState(initialItems);

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
      <div
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', marginBottom: 12 }}
      >
        <h2 style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: 0 }}>Recent Activity</h2>
        <button
          onClick={toggleOpen}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: 8, display: 'flex', alignItems: 'center' }}
          aria-label={open ? 'Collapse list' : 'Expand list'}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{
              transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}
          >
            <path d="M7 6l5 4-5 4" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {open && (
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map((item, idx) => (
            <li key={item.name} style={{ padding: '8px 0', borderBottom: idx < items.length - 1 ? '1px solid #eee' : 'none' }}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 