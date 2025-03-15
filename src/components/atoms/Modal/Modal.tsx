// Modal.tsx
import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  showCloseIcon?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseIcon = true,
}) => {
  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative z-60"
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseIcon && (
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
            onClick={onClose}
          >
            ×
          </button>
        )}
        {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}
        {children}
      </div>
    </div>
  );

  return typeof window !== 'undefined'
    ? ReactDOM.createPortal(modalContent, document.body)
    : null;
};
