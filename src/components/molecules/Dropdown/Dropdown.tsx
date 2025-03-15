import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export interface DropdownOption {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
}

export interface DropdownProps {
  options: DropdownOption[];
  onSelect: (selected: DropdownOption[] | DropdownOption) => void;
  placeholder?: string;
  multiselect?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder = 'Select',
  multiselect = false,
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<
    DropdownOption[] | DropdownOption | null
  >(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isOptionSelected = (option: DropdownOption) => {
    if (multiselect && Array.isArray(selected)) {
      return selected.some((s) => s.value === option.value);
    }
    if (!multiselect && selected && 'value' in selected) {
      return selected.value === option.value;
    }
    return false;
  };

  const handleOptionClick = (option: DropdownOption) => {
    if (multiselect) {
      let newSelected = Array.isArray(selected) ? [...selected] : [];
      const isAlreadySelected = newSelected.some(
        (s) => s.value === option.value
      );

      if (isAlreadySelected) {
        newSelected = newSelected.filter((s) => s.value !== option.value);
      } else {
        newSelected.push(option);
      }

      setSelected(newSelected);
      onSelect(newSelected);
    } else {
      setSelected(option);
      onSelect(option);
      setOpen(false);
    }
  };

  const handleSelectAllToggle = () => {
    if (Array.isArray(selected) && selected.length === options.length) {
      setSelected([]);
      onSelect([]);
    } else {
      setSelected(options);
      onSelect(options);
    }
  };

  const isAllSelected =
    Array.isArray(selected) && selected.length === options.length;

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = () => {
    if (multiselect && Array.isArray(selected)) {
      return selected.length > 0
        ? selected.map((s) => s.label).join(', ')
        : placeholder;
    }
    if (!multiselect && selected && 'label' in selected) {
      return selected.label;
    }
    return placeholder;
  };

  return (
    <div className="relative inline-block w-60" ref={dropdownRef}>
      <button
        className="w-full px-4 py-2 border rounded-md text-left bg-white shadow-sm flex items-center justify-between"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>{selectedLabel()}</span>
        <ChevronDown size={16} className="ml-2 text-gray-500" />
      </button>
      {open && (
        <div className="absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg max-h-64 overflow-auto">
          {multiselect && (
            <div
              className="px-4 py-2 border-b text-sm text-blue-600 cursor-pointer hover:bg-gray-100 font-medium"
              onClick={handleSelectAllToggle}
            >
              {isAllSelected ? 'Deselect All' : 'Select All'}
            </div>
          )}
          {options.map((option) => {
            const isSelected = isOptionSelected(option);
            return (
              <div
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                  isSelected ? 'bg-gray-100 font-medium' : ''
                }`}
              >
                {multiselect && (
                  <input
                    type="checkbox"
                    checked={isSelected}
                    readOnly
                    className="accent-blue-600"
                  />
                )}
                {option.icon && <span>{option.icon}</span>}
                <span>{option.label}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
