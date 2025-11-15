// src/services/authService.ts
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: { "Content-Type": "application/json" },
});

export const setAuthToken = (token: string | null) => {
  if (token) API.defaults.headers.common["x-auth-token"] = token;
  else delete API.defaults.headers.common["x-auth-token"];
};

export const registerUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const res = await API.post("/auth/register", data);
  return res.data;
};

export const loginUser = async (data: { email: string; password: string }) => {
  const res = await API.post("/auth/login", data);
  return res.data;
};

export const getCurrentUser = async () => {
  const res = await API.get("/auth/me");
  return res.data;
};
