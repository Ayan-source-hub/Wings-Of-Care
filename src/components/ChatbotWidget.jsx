import { useState, useEffect, useRef } from 'react';
import './ChatbotWidget.css';
import ChatbotHeadsetIcon from './ChatbotHeadsetIcon';

const getAIResponse = async (message) => {
  try {
    const lowerMsg = message.toLowerCase();
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
      return 'Hello! Welcome to WingsOfCare NGO. How can I help you today?';
    }
    if (lowerMsg.includes('about')) {
      return 'WingsOfCare is an NGO dedicated to making a positive impact through education, environment, and social initiatives. Would you like to know more about our projects or how to get involved?';
    }
    if (lowerMsg.includes('contact')) {
      return 'You can contact us at wingsofcare@kol.org or call +91-8646795432. Our office is at TMSL, Kolkata, India.';
    }
    if (lowerMsg.includes('donate')) {
      return 'Thank you for your interest in donating! Please visit our Donate page or contact us for more information.';
    }
    if (lowerMsg.includes('volunteer')) {
      return 'We are always looking for passionate volunteers! Please visit our Volunteers section or contact us to join.';
    }
    if (lowerMsg.includes('event')) {
      return 'Check out our Events page for upcoming activities and how you can participate!';
    }
    if (lowerMsg.includes('newsletter')) {
      return 'You can subscribe to our newsletter at the bottom of our homepage to stay updated.';
    }
    return `Mock AI Response: You said "${message}". How can I assist you further?`;
  } catch (error) {
    return `Mock AI Response: You said "${message}". How can I assist you further?`;
  }
};

export default function ChatbotWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    const aiResponse = await getAIResponse(input);
    setMessages((prev) => [
      ...prev,
      {
        text:
          aiResponse.startsWith('Error') || aiResponse.startsWith('Mock')
            ? aiResponse
            : aiResponse,
        sender:
          aiResponse.startsWith('Error') || aiResponse.startsWith('Mock')
            ? 'error'
            : 'ai',
      },
    ]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        className="chat-icon-button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Open chat"
        style={{ padding: 0 }}
      >
        <ChatbotHeadsetIcon />
      </button>
      {isOpen && (
        <div className="chat-popup">
          <div className="chat-container">
            <header className="chat-header">
              <h1>AI Chatbot</h1>
              <button
                aria-label="Close chat"
                className="close-button"
                onClick={() => setIsOpen(false)}
              >
                ✖
              </button>
            </header>
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.sender === 'user'
                      ? 'user-message'
                      : msg.sender === 'error'
                      ? 'error-message'
                      : 'ai-message'
                  }`}
                >
                  <div className="message-content">{msg.text}</div>
                </div>
              ))}
              {isLoading && (
                <div className="message ai-message">
                  <div className="message-content">Loading...</div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form className="chat-input" onSubmit={handleSendMessage}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                autoFocus
              />
              <button type="submit" disabled={isLoading}>
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
