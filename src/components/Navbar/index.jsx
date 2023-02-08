import Button from "../Button";
import Logo from "../Logo";
import { StyledNavbar } from "./style";

const Navbar = ({ onClick }) => {
  return (
    <StyledNavbar>
      <div>
        <Logo />
        <Button styleType="small" onClick={onClick}>
          Sair
        </Button>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
