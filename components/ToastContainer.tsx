import React from 'react';
import { useToast } from '../context/ToastContext';
import Toast from './Toast';

const ToastContainer: React.FC = () => {
    const { toasts, removeToast } = useToast();

    return (
        <div className="fixed top-5 right-5 z-[100] w-full max-w-xs">
            {toasts.map(toast => (
                <Toast
                    key={toast.id}
                    id={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onDismiss={removeToast}
                />
            ))}
        </div>
    );
};

export default ToastContainer;
