export interface NewsContent {
  title: string;
  description: string;
  content: string;
}

export interface CategoryContent {
  en: NewsContent[];
  hi: NewsContent[];
  te: NewsContent[];
}

export interface CategoryImages {
  [key: string]: string[];
}