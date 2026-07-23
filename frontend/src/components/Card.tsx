// src/components/Card.tsx
import type { ReactNode, CSSProperties } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  variant?: 'glass' | 'solid' | 'outline';
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
  style?: CSSProperties;  // ← Add this line
};

export default function Card({ 
  children, 
  className = '',
  variant = 'glass',
  hover = true,
  padding = 'md',
  rounded = 'xl',
  style = {}  // ← Add this with default empty object
}: CardProps) {
  const variantClasses = {
    glass: 'bg-white/5 backdrop-blur-sm border border-white/10',
    solid: 'bg-[#1a0f14] border border-white/10',
    outline: 'bg-transparent border border-white/10'
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const roundedClasses = {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl'
  };

  const hoverClasses = hover 
    ? 'hover:bg-white/10 hover:border-white/20 hover:transform hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
    : '';

  return (
    <div 
      className={`
        relative 
        transition-all duration-300 
        ${variantClasses[variant]}
        ${paddingClasses[padding]}
        ${roundedClasses[rounded]}
        ${hoverClasses}
        ${className}
      `}
      style={style}  // ← Add this line
    >
      {children}
    </div>
  );
}