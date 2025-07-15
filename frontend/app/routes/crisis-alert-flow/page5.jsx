import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Page5() {
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSent(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    navigate("/crisis-alert-flow/page4");
  };

  const handleDone = () => {
    navigate("/");
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      minHeight: '100vh'
    }}>
      {/* Main Content */}
      <div style={{ 
        flex: 1,
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        padding: '2rem'
      }}>
        <div style={{ 
          maxWidth: '500px', 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          textAlign: 'center'
        }}>
          {!sent ? (
            <>
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>We are sending out your messages</h1>
              <p style={{ fontSize: '1.1rem', color: '#666', margin: 0 }}>This may take a moment</p>
              <div style={{ marginTop: 32 }}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="20" stroke="#134e4a" strokeWidth="6" opacity="0.2" />
                  <path d="M44 24a20 20 0 0 0-20-20" stroke="#134e4a" strokeWidth="6" strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" from="0 24 24" to="360 24 24" dur="1s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            </>
          ) : (
            <>
              <div style={{ marginBottom: 16 }}>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <circle cx="28" cy="28" r="26" fill="#e0f7f1" stroke="#134e4a" strokeWidth="4" />
                  <path d="M18 29l8 8 12-14" stroke="#134e4a" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>Your messages have been sent out!</h1>
              <button
                onClick={handleDone}
                style={{
                  marginTop: 32,
                  padding: '0.75rem 2rem',
                  background: '#134e4a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                Done
              </button>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '1px solid #eee',
        padding: '1.5rem 2rem',
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'stretch'
      }}>
        {/* Progress Bar */}
        <div style={{
          width: '100%',
          height: '4px',
          background: '#eee',
        }}>
          <div style={{
            width: '100%',
            height: '100%',
            background: '#134e4a',
            transition: 'width 0.3s ease'
          }} />
        </div>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button
            onClick={handleBack}
            style={{
              padding: '0.75rem 1.5rem',
              border: '1px solid #ccc',
              borderRadius: '6px',
              background: 'white',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
} 