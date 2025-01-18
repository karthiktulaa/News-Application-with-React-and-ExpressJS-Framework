import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  index?: number;
  onClick?: () => void;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, index = 0, onClick }) => {
  return (
    <div 
      className="card-hover bg-white/90 backdrop-blur-sm rounded-xl shadow-md overflow-hidden animate-fade-in"
      onClick={onClick}
      style={{ 
        animationDelay: `${index * 100}ms`,
        transform: `perspective(1000px) rotateX(${Math.sin(index) * 2}deg)`
      }}
    >
      {children}
    </div>
  );
};