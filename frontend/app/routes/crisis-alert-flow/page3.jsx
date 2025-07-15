import React from "react";
import { useNavigate } from "react-router";

export default function Page3() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/crisis-alert-flow/page2");
  };

  const handleContinue = () => {
    navigate("/crisis-alert-flow/page4");
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
          maxWidth: '700px', 
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {/* Header */}
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', margin: 0 }}>
            Confirm Email
          </h1>
          {/* Subject */}
          <p style={{ fontSize: '1.1rem', textAlign: 'center', color: '#666', margin: 0 }}>
            This is the message that will be sent to your audience
          </p>
          {/* Preview Box */}
          <div style={{
            minHeight: '220px',
            background: '#fafbfc',
            border: '1px solid #eee',
            borderRadius: 8,
            padding: '2rem',
            fontSize: '1.1rem',
            color: '#222',
            marginTop: '1.5rem',
            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)'
          }}>
            This is a preview of the email content.
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
            width: '60%',
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
            Continue
          </button>
        </div>
      </div>
    </div>
  );
} 