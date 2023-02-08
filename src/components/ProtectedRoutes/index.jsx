import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import LoadingPage from "../../pages/LoadingPage";

const ProtectedRoutes = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <LoadingPage />;
  }

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
