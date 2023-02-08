import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function checkExistingUser() {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.get("/profile");
      setUser(data);
      navigate("/dashboard");
    } catch (err) {
      localStorage.clear();
      console.error(err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkExistingUser();
  }, []);

  const userLogin = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);
      api.defaults.headers.common.authorization = `Bearer ${response.data.token}`;
      window.localStorage.clear();
      window.localStorage.setItem("@TOKEN", response.data.token);
      window.localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
      toast.success("Login feito com sucesso! Redirecionando", {
        autoClose: 3000,
      });

      setTimeout(() => {
        navigate("/dashboard");
      }, 4000);
    } catch (err) {
      toast.error(err.response.data.message[0], {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (data) => {
    try {
      setLoading(true);
      await api.post("/users", data);
      toast.success("Conta criada com sucesso! Redirecionando", {
        autoClose: 3000,
      });
      setTimeout(() => {
        navigate("/");
      }, 4000);
    } catch (err) {
      toast.error(err.response.data.message, {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userLogin,
        loading,
        setLoading,
        navigate,
        userRegister,
        checkExistingUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
