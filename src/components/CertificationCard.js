import React from 'react';

function CertificationCard({ image, title, description, onImageClick }) {
  return (
    <div className="flex gap-6 p-6 rounded-lg hover:bg-maroon-900/10 transition-all duration-300">
      <div 
        className="min-w-[200px] w-[200px] h-[112px] rounded overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
        onClick={onImageClick}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-maroon-300 mb-2">
          {title}
        </h3>
        
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CertificationCard;
