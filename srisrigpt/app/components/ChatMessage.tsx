'use client';

import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fadeIn`}>
      <div className={`max-w-[85%] sm:max-w-[70%] ${isUser ? 'order-2' : 'order-1'}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isUser
              ? 'bg-gradient-to-br from-amber-50 to-orange-50 text-gray-800 shadow-sm'
              : 'bg-white border-2 border-orange-300 text-gray-800 shadow-md relative'
          }`}
          style={
            !isUser
              ? {
                  boxShadow: '0 0 20px rgba(255, 153, 51, 0.15)',
                }
              : undefined
          }
        >
          {!isUser && (
            <div className="absolute -top-1 -left-1 w-6 h-6 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-white text-xs">॥</span>
            </div>
          )}
          
          <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap">{message.content}</p>
          
          {!isUser && message.metadata && (
            <div className="mt-3 pt-3 border-t border-orange-100 text-xs text-gray-500">
              <div className="flex flex-wrap gap-2">
                {message.metadata.title && (
                  <span className="bg-orange-50 px-2 py-1 rounded">
                    📖 {message.metadata.title}
                  </span>
                )}
                {message.metadata.theme && (
                  <span className="bg-amber-50 px-2 py-1 rounded">
                    🏷️ {message.metadata.theme}
                  </span>
                )}
                {message.metadata.date && (
                  <span className="bg-yellow-50 px-2 py-1 rounded">
                    📅 {message.metadata.date}
                  </span>
                )}
              </div>
            </div>
          )}
          
          {!isUser && message.reflection && (
            <div className="mt-3 pt-3 border-t border-orange-100">
              <p className="text-xs sm:text-sm italic text-gray-600 leading-relaxed">
                💭 {message.reflection}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
