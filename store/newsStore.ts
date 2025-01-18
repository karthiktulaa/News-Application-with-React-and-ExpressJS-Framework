import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface NewsState {
  ratings: Record<string, { total: number; count: number }>;
  rateArticle: (articleId: string, rating: number) => void;
}

export const useNewsStore = create<NewsState>()(
  persist(
    (set) => ({
      ratings: {},
      rateArticle: (articleId, rating) =>
        set((state) => {
          const current = state.ratings[articleId] || { total: 0, count: 0 };
          return {
            ratings: {
              ...state.ratings,
              [articleId]: {
                total: current.total + rating,
                count: current.count + 1,
              },
            },
          };
        }),
    }),
    {
      name: 'news-ratings',
    }
  )
);