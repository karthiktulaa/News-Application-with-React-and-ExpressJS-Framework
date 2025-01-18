import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NewsCard } from '../components/NewsCard';
import { NewsArticle } from '../types';
import { generateMockNews } from '../data/mockNews';

export const NewsFeed = () => {
  const { category = 'general' } = useParams();
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  useEffect(() => {
    setArticles(generateMockNews(category));
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="page-title mb-8 capitalize">
        {category === 'general' ? 'Latest News' : `${category} News`}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <NewsCard key={article.id} article={article} index={index} />
        ))}
      </div>
    </div>
  );
};