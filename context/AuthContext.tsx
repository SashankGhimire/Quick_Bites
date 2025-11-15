// src/context/AuthContext.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import {
  loginUser,
  registerUser,
  getCurrentUser,
  setAuthToken,
} from "../services/authService";

type User = {
  _id?: string;
  name?: string;
  email?: string;
  createdAt?: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUser = async () => {
      if (!token) {
        setUser(null);
        setAuthToken(null);
        setLoading(false);
        return;
      }

      setAuthToken(token);

      try {
        const u = await getCurrentUser();
        setUser(u);
      } catch (err) {
        console.error("Failed to load user:", err);
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [token]);

  const persistToken = (t: string) => {
    localStorage.setItem("token", t);
    setToken(t);
    setAuthToken(t);
  };

  const login = async (email: string, password: string) => {
    try {
      const res = await loginUser({ email, password });
      if (!res?.token) throw new Error("No token returned from server");
      persistToken(res.token);
      const u = await getCurrentUser();
      setUser(u);
    } catch (err: any) {
      const msg = err?.response?.data?.msg || err?.message || "Login failed";
      throw new Error(msg);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      const res = await registerUser({ name, email, password });
      if (!res?.token) throw new Error("No token returned from server");
      persistToken(res.token);
      const u = await getCurrentUser();
      setUser(u);
    } catch (err: any) {
      const msg = err?.response?.data?.msg || err?.message || "Signup failed";
      throw new Error(msg);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
