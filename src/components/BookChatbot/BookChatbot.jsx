import React, { useState } from 'react';

export default function BookChatbot() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function askQuestion() {
    if (!question.trim()) return;

    setMessages(prev => [...prev, { role: 'user', content: question }]);
    setQuestion('');
    setLoading(true);

    try {
      const res = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });

      const data = await res.json();

      setMessages(prev => [...prev, { role: 'assistant', content: data.answer || 'No answer received.' }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Backend not connected.' }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Chatbot Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          padding: '14px 18px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          fontSize: '22px',
          boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
          zIndex: 9999,
          transition: 'transform 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        🤖
      </button>

      {/* Chatbox */}
      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: 80,
            right: 20,
            width: 360,
            height: 480,
            background: 'linear-gradient(180deg, #F8FAFC 0%, #E0E7FF 100%)',
            borderRadius: 12,
            boxShadow: '0 12px 30px rgba(0,0,0,0.2)',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 9999,
            overflow: 'hidden',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: 14,
              fontWeight: '700',
              fontSize: 16,
              color: '#000208',
              background: 'linear-gradient(90deg, #6366F1 0%, #4338CA 100%)',
              textAlign: 'center',
            }}
          >
            Ask About This Book
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: 12,
              overflowY: 'auto',
              backgroundColor: '#F8FAFC',
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  marginBottom: 10,
                  display: 'flex',
                  justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <span
                  style={{
                    maxWidth: '75%',
                    display: 'inline-block',
                    padding: '8px 12px',
                    borderRadius: 12,
                    background: m.role === 'user' ? '#4F46E5' : '#E0E7FF',
                    color: m.role === 'user' ? '#041836' : '#1E3A8A',
                    fontSize: 14,
                    lineHeight: 1.4,
                    wordWrap: 'break-word',
                  }}
                >
                  {m.content}
                </span>
              </div>
            ))}
            {loading && (
              <div style={{ color: '#4F46E5', fontStyle: 'italic', marginTop: 4 }}>
                Thinking...
              </div>
            )}
          </div>

          {/* Input */}
          <div
            style={{
              padding: 12,
              borderTop: '1px solid #CBD5E1',
              backgroundColor: '#F1F5F9',
            }}
          >
            <input
              value={question}
              onChange={e => setQuestion(e.target.value)}
              placeholder="Ask a question..."
              style={{
                width: '100%',
                padding: 10,
                borderRadius: 8,
                border: '1px solid #041836',
                fontSize: 14,
                outline: 'none',
              }}
              onKeyDown={e => e.key === 'Enter' && askQuestion()}
            />
          </div>
        </div>
      )}
    </>
  );
}
