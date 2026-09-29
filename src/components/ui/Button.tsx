import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline-light';
  size?: 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all transform';
  
  const getSizeClasses = () => {
    return size === 'lg' ? 'px-8 py-4 text-base' : 'px-6 py-3 text-sm';
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-1';
      case 'secondary':
        return 'bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-50';
      case 'outline-light':
        return 'bg-transparent border-2 border-white text-white hover:bg-white/10';
      default:
        return 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-1';
    }
  };

  const classes = `${baseClasses} ${getSizeClasses()} ${getVariantClasses()} ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) {
      return (
        <a href={href} className={classes} target={href.startsWith('http') ? "_blank" : undefined} rel={href.startsWith('http') ? "noopener noreferrer" : undefined}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
