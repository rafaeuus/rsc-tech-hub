import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { StyledDashboard } from "./style";
import UserTechs from "../../components/UserTechs";

const DashboardPage = () => {
  const { setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(null);
    window.localStorage.clear();
  };

  return (
    <StyledDashboard>
      <Navbar onClick={() => handleLogout()} />
      <Header />
      <UserTechs />
    </StyledDashboard>
  );
};

export default DashboardPage;
