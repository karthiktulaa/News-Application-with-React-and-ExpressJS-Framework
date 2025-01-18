import { Language, LanguageOption } from '../types';

export const LANGUAGES: LanguageOption[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' }
];

export const translations = {
  hi: {
    'Latest News': 'ताज़ा खबर',
    'Politics': 'राजनीति',
    'Sports': 'खेल',
    'Entertainment': 'मनोरंजन',
    'Technology': 'प्रौद्योगिकी',
    'Read full story': 'पूरी खबर पढ़ें',
    'Back to News': 'वापस समाचार पर',
  },
  te: {
    'Latest News': 'తాజా వార్తలు',
    'Politics': 'రాజకీయాలు',
    'Sports': 'క్రీడలు',
    'Entertainment': 'వినోదం',
    'Technology': 'టెక్నాలజీ',
    'Read full story': 'పూర్తి కథనం చదవండి',
    'Back to News': 'వార్తలకు తిరిగి',
  },
  en: {
    'Latest News': 'Latest News',
    'Politics': 'Politics',
    'Sports': 'Sports',
    'Entertainment': 'Entertainment',
    'Technology': 'Technology',
    'Read full story': 'Read full story',
    'Back to News': 'Back to News',
  }
};

export const translate = (key: string, language: Language): string => {
  return translations[language][key as keyof typeof translations['en']] || key;
};