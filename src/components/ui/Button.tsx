import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asLink?: boolean;
  to?: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  asLink = false,
  to = '/',
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  const baseClasses = 'px-8 py-3 text-md font-bold rounded-full transition-all duration-300 inline-block text-center';
  
  const variantClasses = {
    primary: 'bg-electric-blue text-white btn-glow',
    secondary: 'bg-transparent border-2 border-champagne-gold text-champagne-gold hover:bg-champagne-gold hover:text-black',
  };

  const combinedClasses = cn(baseClasses, variantClasses[variant], className);

  if (asLink) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
