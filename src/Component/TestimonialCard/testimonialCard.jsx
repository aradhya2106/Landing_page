import React from 'react';

const TestimonialCard = ({ name, title, quote }) => {
  return (
    <div
      className="bg-gray-800/50 p-6 rounded-xl text-left flex flex-col justify-between
                 border border-transparent // Base transparent border
                 hover:border-purple-500/70 // Slightly more opaque hover border
                 hover:scale-[1.02] // Slight scale up effect
                 hover:shadow-[0_0_15px_rgba(177,69,255,0.3)] // Stronger glowing shadow
                 transition-all duration-300 ease-out // Smooth transition
                 backdrop-blur-sm font-sora"
    >
      <div>
        <p className="text-base text-gray-200 mb-4 italic leading-relaxed">
          {quote}
        </p>
        <div className="border-t border-gray-700 pt-4 mt-4"> {/* Separator line */}
          <h3 className="text-lg font-semibold text-white">
            {name}
          </h3>
          <p className="text-sm text-gray-400">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;