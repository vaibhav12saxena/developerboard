// Checkbox.tsx
import React from 'react';

export interface CheckboxProps {
  id?: string;
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="accent-blue-600 w-4 h-4"
      />
      {label && <span className="text-sm">{label}</span>}
    </label>
  );
};
