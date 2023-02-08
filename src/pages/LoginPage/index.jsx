import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm";
import { StyledLoginPage } from "./style";
import { FormCard } from "../../styles/formCard";
import Logo from "../../components/Logo";

const LoginPage = () => {
  return (
    <StyledLoginPage className="center">
      <Logo />
      <FormCard>
        <h2>Login</h2>
        <LoginForm />
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">Cadastre-se</Link>
      </FormCard>
    </StyledLoginPage>
  );
};

export default LoginPage;
