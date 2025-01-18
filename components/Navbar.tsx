import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Newspaper, LogOut, User } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useLanguageStore } from '../store/languageStore';
import { translate } from '../utils/languageUtils';

export const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuthStore();
  const location = useLocation();
  const { currentLanguage } = useLanguageStore();

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const getLinkClass = (path: string) => {
    return `nav-link ${isActiveLink(path) ? 'text-blue-600 after:w-full' : ''}`;
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <Newspaper className="h-8 w-8 text-blue-600 group-hover:animate-bounce-slow" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                NewsHub
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link to="/news/politics" className={getLinkClass('/news/politics')}>
                  {translate('Politics', currentLanguage)}
                </Link>
                <Link to="/news/sports" className={getLinkClass('/news/sports')}>
                  {translate('Sports', currentLanguage)}
                </Link>
                <Link to="/news/entertainment" className={getLinkClass('/news/entertainment')}>
                  {translate('Entertainment', currentLanguage)}
                </Link>
                <Link to="/news/technology" className={getLinkClass('/news/technology')}>
                  {translate('Technology', currentLanguage)}
                </Link>
                <LanguageSelector />
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{user?.name}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center space-x-1 text-red-600 hover:text-red-700 transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className={getLinkClass('/login')}>Login</Link>
                <Link to="/register" className="btn-primary">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};