'use client';

import { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import LoadingSpinner from './components/LoadingSpinner';
import AboutModal from './components/AboutModal';
import MeditationModal from './components/MeditationModal';
import { Message } from './types';

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      role: 'assistant',
      content: 'Hari Om! 🙏 Welcome to SriSriGPT. I am here to share wisdom and guidance inspired by Gurudev Sri Sri Ravi Shankar\'s teachings. Feel free to ask any question about life, spirituality, or personal growth.',
      reflection: 'The path to wisdom begins with a question.',
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showMeditation, setShowMeditation] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // TODO: Replace with actual API endpoint when backend is ready
      // Uncomment the following lines when connecting to FastAPI backend:
      // import axios from 'axios';
      // const response = await axios.post('/api/chat', { message: content });
      // const assistantMessage: Message = response.data;
      
      // Mock response for demonstration
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'This is a demonstration response. In the actual implementation, this will connect to your FastAPI backend at the /api/chat endpoint to provide wisdom from Gurudev\'s Knowledge Sheets.',
        metadata: {
          title: 'Knowledge Sheet #123',
          theme: 'Peace and Wisdom',
          date: '2024',
        },
        reflection: 'When you are established in the Self, you can be both a witness and a participant in the game of life.',
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I apologize, but I\'m having trouble connecting to the wisdom server. Please try again in a moment.',
      };
      
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: '0',
        role: 'assistant',
        content: 'Hari Om! 🙏 Welcome to SriSriGPT. I am here to share wisdom and guidance inspired by Gurudev Sri Sri Ravi Shankar\'s teachings. Feel free to ask any question about life, spirituality, or personal growth.',
        reflection: 'The path to wisdom begins with a question.',
      }
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-orange-50/30 to-amber-50/30">
      <Header onAboutClick={() => setShowAbout(true)} onClearChat={handleClearChat} />
      
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="container mx-auto max-w-4xl">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isLoading && <LoadingSpinner />}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
      
      {/* Floating Meditation Button */}
      <button
        onClick={() => setShowMeditation(true)}
        className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center z-40"
        title="Meditate Now"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"/>
        </svg>
      </button>
      
      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
      <MeditationModal isOpen={showMeditation} onClose={() => setShowMeditation(false)} />
    </div>
  );
}

