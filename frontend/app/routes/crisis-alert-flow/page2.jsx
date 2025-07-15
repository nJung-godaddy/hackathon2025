import React, { useState } from "react";
import { useNavigate } from "react-router";

const OPTIONS = [
  { label: "Email", value: "email" },
  { label: "Social Media", value: "social" },
];

export default function Page2() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("email");

  const handleBack = () => {
    navigate("/crisis-alert-flow/page1");
  };

  const handleContinue = () => {
    navigate("/crisis-alert-flow/page3");
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
          gap: '2rem',
        }}>
          {/* Toggle */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            {OPTIONS.map(opt => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setSelected(opt.value)}
                style={{
                  padding: '0.5rem 1.5rem',
                  border: selected === opt.value ? '2px solid #134e4a' : '1px solid #ccc',
                  background: selected === opt.value ? '#e0f2f1' : 'white',
                  color: selected === opt.value ? '#134e4a' : '#222',
                  borderRadius: 6,
                  fontWeight: 500,
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'all 0.15s',
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Content and Preview */}
          <div style={{ display: 'flex', gap: '2rem' }}>
            {/* Left: Content */}
            <div style={{ flex: 1 }}>
              {selected === "email" && (
                <>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: 8 }}>Email</h2>
                  <div style={{ color: '#444', fontSize: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Subject</label>
                    <input
                      type="text"
                      placeholder="Enter email subject"
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: 6,
                        fontSize: '1rem',
                        marginBottom: 16
                      }}
                    />
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Body</label>
                    <textarea
                      placeholder="Enter email body"
                      style={{
                        width: '100%',
                        minHeight: '120px',
                        padding: '0.75rem',
                        border: '1px solid #ccc',
                        borderRadius: 6,
                        fontSize: '1rem',
                        marginBottom: 12,
                        fontFamily: 'inherit',
                        resize: 'vertical'
                      }}
                    />
                    <button
                      type="button"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        marginTop: 4,
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
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 15h12M12.242 4.757a2.121 2.121 0 1 1 3 3l-7.07 7.07a1 1 0 0 1-.47.263l-3.11.69.69-3.11a1 1 0 0 1 .263-.47l7.07-7.07Z" stroke="#134e4a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Edit
                    </button>
                  </div>
                </>
              )}
              {selected === "social" && (
                <>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: 8 }}>Social Media</h2>
                  <div style={{ color: '#444', fontSize: '1rem' }}>
                    Social media content settings go here.
                  </div>
                </>
              )}
            </div>
            {/* Right: Preview */}
            <div style={{ flex: 1 }}>
              {selected === "email" && (
                <div style={{ border: '1px solid #eee', borderRadius: 8, padding: '1.5rem', background: '#fafbfc' }}>
                  <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8 }}>Email Preview</h3>
                  <div style={{ color: '#666', fontSize: '0.98rem' }}>
                    This is a preview of the email content.
                  </div>
                </div>
              )}
              {selected === "social" && (
                <div style={{ border: '1px solid #eee', borderRadius: 8, padding: '1.5rem', background: '#fafbfc' }}>
                  <h3 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 8 }}>Social Media Preview</h3>
                  <div style={{ color: '#666', fontSize: '0.98rem' }}>
                    This is a preview of the social media content.
                  </div>
                </div>
              )}
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
            width: '40%',
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