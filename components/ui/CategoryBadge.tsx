import React from 'react';

interface CategoryBadgeProps {
  category: string;
  size?: 'sm' | 'md';
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, size = 'md' }) => {
  const baseClasses = "inline-flex items-center rounded-full font-medium transition-all";
  const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm"
  };
  
  const categoryColors: Record<string, string> = {
    politics: "bg-red-100 text-red-800 hover:bg-red-200",
    sports: "bg-green-100 text-green-800 hover:bg-green-200",
    entertainment: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    technology: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    general: "bg-gray-100 text-gray-800 hover:bg-gray-200"
  };

  return (
    <span className={`
      ${baseClasses} 
      ${sizeClasses[size]}
      ${categoryColors[category.toLowerCase()] || categoryColors.general}
    `}>
      {category}
    </span>
  );
};