import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

type NativeInputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'prefix' | 'suffix'
>;

interface InputProps extends NativeInputProps {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  debounceTime?: number;
  onDebouncedChange?: (value: string) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  className,
  leftIcon,
  rightIcon,
  prefix,
  suffix,
  debounceTime = 0,
  onChange,
  onDebouncedChange,
  value,
  defaultValue,
  ...rest
}) => {
  const [internalValue, setInternalValue] = useState<string>(
    defaultValue !== undefined ? String(defaultValue) : ''
  );

  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const debounceTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (!isControlled) {
      setInternalValue(val);
    }

    if (onChange) {
      onChange(e);
    }

    if (debounceTime > 0 && onDebouncedChange) {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
      debounceTimeout.current = setTimeout(() => {
        onDebouncedChange(val);
      }, debounceTime);
    }
  };

  useEffect(() => {
    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, []);

  return (
    <div className={clsx('flex flex-col gap-1', fullWidth && 'w-full')}>
      {label && (
        <label className="text-sm text-gray-700 font-medium">{label}</label>
      )}

      <div
        className={clsx(
          'flex items-center border rounded-lg px-3 py-2 bg-white transition-all',
          error ? 'border-red-500' : 'border-gray-300',
          fullWidth && 'w-full',
          className
        )}
      >
        {leftIcon && (
          <div className="mr-2  flex-shrink-0 w-4 h-4 text-gray-500">
            {leftIcon}
          </div>
        )}
        {prefix && <div className="mr-2 text-gray-500">{prefix}</div>}

        <input
          className="flex-1 outline-none bg-transparent text-sm text-gray-800 placeholder:text-gray-400"
          value={currentValue}
          onChange={handleChange}
          {...rest}
        />

        {suffix && <div className="ml-2 text-gray-500">{suffix}</div>}
        {rightIcon && (
          <div className="ml-2  flex-shrink-0 w-4 h-4 text-gray-500">
            {rightIcon}
          </div>
        )}
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
