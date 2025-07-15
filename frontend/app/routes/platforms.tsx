import React, { useState } from "react";

const socialSites = [
  {
    name: "Facebook",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" fill="#000"/></svg>
    ),
    connected: false,
  },
  {
    name: "Instagram",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#fff" stroke="#000" strokeWidth="2"/><path d="M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 7.8A3 3 0 1 1 12 9a3 3 0 0 1 0 6zm6.4-7.9a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0z" fill="#000"/></svg>
    ),
    connected: false,
  },
  {
    name: "Google",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#fff" stroke="#000" strokeWidth="2"/><path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" fill="#000"/><rect x="17" y="7" width="2" height="2" rx="1" fill="#000"/></svg>
    ),
    connected: false,
  },
  {
    name: "Yelp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="5" fill="#fff" stroke="#000" strokeWidth="2"/><path d="M12 4v8m0 0l-4 4m4-4l4 4" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    connected: true,
  },
];

export default function ComponentB() {
  const [items] = useState(socialSites);

  const handleArrowClick = (siteName: string) => {
    alert(`Arrow clicked for ${siteName}`);
  };
  const handleConnectClick = (siteName: string) => {
    alert(`Connect ${siteName}`);
  };

  const connected = items.filter(item => item.connected);
  const notConnected = items.filter(item => !item.connected);

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8 }}>
      <h2 style={{ fontWeight: 'bold', paddingBottom: 12 }}>Platforms</h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {connected.map((item) => (
          <li key={item.name} style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ marginRight: 12 }}>{item.icon}</span>
            <span style={{ flex: 1, fontWeight: 500 }}>{item.name}</span>
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
        ))}
      </ul>
      {notConnected.length > 0 && (
        <hr style={{ border: 0, borderTop: '1px solid #eee', margin: '16px 0' }} />
      )}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {notConnected.map((item) => (
          <li key={item.name} style={{ display: 'flex', alignItems: 'center', marginBottom: 12 }}>
            <span style={{ marginRight: 12 }}>{item.icon}</span>
            <span style={{ flex: 1, fontWeight: 500 }}>{item.name}</span>
            <button
              onClick={() => handleConnectClick(item.name)}
              style={{ background: '#eee', color: '#222', border: 'none', borderRadius: 4, padding: '6px 14px', fontWeight: 500, cursor: 'pointer' }}
            >
              Connect
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
} 