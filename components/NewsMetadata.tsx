import React from 'react';
import { Calendar, Globe } from 'lucide-react';

interface NewsMetadataProps {
  date: string;
  source: string;
  className?: string;
}

export const NewsMetadata: React.FC<NewsMetadataProps> = ({ date, source, className = '' }) => {
  return (
    <div className={`flex items-center space-x-4 text-sm text-gray-500 ${className}`}>
      <div className="flex items-center">
        <Calendar className="h-4 w-4 mr-1" />
        {new Date(date).toLocaleDateString()}
      </div>
      <div className="flex items-center">
        <Globe className="h-4 w-4 mr-1" />
        {source}
      </div>
    </div>
  );
};