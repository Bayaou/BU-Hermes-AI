// src/components/Button.tsx
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
};

export default function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-400 hover:to-purple-400 text-white font-semibold hover:shadow-[0_0_40px_rgba(249,168,212,0.3)] hover:scale-105 active:scale-95 border border-white/20',
    secondary: 'bg-white/5 hover:bg-white/10 text-white/90 hover:text-white font-medium border border-white/10 hover:border-white/20 hover:shadow-[0_0_30px_rgba(167,139,250,0.15)]',
    outline: 'bg-transparent hover:bg-white/5 text-white/80 hover:text-white font-medium border border-white/20 hover:border-white/30',
    ghost: 'bg-transparent hover:bg-white/5 text-white/60 hover:text-white font-medium'
  };

  const baseClasses = `
    rounded-full 
    transition-all duration-300 
    ${sizeClasses[size]} 
    ${variantClasses[variant]} 
    ${className}
    flex items-center justify-center gap-2
  `;

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}