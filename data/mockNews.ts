import { NewsArticle } from '../types';
import { categoryImages } from './images';
import { politicsContent } from './categories/politics';
import { sportsContent } from './categories/sports';
import { getRecentDates } from '../utils/dateUtils';

const newsContent = {
  politics: politicsContent,
  sports: sportsContent,
  // Add other categories with proper fallbacks
};

const getImageUrl = (category: string, index: number): string => {
  const images = categoryImages[category] || categoryImages.politics;
  return images[index % images.length];
};

export const generateMockNews = (category: string): NewsArticle[] => {
  // Default to politics if category not found
  const categoryContent = newsContent[category as keyof typeof newsContent] || newsContent.politics;
  const recentDates = getRecentDates(4);
  
  return Array.from({ length: 4 }, (_, index) => ({
    id: `${category}-${index + 1}`,
    title: categoryContent.en[index].title,
    description: categoryContent.en[index].description,
    content: categoryContent.en[index].content,
    category,
    imageUrl: getImageUrl(category, index),
    publishedAt: recentDates[index].toISOString(),
    source: 'NewsHub',
    translations: {
      hi: categoryContent.hi[index],
      te: categoryContent.te[index]
    },
    rating: 0,
    totalRatings: 0
  }));
};