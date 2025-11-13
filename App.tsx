import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./context/ToastContext";
import Header from "./components/Header";
import SignupPage from "./components/pages/SignupPage";
import MenuPage from "./components/pages/MenuPage";
import CartPage from "./components/pages/CartPage";
import HomePage from "./components/pages/HomePage";
import AboutUsPage from "./components/pages/AboutUsPage";
import LoginPage from "./components/pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ProfilePage from "./components/pages/ProfilePage";
import ToastContainer from "./components/ToastContainer";
import CheckoutPage from "./components/pages/CheckoutPage";
import Logo from "./components/Logo";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <ToastProvider>
      <CartProvider>
        <AuthProvider>
          <HashRouter>
            <ScrollToTop />
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
                      <h3 className="font-semibold mb-4 tracking-wider text-primary-400">
                        Quick Links
                      </h3>
                      <ul>
                        <li className="mb-2">
                          <Link to="/" className="text-slate-400 hover:text-primary-400">
                            Home
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link to="/menu" className="text-slate-400 hover:text-primary-400">
                            Menu
                          </Link>
                        </li>
                        <li className="mb-2">
                          <Link to="/about" className="text-slate-400 hover:text-primary-400">
                            About Us
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4 tracking-wider text-primary-400">
                        Contact Us
                      </h3>
                      <p className="text-slate-400">123 Food Street</p>
                      <p className="text-slate-400">Gourmet City, 12345</p>
                      <p className="text-slate-400 mt-2">contact@quickbite.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4 tracking-wider text-primary-400">
                        Follow Us
                      </h3>
                      <div className="flex items-center space-x-4">
                        <a
                          href="#"
                          className="text-slate-400 hover:text-primary-400 flex items-center"
                          aria-label="X (Twitter)"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M22 5.92c-.63.28-1.3.48-2 .56a3.48 3.48 0 0 0 1.53-1.92 6.92 6.92 0 0 1-2.2.84 3.46 3.46 0 0 0-5.9 3.15A9.83 9.83 0 0 1 3.1 4.9a3.46 3.46 0 0 0 1.07 4.62 3.43 3.43 0 0 1-1.57-.43v.04a3.46 3.46 0 0 0 2.77 3.39c-.45.12-.92.18-1.4.07a3.46 3.46 0 0 0 3.23 2.4A6.94 6.94 0 0 1 2 18.57 9.8 9.8 0 0 0 7.29 20c6.03 0 9.33-5 9.33-9.33v-.43c.64-.46 1.2-1.05 1.64-1.72-.57.25-1.18.42-1.82.5z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="text-slate-400 hover:text-primary-400"
                          aria-label="Facebook"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="text-slate-400 hover:text-primary-400"
                          aria-label="Instagram"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.149-4.771-1.664-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.227 1.664-4.771 4.919-4.919.058-1.266.069-1.645.069-4.85zm0 1.441c-3.17 0-3.543.012-4.78.069-2.734.125-3.958 1.348-4.083 4.083-.057 1.237-.069 1.612-.069 4.78s.012 3.543.069 4.78c.125 2.734 1.348 3.958 4.083 4.083 1.237.057 1.612.069 4.78.069s3.543-.012 4.78-.069c2.734-.125 3.958-1.348 4.083-4.083.057-1.237.069-1.612.069-4.78s-.012-3.543-.069-4.78c-.125-2.734-1.348-3.958-4.083-4.083-1.237-.057-1.612-.069-4.78-.069zm0 6.162c-2.303 0-4.162 1.86-4.162 4.162s1.86 4.162 4.162 4.162 4.162-1.86 4.162-4.162-1.859-4.162-4.162-4.162zm0 6.882c-1.503 0-2.72-1.217-2.72-2.72s1.217-2.72 2.72-2.72 2.72 1.217 2.72 2.72-1.217 2.72-2.72 2.72zm4.78-7.858c-.615 0-1.115.5-1.115 1.115s.5 1.115 1.115 1.115c.615 0 1.115-.5 1.115-1.115s-.5-1.115-1.115-1.115z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="text-slate-400 hover:text-primary-400"
                          aria-label="YouTube"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M23.498 6.186a2.998 2.998 0 0 0-2.11-2.12C19.77 3.333 12 3.333 12 3.333s-7.77 0-9.387.733A2.998 2.998 0 0 0 .503 6.186 31.98 31.98 0 0 0 0 12a31.98 31.98 0 0 0 .503 5.814 2.998 2.998 0 0 0 2.11 2.11C4.23 20.667 12 20.667 12 20.667s7.77 0 9.387-.733a2.998 2.998 0 0 0 2.11-2.11A31.98 31.98 0 0 0 24 12a31.98 31.98 0 0 0-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="text-slate-400 hover:text-primary-400"
                          aria-label="LinkedIn"
                        >
                          <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.351V9h3.415v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.603 0 4.269 2.37 4.269 5.456v6.287zM5.337 7.433a2.065 2.065 0 1 1 .001-4.13 2.065 2.065 0 0 1-.001 4.13zM7.119 20.452H3.554V9h3.565v11.452z" />
                          </svg>
                        </a>
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
