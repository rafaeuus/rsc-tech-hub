import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Button";
import Input from "../../Input";
import StyledForm from "../style";
import loginSchema from "./loginSchema";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../../../contexts/UserContext";

const LoginForm = () => {
  const { userLogin, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onTouched",
    reValidateMode: "onTouched",
  });

  const submit = (data) => {
    userLogin(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <Input
        id="email"
        error={errors.email}
        register={register("email")}
        placeholder="Digite aqui seu email"
        type="email"
      />
      <Input
        id="password"
        error={errors.password}
        register={register("password")}
        placeholder="Digite aqui sua senha"
        type="password"
        buttonShow="true"
      />
      <Button styleType="primary" type="submit">
        {loading ? "Entrando..." : "Entrar"}
      </Button>
      <ToastContainer toastClassName="toast" />
    </StyledForm>
  );
};

export default LoginForm;
