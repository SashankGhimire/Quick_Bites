import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { useCart } from './CartContext';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (user: string, pass: string) => Promise<void>;
  logout: () => void;
  signup: (user: string, pass: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { clearCart } = useCart();

  const login = useCallback((user: string, pass: string) => {
    return new Promise<void>((resolve, reject) => {
      // Demo login logic
      if (user === 'admin' && pass === 'admin') {
        setIsAuthenticated(true);
        resolve();
      } else {
        reject(new Error('Invalid credentials'));
      }
    });
  }, []);

  const signup = useCallback((user: string, pass: string) => {
    return new Promise<void>((resolve, reject) => {
      // Demo signup logic: accept any non-empty credentials
      if (user && pass) {
        setIsAuthenticated(true);
        resolve();
      } else {
        reject(new Error('Please enter a valid email and password.'));
      }
    });
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    clearCart();
  }, [clearCart]);
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
