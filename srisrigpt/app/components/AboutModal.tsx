'use client';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            About Gurudev
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
        
        <div className="space-y-4 text-gray-700">
          <p className="leading-relaxed">
            <strong>Sri Sri Ravi Shankar</strong> is a globally renowned spiritual leader, humanitarian, and founder of the Art of Living Foundation. His mission is to create a stress-free, violence-free society through practical wisdom and meditation techniques.
          </p>
          
          <p className="leading-relaxed">
            Through his <strong>Weekly Knowledge Sheets</strong>, Gurudev shares profound insights on life, spirituality, and human values. These teachings have touched millions of hearts worldwide, bringing peace, joy, and wisdom to people from all walks of life.
          </p>
          
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200">
            <p className="italic text-sm leading-relaxed">
              &ldquo;Life is nothing to be very serious about. Life is a ball in your hands to play with. Don&rsquo;t hold on to the ball.&rdquo;
            </p>
            <p className="text-right text-xs mt-2 text-gray-600">— Sri Sri Ravi Shankar</p>
          </div>
          
          <p className="leading-relaxed text-sm">
            This application provides AI-powered spiritual guidance based on Gurudev&rsquo;s teachings, helping you find answers to life&rsquo;s questions with wisdom and compassion.
          </p>
        </div>
        
        <button
          onClick={onClose}
          className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full hover:from-orange-600 hover:to-yellow-600 transition-all shadow-md"
        >
          Close
        </button>
      </div>
    </div>
  );
}
