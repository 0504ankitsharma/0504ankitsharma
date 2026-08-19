'use client';

export default function LoadingSpinner() {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-white border-2 border-orange-300 rounded-2xl px-4 py-3 shadow-md">
        <div className="flex items-center gap-2">
          <div className="animate-spin w-6 h-6 text-orange-500">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3"/>
              <path d="M12 2C6.48 2 2 6.48 2 12h2c0-4.41 3.59-8 8-8s8 3.59 8 8h2c0-5.52-4.48-10-10-10z"/>
            </svg>
          </div>
          <span className="text-sm text-gray-600">Gurudev is reflecting...</span>
        </div>
      </div>
    </div>
  );
}
