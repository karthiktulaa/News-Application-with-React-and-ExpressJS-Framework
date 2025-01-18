import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Clock, Share2 } from 'lucide-react';
import { NewsArticle } from '../types';
import { NewsImage } from './NewsImage';
import { CategoryBadge } from './ui/CategoryBadge';
import { AnimatedCard } from './ui/AnimatedCard';
import { Rating } from './Rating';
import { formatDate } from '../utils/dateUtils';
import { useLanguageStore } from '../store/languageStore';
import { useNewsStore } from '../store/newsStore';
import { translate } from '../utils/languageUtils';

interface NewsCardProps {
  article: NewsArticle;
  index: number;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, index }) => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguageStore();
  const ratings = useNewsStore((state) => state.ratings[article.id]);

  const handleClick = () => {
    navigate(`/article/${article.id}`, { state: { article } });
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: article.translations?.[currentLanguage]?.title || article.title,
        text: article.translations?.[currentLanguage]?.description || article.description,
        url: window.location.href,
      });
    }
  };

  const title = article.translations?.[currentLanguage]?.title || article.title;
  const description = article.translations?.[currentLanguage]?.description || article.description;

  return (
    <AnimatedCard index={index}>
      <div className="relative group">
        <NewsImage 
          src={article.imageUrl} 
          alt={title}
          className="aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={handleShare}
            className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <Share2 className="w-4 h-4 text-gray-700" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <CategoryBadge category={translate(article.category, currentLanguage)} />
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            <time>{formatDate(article.publishedAt)}</time>
          </div>
        </div>
        <h3 
          className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer"
          onClick={handleClick}
        >
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center text-blue-600 group/link cursor-pointer"
            onClick={handleClick}
          >
            <span className="text-sm font-medium group-hover/link:underline">
              {translate('Read full story', currentLanguage)}
            </span>
            <ExternalLink className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
          </div>
          <Rating 
            articleId={article.id}
            rating={ratings?.total || 0}
            totalRatings={ratings?.count || 0}
          />
        </div>
      </div>
    </AnimatedCard>
  );
};