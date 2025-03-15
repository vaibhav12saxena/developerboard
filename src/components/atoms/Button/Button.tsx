import React from 'react';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  text?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const base = 'px-4 py-2 rounded font-medium transition-colors duration-200';
  const styles =
    variant === 'primary'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : variant === 'secondary'
      ? 'bg-gray-100 text-black border hover:bg-gray-200'
      : 'border border-blue-600 text-blue-600 hover:bg-blue-50';

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children || props.text}
    </button>
  );
};
