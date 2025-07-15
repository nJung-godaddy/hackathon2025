import React from "react";
import { useNavigate } from "react-router";

export default function Page4() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/crisis-alert-flow/page3");
  };

  const handleContinue = () => {
    navigate("/crisis-alert-flow/page5");
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
          maxWidth: '900px', 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {/* Header */}
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', margin: 0 }}>
            Confirm Social Media
          </h1>
          <p style={{ fontSize: '1.1rem', textAlign: 'center', color: '#666', margin: 0 }}>
            This is the message that will be sent to your audience
          </p>
          {/* Two-column section */}
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem' }}>
            {/* Instagram Post */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="16" height="16" rx="4" stroke="#C13584" strokeWidth="2"/>
                  <circle cx="10" cy="10" r="4" stroke="#C13584" strokeWidth="2"/>
                  <circle cx="15" cy="5" r="1" fill="#C13584"/>
                </svg>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0, textAlign: 'center' }}>Instagram Post</h2>
              </div>
              <div style={{
                minHeight: '180px',
                background: '#fafbfc',
                border: '1px solid #eee',
                borderRadius: 8,
                padding: '1.5rem',
                fontSize: '1rem',
                color: '#222',
                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)'
              }}>
                Instagram post preview content.
              </div>
            </div>
            {/* Facebook Post */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="16" height="16" rx="4" stroke="#1877F3" strokeWidth="2"/>
                  <path d="M12 8h2V6.5A2.5 2.5 0 0 0 11.5 4h-3A2.5 2.5 0 0 0 6 6.5V8h2v8h4V8z" stroke="#1877F3" strokeWidth="2"/>
                </svg>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 600, margin: 0, textAlign: 'center' }}>Facebook Post</h2>
              </div>
              <div style={{
                minHeight: '180px',
                background: '#fafbfc',
                border: '1px solid #eee',
                borderRadius: 8,
                padding: '1.5rem',
                fontSize: '1rem',
                color: '#222',
                boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)'
              }}>
                Facebook post preview content.
              </div>
            </div>
          </div>
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
            width: '80%',
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
          <button
            onClick={handleContinue}
            style={{
              padding: '0.75rem 2rem',
              background: '#000',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Looks Good, Send It!
          </button>
        </div>
      </div>
    </div>
  );
} 