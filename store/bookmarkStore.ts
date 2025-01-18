import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { NewsArticle } from '../types';

interface BookmarkState {
  bookmarks: NewsArticle[];
  addBookmark: (article: NewsArticle) => void;
  removeBookmark: (articleId: string) => void;
  isBookmarked: (articleId: string) => boolean;
}

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set, get) => ({
      bookmarks: [],
      addBookmark: (article) => 
        set((state) => ({
          bookmarks: [...state.bookmarks, article]
        })),
      removeBookmark: (articleId) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((article) => article.id !== articleId)
        })),
      isBookmarked: (articleId) =>
        get().bookmarks.some((article) => article.id === articleId),
    }),
    {
      name: 'bookmarks-storage'
    }
  )
);