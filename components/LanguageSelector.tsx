import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguageStore } from '../store/languageStore';
import { LANGUAGES } from '../utils/languageUtils';

export const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguageStore();

  return (
    <div className="relative group">
      <button className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors">
        <Globe className="h-5 w-5 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {LANGUAGES.find(lang => lang.code === currentLanguage)?.nativeName}
        </span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 opacity-0 invisible
                    group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {LANGUAGES.map((language) => (
          <button
            key={language.code}
            onClick={() => setLanguage(language.code)}
            className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors
                      ${currentLanguage === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
          >
            <span className="font-medium">{language.nativeName}</span>
            <span className="text-gray-500 ml-2">{language.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};