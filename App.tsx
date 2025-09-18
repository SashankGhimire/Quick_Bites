import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import Header from './components/Header';
import SignupPage from './components/pages/SignupPage';
import MenuPage from './components/pages/MenuPage';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';
import AboutUsPage from './components/pages/AboutUsPage';
import LoginPage from './components/pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import ProfilePage from './components/pages/ProfilePage';
import ToastContainer from './components/ToastContainer';
import CheckoutPage from './components/pages/CheckoutPage';
import Logo from './components/Logo';

const App: React.FC = () => {
    return (
        <ToastProvider>
            <CartProvider>
                <AuthProvider>
                    <HashRouter>
                        <div className="flex flex-col min-h-screen">
                            <Header />
                            <main className="flex-grow">
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/menu" element={<MenuPage />} />
                                    <Route path="/about" element={<AboutUsPage />} />
                                    <Route path="/login" element={<LoginPage />} />
                                    <Route path="/signup" element={<SignupPage />} />
                                    <Route 
                                        path="/profile"
                                        element={
                                            <ProtectedRoute>
                                                <ProfilePage />
                                            </ProtectedRoute>
                                        } 
                                    />
                                    <Route 
                                        path="/cart"
                                        element={
                                            <ProtectedRoute>
                                                <CartPage />
                                            </ProtectedRoute>
                                        } 
                                    />
                                    <Route 
                                        path="/checkout"
                                        element={
                                            <ProtectedRoute>
                                                <CheckoutPage />
                                            </ProtectedRoute>
                                        } 
                                    />
                                </Routes>
                            </main>
                            <footer className="bg-slate-800 text-slate-300">
                                <div className="container mx-auto py-12 px-8">
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                        <div className="mb-6 md:mb-0">
                                            <Link to="/">
                                                <Logo className="text-white" />
                                            </Link>
                                            <p className="text-slate-400 mt-2">Delicious food, delivered fast.</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-4 tracking-wider text-primary-400">Quick Links</h3>
                                            <ul>
                                                <li className="mb-2"><Link to="/" className="text-slate-400 hover:text-primary-400">Home</Link></li>
                                                <li className="mb-2"><Link to="/menu" className="text-slate-400 hover:text-primary-400">Menu</Link></li>
                                                <li className="mb-2"><Link to="/about" className="text-slate-400 hover:text-primary-400">About Us</Link></li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-4 tracking-wider text-primary-400">Contact Us</h3>
                                            <p className="text-slate-400">123 Food Street</p>
                                            <p className="text-slate-400">Gourmet City, 12345</p>
                                            <p className="text-slate-400 mt-2">contact@quickbite.com</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-4 tracking-wider text-primary-400">Follow Us</h3>
                                            <div className="flex space-x-4">
                                                <a href="#" className="text-slate-400 hover:text-primary-400" aria-label="Facebook"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path></svg></a>
                                                <a href="#" className="text-slate-400 hover:text-primary-400" aria-label="Instagram"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.227 1.664-4.771 4.919-4.919.058-1.266.069-1.645.069-4.85zm0 1.441c-3.17 0-3.543.012-4.78.069-2.734.125-3.958 1.348-4.083 4.083-.057 1.237-.069 1.612-.069 4.78s.012 3.543.069 4.78c.125 2.734 1.348 3.958 4.083 4.083 1.237.057 1.612.069 4.78.069s3.543-.012 4.78-.069c2.734-.125 3.958-1.348 4.083-4.083.057-1.237.069-1.612.069-4.78s-.012-3.543-.069-4.78c-.125-2.734-1.348-3.958-4.083-4.083-1.237-.057-1.612-.069-4.78-.069zm0 6.162c-2.303 0-4.162 1.86-4.162 4.162s1.86 4.162 4.162 4.162 4.162-1.86 4.162-4.162-1.859-4.162-4.162-4.162zm0 6.882c-1.503 0-2.72-1.217-2.72-2.72s1.217-2.72 2.72-2.72 2.72 1.217 2.72 2.72-1.217 2.72-2.72 2.72zm4.78-7.858c-.615 0-1.115.5-1.115 1.115s.5 1.115 1.115 1.115c.615 0 1.115-.5 1.115-1.115s-.5-1.115-1.115-1.115z"></path></svg></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-8 border-t border-slate-700 pt-6 text-center text-slate-400">
                                        <p>&copy; 2025 QuickBite. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </footer>
                        </div>
                        <ToastContainer />
                    </HashRouter>
                </AuthProvider>
            </CartProvider>
        </ToastProvider>
    );
};

export default App;