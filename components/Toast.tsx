import React, { useEffect, useState } from 'react';

type ToastType = 'success' | 'error' | 'info';

interface ToastProps {
    id: number;
    message: string;
    type: ToastType;
    onDismiss: (id: number) => void;
}

const ICONS = {
    success: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    error: (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
    info: (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    ),
};

const TYPE_CLASSES = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
};

const Toast: React.FC<ToastProps> = ({ id, message, type, onDismiss }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => onDismiss(id), 300); // Wait for fade-out animation
        }, 3000); // Auto-dismiss after 3 seconds

        return () => clearTimeout(timer);
    }, [id, onDismiss]);

    const handleDismiss = () => {
        setIsExiting(true);
        setTimeout(() => onDismiss(id), 300);
    };

    return (
        <div
            className={`flex items-center text-white p-4 rounded-lg shadow-lg mb-2 ${TYPE_CLASSES[type]} ${isExiting ? 'animate-fadeOut' : 'animate-slideIn'}`}
            role="alert"
        >
            <div className="flex-shrink-0">{ICONS[type]}</div>
            <div className="ml-3 text-sm font-medium">{message}</div>
            <button
                onClick={handleDismiss}
                className="ml-auto -mx-1.5 -my-1.5 bg-transparent text-white hover:text-gray-200 rounded-lg p-1.5 inline-flex h-8 w-8"
                aria-label="Dismiss"
            >
                <span className="sr-only">Dismiss</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
};

export default Toast;
