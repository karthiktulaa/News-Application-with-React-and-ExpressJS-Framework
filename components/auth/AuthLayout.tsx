import React from 'react';
import { Link } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  linkText: string;
  linkTo: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
  title,
  subtitle,
  linkText,
  linkTo
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-lg p-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            {title}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {subtitle}{' '}
            <Link to={linkTo} className="font-medium text-blue-600 hover:text-blue-500">
              {linkText}
            </Link>
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};