'use client';

import { useState, useEffect } from 'react';

interface MeditationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MeditationModal({ isOpen, onClose }: MeditationModalProps) {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSeconds(60);
      setIsActive(false);
      return;
    }
  }, [isOpen]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const toggleMeditation = () => {
    setIsActive(!isActive);
  };

  const resetMeditation = () => {
    setSeconds(60);
    setIsActive(false);
  };

  if (!isOpen) return null;

  const progress = ((60 - seconds) / 60) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fadeIn">
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-2xl max-w-md w-full p-8">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Meditate Now
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="text-center space-y-6">
          <p className="text-gray-600">
            Take a moment to breathe and center yourself
          </p>
          
          {/* Timer Circle */}
          <div className="relative w-48 h-48 mx-auto">
            <svg className="transform -rotate-90 w-48 h-48">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-orange-200"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 88}`}
                strokeDashoffset={`${2 * Math.PI * 88 * (1 - progress / 100)}`}
                className="text-orange-500 transition-all duration-1000"
                strokeLinecap="round"
              />
            </svg>
            
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className={`text-5xl font-bold ${isActive ? 'animate-pulse' : ''} bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent`}>
                {seconds}
              </div>
              <div className="text-sm text-gray-600 mt-1">seconds</div>
            </div>
          </div>
          
          {/* Breathing Instructions */}
          {isActive && (
            <div className="animate-pulse text-gray-700">
              <p className="text-lg">
                {seconds > 30 ? '🌬️ Breathe in slowly...' : '😌 Breathe out gently...'}
              </p>
            </div>
          )}
          
          {/* Controls */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={toggleMeditation}
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full hover:from-orange-600 hover:to-yellow-600 transition-all shadow-md hover:shadow-lg"
            >
              {isActive ? 'Pause' : seconds === 60 ? 'Start' : 'Resume'}
            </button>
            {seconds !== 60 && (
              <button
                onClick={resetMeditation}
                className="px-6 py-3 bg-white text-gray-700 rounded-full hover:bg-gray-50 transition-all shadow-md border border-gray-200"
              >
                Reset
              </button>
            )}
          </div>
          
          {seconds === 0 && (
            <div className="bg-white p-4 rounded-lg border border-orange-200 animate-fadeIn">
              <p className="text-orange-600 font-semibold">🙏 Well done!</p>
              <p className="text-sm text-gray-600 mt-1">
                You&rsquo;ve completed your meditation session
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
