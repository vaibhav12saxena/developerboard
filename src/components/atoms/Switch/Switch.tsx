import React from 'react';

export interface SwitchProps {
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  label?: string;
  name?: string;
  id?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  name,
  id,
}) => {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          name={name}
          id={id}
        />
        <div
          className={`w-10 h-5 rounded-full transition-colors duration-300
            ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'peer-checked:bg-blue-600 bg-gray-300'}
          `}
        ></div>
        <div
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-300
            ${disabled ? 'bg-gray-100' : ''}
            peer-checked:translate-x-5
          `}
        ></div>
      </div>
      {label && (
        <span
          className={`text-sm ${disabled ? 'text-gray-400' : 'text-gray-800'}`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
