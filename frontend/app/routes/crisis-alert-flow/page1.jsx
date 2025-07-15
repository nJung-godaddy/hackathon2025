import React, { useState } from "react";
import { useNavigate } from "react-router";

const BUTTONS = [
  { label: "Email", value: "email" },
  { label: "Social Media", value: "social-media" },
  { label: "SMS", value: "sms" },
];

export default function Page1() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [selected, setSelected] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleContinue = () => {
    navigate("/crisis-alert-flow/page2");
  };

  const handleButtonClick = (value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
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
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            textAlign: 'center',
            margin: 0
          }}>
            Tell your audience what they need to know.
          </h1>

          {/* Subtext */}
          <p style={{ 
            fontSize: '1.1rem', 
            textAlign: 'center', 
            color: '#666',
            margin: 0
          }}>
            This will be the main body of text sent through communication channels.
          </p>

          {/* Horizontal Button Row */}
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {/* Selectable Buttons */}
            {BUTTONS.map((btn) => {
              const isSelected = selected.includes(btn.value);
              return (
                <button
                  key={btn.value}
                  type="button"
                  onClick={() => handleButtonClick(btn.value)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: isSelected ? '2px solid #134e4a' : '1px solid #ccc',
                    borderRadius: '6px',
                    background: 'white',
                    cursor: 'pointer',
                    fontWeight: '500',
                    color: isSelected ? '#134e4a' : '#222',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    position: 'relative',
                  }}
                >
                  {btn.label}
                  {isSelected && (
                    <span style={{ marginLeft: 4, display: 'flex', alignItems: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M5 9l3 3 5-5" stroke="#134e4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </button>
              );
            })}
            {/* Conversations Button (greyed out) */}
            <button
              type="button"
              disabled
              style={{
                padding: '0.75rem 1.5rem',
                border: '2px dashed #bbb',
                borderRadius: '6px',
                background: '#f5f5f5',
                color: '#bbb',
                fontWeight: '500',
                cursor: 'not-allowed',
                opacity: 0.7,
              }}
            >
              Conversations
            </button>
          </div>

          {/* Small Text Field with Description */}
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              fontWeight: '500'
            }}>
              Alert Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Name your crisis"
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '6px',
                fontSize: '1rem'
              }}
            />
            <p style={{ 
              fontSize: '0.875rem', 
              color: '#666',
              marginTop: '0.5rem',
              marginBottom: 0
            }}>
              Max 25 characters. This will only be visible to you. 
            </p>
          </div>

          {/* Large Body Text Input */}
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem',
              fontWeight: '500'
            }}>
              Alert Message
            </label>
            <textarea
              value={loading ? '' : body}
              onChange={e => setBody(e.target.value)}
              placeholder={loading ? '' : 'Provide detailed information about the situation, what customers should expect, and any actions they need to take...'}
              disabled={loading}
              style={{
                width: '100%',
                minHeight: '200px',
                padding: '1rem',
                border: '1px solid #ccc',
                borderRadius: '6px',
                fontSize: '1rem',
                resize: 'vertical',
                fontFamily: 'inherit',
                background: loading ? '#f5f5f5' : 'white',
                position: 'relative',
                color: loading ? '#bbb' : undefined
              }}
            />
            {loading && (
              <div style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
                minHeight: '200px',
              }}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <circle cx="18" cy="18" r="15" stroke="#134e4a" strokeWidth="4" opacity="0.2" />
                  <path d="M33 18a15 15 0 0 0-15-15" stroke="#134e4a" strokeWidth="4" strokeLinecap="round">
                    <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite" />
                  </path>
                </svg>
              </div>
            )}
            <button
              type="button"
              onClick={() => {
                setLoading(true);
                setBody("");
                setTimeout(() => {
                  setBody('This is an enhanced dummy message. Please review and edit as needed.');
                  setLoading(false);
                }, 1500);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginTop: 12,
                padding: '0.5rem 1.25rem',
                background: '#f5f5f5',
                color: '#134e4a',
                border: '1px solid #134e4a',
                borderRadius: 6,
                fontWeight: 500,
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ display: 'inline' }}>
                <path d="M10 2v2M10 16v2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M2 10h2M16 10h2M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="#134e4a" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" stroke="#134e4a" strokeWidth="2"/>
              </svg>
              Enhance Text
            </button>
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
            width: '20%',
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