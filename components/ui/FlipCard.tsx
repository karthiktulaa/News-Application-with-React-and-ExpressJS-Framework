import React, { useState } from 'react';
import { NewsArticle } from '../../types';

interface FlipCardProps {
  article: NewsArticle;
}

export const FlipCard: React.FC<FlipCardProps> = ({ article }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[400px] perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer ${
          isFlipped ? 'rotate-x-180' : ''
        }`}
      >
        <div className="absolute inset-0 backface-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg">
            <div className="absolute bottom-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">{article.title}</h3>
              <p className="text-gray-200 line-clamp-2">{article.description}</p>
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-white dark:bg-gray-800 p-6 rounded-lg rotate-x-180 backface-hidden">
          <div className="h-full overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              {article.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
              {article.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};