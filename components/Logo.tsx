import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
    return (
        <div className={`flex items-center group ${className}`}>
            <svg
                className="w-8 h-8 text-primary-500 mr-2 transition-transform duration-300 group-hover:rotate-[-10deg] group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <path d="M19.12,4.88a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.42,7.77,7.77,0,0,1-1.48,8.23,8,8,0,0,1-11.32,0,1,1,0,0,0-1.41,1.41A10,10,0,0,0,16,17.4V19a1,1,0,0,0,2,0V17.4a10,10,0,0,0,1.12-12.52ZM8.23,12.06a6,6,0,0,1,8.48,0,5.8,5.8,0,0,0,1.1-6.18,1,1,0,1,0-1.72-.94A3.79,3.79,0,0,1,14.2,8.41a4,4,0,0,1-4.88,5.19,1,1,0,1,0-1.1-1.72A6,6,0,0,1,8.23,12.06Z" />
                <path d="M15,2a1,1,0,0,0-1,1V4.28a5.79,5.79,0,0,0-2.32.75,1,1,0,0,0,1,1.73,3.82,3.82,0,0,1,1.55-.5A1,1,0,0,0,15,2Z" />
            </svg>
            <span className={`text-2xl font-bold tracking-tight ${className.includes('text-white') ? 'text-white' : 'text-slate-800'}`}>
                Quick<span className={className.includes('text-white') ? 'text-white' : 'text-primary-600'}>Bite</span>
            </span>
        </div>
    );
};

export default Logo;