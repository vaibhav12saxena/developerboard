import React from 'react';
import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // /** Example prop - describe it properly */
  // text?: string;
  label?: string;
  error?: string;
  fullWidth?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  className,
  label,
  error,
  fullWidth,
  ...props
}) => {
  return (
    <div className={`flex flex-col gap-1 ${fullWidth ? 'w-full' : 'w-fit'} ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        className={`px-3 py-2 border rounded-lg outline-none transition 
          ${error ? 'border-red-500' : 'border-gray-300'} 
          focus:ring-2 focus:ring-blue-500`}
        {...props}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};
