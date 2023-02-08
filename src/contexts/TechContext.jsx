import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const { setUser } = useContext(UserContext);

  const updateUser = async () => {
    try {
      const { data } = await api.get("/profile");
      setUser(data);
    } catch (err) {
      toast.error(err.response.data.message, {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const createTech = async (data) => {
    try {
      setLoading(true);
      await api.post("/users/techs", data);
      toast.success("Tecnologia adicionada com sucesso!", {
        autoClose: 2500,
      });
      await updateUser();
    } catch (err) {
      toast.error(err.response.data.message, {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteTech = async (techId) => {
    try {
      setLoading(true);
      await api.delete(`/users/techs/${techId}`);
      toast.success("Tecnologia removida com sucesso!", {
        autoClose: 2500,
      });
      await updateUser();
    } catch (err) {
      toast.error(err.response.data.message, {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const updateTech = async (techId, data) => {
    try {
      setLoading(true);
      await api.put(`/users/techs/${techId}`, data);
      toast.success("Tecnologia atualizada com sucesso!", {
        autoClose: 2500,
      });
      await updateUser();
    } catch (err) {
      toast.error(err.response.data.message, {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{ loading, createTech, deleteTech, updateTech }}
    >
      {children}
    </TechContext.Provider>
  );
};
