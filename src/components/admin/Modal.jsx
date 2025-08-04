import { createPortal } from "react-dom";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
