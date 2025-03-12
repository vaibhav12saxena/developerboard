import React from 'react';
import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  /** Example prop - describe it properly */
  text?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  const base = 'px-4 py-2 rounded font-medium';
  const styles =
    variant === 'primary'
      ? 'bg-blue-600 text-white'
      : 'bg-gray-100 text-black border';
  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
};
