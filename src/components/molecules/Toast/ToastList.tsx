import ReactDOM from 'react-dom';
import { useToastContext } from './toast.context';
import { X } from 'lucide-react';

export const ToastList = () => {
  const { toasts, removeToast } = useToastContext();

  if (typeof document === 'undefined') return null;

  return ReactDOM.createPortal(
    <div className="fixed top-4 right-4 z-[1000] space-y-3 w-[300px]">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-start justify-between gap-2 p-4 rounded-xl shadow-lg text-white ${
            toast.type === 'success'
              ? 'bg-green-600'
              : toast.type === 'error'
              ? 'bg-red-600'
              : toast.type === 'info'
              ? 'bg-blue-600'
              : toast.type === 'warning'
              ? 'bg-yellow-600 text-black'
              : 'bg-gray-800'
          }`}
        >
          <div className="flex-1">{toast.message}</div>
          <button onClick={() => removeToast(toast.id)}>
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>,
    document.body
  );
};
