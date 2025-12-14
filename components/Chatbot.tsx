import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

interface ChatbotProps {
  onBookCall: () => void;
}

const QUICK_REPLIES = [
  "How can you help my business?",
  "What is your pricing?",
  "Tell me about Business Intelligence",
  "I need a Business Plan"
];

export const Chatbot: React.FC<ChatbotProps> = ({ onBookCall }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: 'Hello! Welcome to SQ Consulting. I am your AI growth assistant. How can we accelerate your business today?',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (text: string = inputText) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({ role: m.role, text: m.text }));
    const responseText = await sendMessageToGemini(history, userMsg.text);

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMsg]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[92vw] md:w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 animate-slide-up ring-1 ring-black/5">
          {/* Header */}
          <div className="bg-primary p-4 flex justify-between items-center text-white bg-gradient-to-r from-primary to-primary-light">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold shadow-sm">SQ</div>
              <div>
                <span className="font-bold block text-sm">SQ AI Assistant</span>
                <div className="flex items-center gap-1.5 opacity-80">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-xs">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition">
              <span className="material-icons text-sm">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-2 flex-shrink-0 text-primary">
                        <span className="material-icons text-sm">smart_toy</span>
                    </div>
                )}
                <div 
                  className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="material-icons text-sm text-primary">smart_toy</span>
                 </div>
                <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-bl-none shadow-sm flex space-x-1.5 items-center">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Quick Replies */}
          {!isLoading && messages.length < 5 && (
            <div className="px-4 pb-2 bg-slate-50 flex gap-2 overflow-x-auto no-scrollbar">
                {QUICK_REPLIES.map((reply, i) => (
                    <button 
                        key={i}
                        onClick={() => handleSend(reply)}
                        className="whitespace-nowrap px-3 py-1.5 bg-white border border-primary/20 text-primary text-xs rounded-full hover:bg-primary hover:text-white transition shadow-sm"
                    >
                        {reply}
                    </button>
                ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
             <div className="flex gap-2 relative">
               <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-gray-100 border-0 rounded-full pl-4 pr-12 py-3 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
               />
               <button 
                onClick={() => handleSend()}
                disabled={isLoading || !inputText.trim()}
                className="absolute right-1 top-1 bottom-1 w-10 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition disabled:opacity-50 disabled:hover:bg-secondary"
               >
                 <span className="material-icons text-sm">send</span>
               </button>
             </div>
             <div className="mt-3 flex justify-between items-center px-1">
                 <span className="text-[10px] text-gray-400">Powered by Gemini AI</span>
                 <button 
                    onClick={() => {
                        setIsOpen(false);
                        onBookCall();
                    }}
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                 >
                    <span className="material-icons text-xs">calendar_today</span>
                    Book a Call
                 </button>
             </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center"
        >
          <span className="absolute right-full mr-4 bg-white text-gray-800 px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Chat with us!
          </span>
          <div className="bg-gradient-to-tr from-primary to-primary-light text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all transform group-hover:scale-110 group-hover:rotate-3 border-4 border-white">
            <span className="material-icons text-3xl">chat_bubble</span>
          </div>
          <span className="absolute top-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      )}
    </div>
  );
};
