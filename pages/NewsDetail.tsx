import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { NewsArticle } from '../types';
import { NewsImage } from '../components/NewsImage';
import { NewsMetadata } from '../components/NewsMetadata';
import { Rating } from '../components/Rating';
import { useLanguageStore } from '../store/languageStore';
import { useNewsStore } from '../store/newsStore';
import { translate } from '../utils/languageUtils';

export const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state as { article: NewsArticle };
  const { currentLanguage } = useLanguageStore();
  const ratings = useNewsStore((state) => state.ratings[article.id]);

  // Get content in current language
  const translatedContent = article.translations?.[currentLanguage] || {
    title: article.title,
    description: article.description,
    content: article.content
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-gray-600 hover:text-blue-600 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        {translate('Back to News', currentLanguage)}
      </button>

      <article className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative">
          <NewsImage 
            src={article.imageUrl}
            alt={translatedContent.title}
            height="h-96"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium mb-3">
              {translate(article.category, currentLanguage)}
            </span>
            <h1 className="text-3xl font-bold text-white mb-2">
              {translatedContent.title}
            </h1>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <NewsMetadata 
              date={article.publishedAt}
              source={article.source}
            />
            <Rating 
              articleId={article.id}
              rating={ratings?.total || 0}
              totalRatings={ratings?.count || 0}
            />
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              {translatedContent.description}
            </p>
            <div className="text-gray-800 leading-relaxed whitespace-pre-line">
              {translatedContent.content}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};