import { createContext, useCallback, useMemo, useState } from "react";
import {
  adminLoginApi,
  registerApi,
  userLoginApi,
} from "../services/authService";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const saveSession = (userData, token) => {
    setUser(userData);
    setToken(token);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
  };

  const login = useCallback(async (payload, role) => {
    setLoading(true);

    try {
      const loginAPI = role === "user" ? userLoginApi : adminLoginApi;

      const res = await loginAPI(payload);

      if (res.success) {
        saveSession(res.data, res.token);
        return res;
      }
      setError(res.message);
      return res;
    } catch (error) {
      setError(error.response?.data?.message || error.message);
      return {
        success: false,
        message: error.response?.data?.message || error.message,
      };
    } finally {
      setLoading(false);
    }
  }, []);

  const register = useCallback(async (payload) => {
    setLoading(true);

    try {
      const res = await registerApi(payload);

      if (res.success) {
        saveSession(res.data, res.token);
        return res;
      }
      setError(res.message);
      return res;
    } catch (error) {
      setError(error.response?.data?.message || error.message);
      return {
        success: false,
        message: error.response?.data?.message || error.message,
      };
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  }, [navigate]);

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      error,
      login,
      register,
      logout,
      setError,
    }),
    [user, token, loading, error, login, register, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
