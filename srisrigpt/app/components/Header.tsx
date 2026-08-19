'use client';

interface HeaderProps {
  onAboutClick: () => void;
  onClearChat: () => void;
}

export default function Header({ onAboutClick, onClearChat }: HeaderProps) {
  return (
    <header className="relative h-40 sm:h-48 overflow-hidden">
      {/* Background banner with soft blur */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ff9933" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-white/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          {/* Circular portrait placeholder */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center shadow-lg border-2 border-white">
            <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Title */}
          <div className="flex-1">
            <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
              SriSriGPT
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 hidden sm:block">
              Wisdom from the Heart of Gurudev
            </p>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            onClick={onAboutClick}
            className="px-3 py-1.5 text-xs sm:text-sm text-orange-600 hover:bg-orange-50 rounded-full transition-colors border border-orange-200"
          >
            About
          </button>
          <button
            onClick={onClearChat}
            className="px-3 py-1.5 text-xs sm:text-sm text-gray-600 hover:bg-gray-50 rounded-full transition-colors border border-gray-200"
          >
            Clear
          </button>
        </div>
      </div>
    </header>
  );
}
