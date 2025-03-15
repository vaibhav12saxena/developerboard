// src/components/Toast/Toast.tsx
import React from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastProps {
  type: ToastType;
  message: string;
  onClose?: () => void;
}

const typeStyles: Record<ToastType, string> = {
  success: 'bg-green-100 text-green-800 border-green-300',
  error: 'bg-red-100 text-red-800 border-red-300',
  info: 'bg-blue-100 text-blue-800 border-blue-300',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
};

export const Toast: React.FC<ToastProps> = ({ type, message, onClose }) => {
  return (
    <div
      className={`border rounded-lg px-4 py-2 shadow-md flex justify-between items-center space-x-4 ${typeStyles[type]}`}
    >
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="text-sm text-gray-600 hover:text-black"
          aria-label="Close toast"
        >
          ✖
        </button>
      )}
    </div>
  );
};
