import React, { useEffect, useState } from 'react';

function ImageModal({ image, title, onClose }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => setIsVisible(true), 10);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      onClick={onClose}
    >
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-all duration-300"
        style={{ 
          opacity: isVisible ? 1 : 0,
          backdropFilter: isVisible ? 'blur(4px)' : 'blur(0px)'
        }}
      />
      <div
        className="relative z-10 max-w-5xl max-h-[90vh] w-full transition-all duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.95)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-maroon-900/20 rounded-lg overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-[90vh] object-contain"
          />
        </div>
        {title && (
          <p 
            className="text-center text-maroon-300 mt-4 text-lg font-semibold transition-all duration-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: '150ms'
            }}
          >
            {title}
          </p>
        )}
      </div>
    </div>
  );
}

export default ImageModal;
