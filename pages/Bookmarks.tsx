import React from 'react';
import { useBookmarkStore } from '../store/bookmarkStore';
import { NewsCard } from '../components/NewsCard';

export const Bookmarks = () => {
  const bookmarks = useBookmarkStore((state) => state.bookmarks);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="page-title mb-8">My Bookmarks</h1>
      {bookmarks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No bookmarks yet. Start saving articles you want to read later!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bookmarks.map((article, index) => (
            <NewsCard key={article.id} article={article} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};