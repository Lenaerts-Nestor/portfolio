// src/components/Modal.tsx
import React from "react";
import { X } from "lucide-react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50">
            <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
            <div className="flex min-h-full items-center justify-center p-4">
                <div className="relative w-full max-w-4xl max-h-[85vh] bg-white shadow-xl transition-all rounded-2xl flex flex-col">
                    <div className="flex justify-between items-center p-6 border-b border-slate-200">
                        <h2 className="text-2xl font-bold text-slate-800">Week 1</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-red-100 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6 text-red-500" />
                        </button>
                    </div>
                    <div className="overflow-y-auto no-scrollbar flex-1">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;