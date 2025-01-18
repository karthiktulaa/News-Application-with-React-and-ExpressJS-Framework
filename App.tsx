import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { NewsFeed } from './pages/NewsFeed';
import { NewsDetail } from './pages/NewsDetail';
import { Bookmarks } from './pages/Bookmarks';
import { useAuthStore } from './store/authStore';
import { useThemeStore } from './store/themeStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isDarkMode = useThemeStore((state) => state.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <Routes>
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
          <Route path="/news/:category" element={isAuthenticated ? <NewsFeed /> : <Navigate to="/login" />} />
          <Route path="/article/:id" element={isAuthenticated ? <NewsDetail /> : <Navigate to="/login" />} />
          <Route path="/bookmarks" element={isAuthenticated ? <Bookmarks /> : <Navigate to="/login" />} />
          <Route path="/" element={isAuthenticated ? <NewsFeed /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;