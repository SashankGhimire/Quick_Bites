import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';
import { useToast } from '../context/ToastContext';

const ShoppingBagIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
);

const Header: React.FC = () => {
    const { cartCount } = useCart();
    const { isAuthenticated, logout } = useAuth();
    const { addToast } = useToast();
    const [isAnimating, setIsAnimating] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const prevCartCount = useRef(cartCount);

    useEffect(() => {
        if (cartCount > prevCartCount.current) {
            setIsAnimating(true);
            const timer = setTimeout(() => setIsAnimating(false), 500); // Animation duration
            return () => clearTimeout(timer);
        }
        prevCartCount.current = cartCount;
    }, [cartCount]);

    const handleLogout = () => {
        logout();
        addToast('You have been logged out.', 'success');
        setMobileMenuOpen(false);
    }
    
    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `text-lg font-semibold transition-colors duration-300 relative pb-1 ${
            isActive
                ? 'text-primary-600'
                : 'text-slate-700 hover:text-primary-600'
        } after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary-600 after:transition-transform after:duration-300 after:ease-out ${
            isActive ? 'after:scale-x-100' : 'after:scale-x-0'
        } hover:after:scale-x-100 after:origin-center`;
    
    const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
        `block py-3 px-4 text-lg text-center font-semibold rounded-md ${
        isActive
            ? 'bg-primary-50 text-primary-600'
            : 'text-slate-700 hover:bg-slate-100'
        }`;

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="transition-transform duration-300 transform" onClick={() => setMobileMenuOpen(false)}>
                           <Logo />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                         <NavLink to="/" className={navLinkClasses} end>
                            Home
                        </NavLink>
                        <NavLink to="/menu" className={navLinkClasses}>
                            Menu
                        </NavLink>
                        <NavLink to="/about" className={navLinkClasses}>
                            About Us
                        </NavLink>
                    </div>

                    {/* Right-side actions & Mobile Menu Toggle */}
                    <div className="flex items-center justify-end">
                         {/* Right-side actions for desktop */}
                        <div className="hidden md:flex items-center space-x-2">
                             {isAuthenticated ? (
                                <>
                                    <Link to="/profile" className="relative flex items-center p-2 text-slate-600 hover:text-primary-600 transition-colors rounded-full hover:bg-slate-100" aria-label="View profile">
                                        <UserIcon />
                                    </Link>
                                    <Link to="/cart" className="relative flex items-center p-2 text-slate-600 hover:text-primary-600 transition-colors rounded-full hover:bg-slate-100" aria-label="View shopping cart">
                                        <ShoppingBagIcon />
                                        {cartCount > 0 && (
                                            <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary-500 rounded-full">
                                                {cartCount}
                                            </span>
                                        )}
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="px-4 py-2 text-sm font-semibold text-primary-600 border border-primary-600 rounded-full hover:bg-primary-50 transition-colors"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <Link to="/login" className="px-4 py-2 text-sm font-semibold bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors">
                                    Login
                                </Link>
                            )}
                        </div>
                        
                        {/* Cart for mobile (if authenticated) */}
                        {isAuthenticated && (
                            <Link
                                to="/cart"
                                className="md:hidden relative flex items-center p-2 text-slate-600 hover:text-primary-600 transition-colors rounded-full hover:bg-slate-100"
                                aria-label="View shopping cart"
                            >
                                <ShoppingBagIcon />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary-500 rounded-full">
                                        {cartCount}
                                    </span>
                                )}
                            </Link>
                        )}
                        
                        {/* Mobile Menu Button */}
                        <div className="md:hidden ml-2">
                            <button
                                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                <div className="w-6 h-6 flex flex-col justify-around">
                                    <span className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
                                    <span className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                    <span className={`block h-0.5 w-full bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                 {/* Mobile Navigation Menu */}
                <div className={`transition-all duration-300 ease-in-out md:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'}`}>
                    <div className="flex flex-col space-y-2">
                        <NavLink to="/" className={mobileNavLinkClasses} onClick={() => setMobileMenuOpen(false)} end>Home</NavLink>
                        <NavLink to="/menu" className={mobileNavLinkClasses} onClick={() => setMobileMenuOpen(false)}>Menu</NavLink>
                        <NavLink to="/about" className={mobileNavLinkClasses} onClick={() => setMobileMenuOpen(false)}>About Us</NavLink>
                        <div className="border-t border-slate-200 my-2"></div>
                        {isAuthenticated ? (
                            <>
                                <NavLink to="/profile" className={mobileNavLinkClasses} onClick={() => setMobileMenuOpen(false)}>Profile</NavLink>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left py-3 px-4 text-lg font-semibold rounded-md text-red-600 hover:bg-red-50"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <NavLink to="/login" className={mobileNavLinkClasses} onClick={() => setMobileMenuOpen(false)}>
                                Login
                            </NavLink>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;