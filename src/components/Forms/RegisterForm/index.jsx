import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import registerSchema from "./registerSchema";
import StyledForm from "../style";
import Input from "../../Input";
import Button from "../../Button";
import Select from "../../Select";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

const RegisterForm = () => {
  const { loading, userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mod: "onChange",
    reValidateMode: "onChange",
  });

  const submit = (data) => {
    userRegister(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)} noValidate>
      <Input
        id="name"
        labelText="Nome"
        error={errors.name}
        register={register("name")}
        placeholder="Digite aqui seu nome"
        type="text"
      />
      <Input
        id="email"
        labelText="Email"
        error={errors.email}
        register={register("email")}
        placeholder="Digite aqui seu email"
        type="email"
      />
      <Input
        id="password"
        labelText="Senha"
        error={errors.password}
        register={register("password")}
        placeholder="Digite aqui sua senha"
        type="password"
      />
      <Input
        id="passwordConfirm"
        labelText="Confirmar Senha"
        error={errors.passwordConfirm}
        register={register("passwordConfirm")}
        placeholder="Digite novamente sua senha"
        type="password"
      />
      <Input
        id="bio"
        labelText="Bio"
        error={errors.bio}
        register={register("bio")}
        placeholder="Fale sobre você"
        type="text"
      />
      <Input
        id="contact"
        labelText="Contato"
        error={errors.contact}
        register={register("contact")}
        placeholder="Opção de contato"
        type="text"
      />
      <Select
        id="course_module"
        labelText="Selecionar módulo"
        register={register("course_module")}
        noValueOption="Selecionar módulo"
        options={[
          {
            value: "",
            text: "Selecionar módulo",
          },
          {
            value: "Primeiro módulo",
            text: "Primeiro módulo",
          },
          {
            value: "Segundo módulo",
            text: "Segundo módulo",
          },
        ]}
        error={errors.course_module}
      />
      <Button
        disabled={formState.isSubmitted && !formState.isValid}
        styleType="primary"
        type="submit"
      >
        {loading ? "Cadastrando..." : "Cadastrar"}
      </Button>
      <ToastContainer toastClassName="toast" />
    </StyledForm>
  );
};

export default RegisterForm;
