import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/Forms/RegisterForm";
import { StyledRegisterPage } from "./style";
import { FormCard } from "../../styles/formCard";
import Button from "../../components/Button";
import Logo from "../../components/Logo";

const RegisterPage = () => {
  const navigate = useNavigate();

  return (
    <StyledRegisterPage className="center">
      <div>
        <Logo />
        <Button
          styleType="small"
          onClick={() => (navigate(-1) ? navigate(-1) : navigate("/"))}
        >
          Voltar
        </Button>
      </div>
      <FormCard>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa</p>
        <RegisterForm />
      </FormCard>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
