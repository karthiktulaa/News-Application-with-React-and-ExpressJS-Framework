export interface User {
  id: string;
  email: string;
  name: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  category: string;
  imageUrl: string;
  publishedAt: string;
  source: string;
  translations?: {
    [key: string]: {
      title: string;
      description: string;
      content: string;
    };
  };
}

export type Language = 'en' | 'hi' | 'te';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}