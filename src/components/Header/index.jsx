import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledHeader } from "./style";

const Header = () => {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return null;
  }

  return (
    <StyledHeader>
      <div className="container">
        <h2>Olá, {user.name}</h2>
        <p>{user.course_module}</p>
      </div>
    </StyledHeader>
  );
};

export default Header;
