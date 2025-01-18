import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

export const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      ) : (
        <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
};