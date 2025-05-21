import React, { useState, useEffect, useRef, FormEvent, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineComment, AiOutlineSend } from 'react-icons/ai';

type Message = {
  from: 'user' | 'bot';
  text: string;
};

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [resumeText, setResumeText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [typing, setTyping] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const apiKey = 'AIzaSyDXJvHwpuqd05aRAjes5lIXCT-5Cd9n_2c';
  // example prompts for quick questions
  const examplePrompts = [
    "Tell me about your projects",
    "Show me your skills",
    "What's your experience?"
  ];
  // ask helper to auto-send a prompt
  const ask = async (userMessage: string) => {
    setMessages(prev => [...prev, { from: 'user', text: userMessage }]);
    setLoading(true);
    const systemPrompt = `You are Bhanu Nama's career assistant. Use the following résumé excerpts to answer the visitor's question as accurately as possible.`;
    try {
      const response = await fetch(
        `/api/gemini/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: `${systemPrompt}\n\n${resumeText}\n\nVisitor: ${userMessage}` }] }],
            generationConfig: { temperature: 0.3, maxOutputTokens: 512 }
          })
        }
      );
      if (!response.ok) {
        const errText = await response.text();
        setMessages(prev => [...prev, { from: 'bot', text: `API Error: ${response.status}` }]);
      } else {
        const data = await response.json();
        const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'Sorry, I could not generate a response.';
        setMessages(prev => [...prev, { from: 'bot', text: botReply }]);
      }
    } catch (err) {
      setMessages(prev => [...prev, { from: 'bot', text: 'Error generating response. Check console.' }]);
    } finally {
      setLoading(false);
    }
  };

  // Load résumé chunks
  useEffect(() => {
    fetch('/resume-chunks.json')
      .then(res => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      })
      .then((chunks: string[]) => setResumeText(chunks.join('\n\n')))
      .catch(err => console.error('Failed to load résumé chunks:', err));
  }, []);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Welcome typing effect with suggestions on open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTyping(true);
      setSuggestions([]);
      setTimeout(() => {
        setMessages([{ from: 'bot', text: "Hi, I'm Bhanu's Bot! I can tell you about my skills, projects, or education. Ask me anything!" }]);
        setTyping(false);
        setSuggestions(['Tell me about your skills', 'Show me your projects', 'What is your education?']);
        inputRef.current?.focus();
      }, 1200);
    }
  }, [isOpen]);

  const handleSuggestion = useCallback((text: string) => {
    setMessages(prev => [...prev, { from: 'user', text }]);
    setInput(text);
    setSuggestions([]);
    inputRef.current?.focus();
  }, []);

  const sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const userMessage = input.trim();
    setMessages(prev => [...prev, { from: 'user', text: userMessage }]);
    setInput('');
    setLoading(true);

    const systemPrompt = `You are Bhanu Nama's career assistant. Use the following résumé excerpts to answer the visitor's question as accurately as possible.`;
    try {
      const response = await fetch(
        `/api/gemini/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: `${systemPrompt}\n\n${resumeText}\n\nVisitor: ${userMessage}` }
                ]
              }
            ],
            generationConfig: {
              temperature: 0.3,
              maxOutputTokens: 512
            }
          })
        }
      );
      if (!response.ok) {
        const errText = await response.text();
        console.error('Gemini API Error:', response.status, errText);
        setMessages(prev => [...prev, { from: 'bot', text: `API Error: ${response.status}` }]);
      } else {
        const data = await response.json();
        const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text ?? 'Sorry, I could not generate a response.';
        setMessages(prev => [...prev, { from: 'bot', text: botReply }]);
      }
    } catch (err) {
      console.error('Error generating response:', err);
      setMessages(prev => [...prev, { from: 'bot', text: 'Error generating response. Check console for details.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end space-y-2">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="flex flex-col w-80 h-[480px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl ring-1 ring-gray-200 dark:ring-gray-700 overflow-hidden mb-4"
          >
            <div className="flex items-center justify-between px-4 py-2 bg-indigo-600 dark:bg-indigo-900">
              <h2 className="text-lg font-semibold text-white">Chat with me</h2>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-indigo-200">×</button>
            </div>
            <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3 bg-gray-50 dark:bg-gray-900">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`max-w-[75%] px-3 py-2 rounded-2xl ${
                    msg.from === 'user'
                      ? 'self-end bg-indigo-500 text-white'
                      : 'self-start bg-gray-200 text-gray-800'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
              {/* Example prompts for quick start */}
              {messages.length === 0 && !loading && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {examplePrompts.map((p, i) => (
                    <button key={i} onClick={() => ask(p)} className="bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-100 px-3 py-1 rounded-full text-xs hover:bg-indigo-200 dark:hover:bg-indigo-600 transition">
                      {p}
                    </button>
                  ))}
                </div>
              )}
              {/* Follow-up suggestions below bot reply */}
              {messages.length > 0 && messages[messages.length - 1].from === 'bot' && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {examplePrompts.map((p, i) => (
                    <button
                      key={i}
                      onClick={() => ask(p)}
                      className="bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-indigo-100 px-3 py-1 rounded-full text-xs hover:bg-indigo-200 dark:hover:bg-indigo-600 transition"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <form onSubmit={sendMessage} className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow bg-transparent border-none text-gray-800 dark:text-gray-200 focus:outline-none"
              />
              <button type="submit" disabled={!input.trim()} className="p-2 text-indigo-600 hover:text-indigo-800 disabled:opacity-50">
                <AiOutlineSend size={20} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={() => setIsOpen(prev => !prev)}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg ring-2 ring-indigo-500/50 transition-transform hover:scale-110"
        aria-label="Toggle chat"
      >
        <AiOutlineComment size={24} />
      </motion.button>
    </div>
  );
};

export default Chat; 