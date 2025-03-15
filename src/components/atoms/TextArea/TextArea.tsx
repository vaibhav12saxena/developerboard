// components/atoms/Textarea/Textarea.tsx
import React, { TextareaHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'error' | 'disabled';
}

export const Textarea: React.FC<TextareaProps> = ({
  className,
  variant = 'default',
  ...props
}) => {
  const baseStyles =
    'w-full px-3 py-2 border rounded-lg text-sm focus:outline-none transition-colors resize-none';
  const variantStyles = {
    default:
      'border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200',
    error: 'border-red-500 focus:border-red-500 focus:ring-red-200',
    disabled: 'bg-gray-100 cursor-not-allowed text-gray-500',
  };

  return (
    <textarea
      className={clsx(baseStyles, variantStyles[variant], className)}
      {...props}
    />
  );
};
