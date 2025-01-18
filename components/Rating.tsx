import React from 'react';
import { Star } from 'lucide-react';
import { useNewsStore } from '../store/newsStore';

interface RatingProps {
  articleId: string;
  rating: number;
  totalRatings: number;
}

export const Rating: React.FC<RatingProps> = ({ articleId, rating, totalRatings }) => {
  const rateArticle = useNewsStore((state) => state.rateArticle);
  const averageRating = totalRatings > 0 ? rating / totalRatings : 0;

  const handleRating = (value: number) => {
    rateArticle(articleId, value);
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleRating(value)}
            className="focus:outline-none"
          >
            <Star
              className={`w-6 h-6 ${
                value <= averageRating
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
      <p className="text-sm text-gray-600">
        {totalRatings > 0
          ? `${averageRating.toFixed(1)} (${totalRatings} ratings)`
          : 'No ratings yet'}
      </p>
    </div>
  );
};