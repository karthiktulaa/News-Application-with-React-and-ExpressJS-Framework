import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface NewsImageProps {
  src: string;
  alt: string;
  height?: string;
  overlay?: boolean;
}

export const NewsImage: React.FC<NewsImageProps> = ({ 
  src, 
  alt, 
  height = 'h-48',
  overlay = true 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setImageError(true);
  };

  return (
    <div className={`relative ${height} bg-gray-100 overflow-hidden`}>
      {!imageError ? (
        <>
          {isLoading && (
            <div className="absolute inset-0 animate-pulse bg-gray-200" />
          )}
          <img 
            src={src} 
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoad={handleLoad}
            onError={handleError}
          />
        </>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50">
          <ImageOff className="h-12 w-12 text-gray-400 mb-2" />
          <span className="text-sm text-gray-500">Image not available</span>
        </div>
      )}
      {overlay && !imageError && !isLoading && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      )}
    </div>
  );
};