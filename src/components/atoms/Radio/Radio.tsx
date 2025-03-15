import React from 'react';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Radio: React.FC<RadioProps> = ({ label, ...props }) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input type="radio" {...props} />
      {label && <span>{label}</span>}
    </label>
  );
};
