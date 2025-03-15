import React from 'react';
import {
  X,
  Info,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
} from 'lucide-react';
import clsx from 'clsx';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastItemProps {
  id: string;
  type: ToastType;
  message: string;
  onClose: (id: string) => void;
}

const iconMap = {
  success: <CheckCircle2 className="text-green-600 w-5 h-5" />,
  error: <AlertCircle className="text-red-600 w-5 h-5" />,
  info: <Info className="text-blue-600 w-5 h-5" />,
  warning: <AlertTriangle className="text-yellow-600 w-5 h-5" />,
};

export const ToastItem: React.FC<ToastItemProps> = ({
  id,
  type,
  message,
  onClose,
}) => {
  return (
    <div
      className={clsx(
        'flex items-start gap-3 rounded-lg shadow-lg p-4 w-full max-w-sm text-white',
        {
          'bg-green-600': type === 'success',
          'bg-red-600': type === 'error',
          'bg-blue-600': type === 'info',
          'bg-yellow-600': type === 'warning',
        }
      )}
    >
      <div>{iconMap[type]}</div>
      <div className="flex-1">{message}</div>
      <button
        onClick={() => onClose(id)}
        className="text-white hover:opacity-75"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
