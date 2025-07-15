import React from "react";
import { useNavigate } from "react-router";

export default function ComponentA() {
  const navigate = useNavigate();

  const handleCreateAlert = () => {
    navigate("/crisis-alert-flow/page1");
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: 16, borderRadius: 8, display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 2 }}>
        <h2 style={{ fontWeight: 'bold', fontSize: '2rem' }}>Unexpected event? Keep your customers informed.</h2>
        <p>Send a crisis alert across your website, email, and social media instantly.</p>
        <button
          style={{
            background: 'black',
            color: 'white',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: 6,
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            marginTop: '1rem',
          }}
          onClick={handleCreateAlert}
        >
          Create Crisis Alert
        </button>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* Laptop icon SVG */}
        <svg width="80" height="80" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="48" height="28" rx="3" fill="#222" />
          <rect x="12" y="20" width="40" height="20" rx="2" fill="#f5f5f5" />
          <rect x="4" y="48" width="56" height="6" rx="2" fill="#888" />
          <rect x="20" y="52" width="24" height="2" rx="1" fill="#bbb" />
        </svg>
      </div>
    </div>
  );
} 