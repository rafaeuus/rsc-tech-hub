import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../contexts/TechContext";
import Button from "../../Button";
import Input from "../../Input";
import Select from "../../Select";
import StyledForm from "../style";
import addTechSchema from "./addTechSchema";

const AddTechForm = () => {
  const { loading, createTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addTechSchema),
  });

  const submit = (data) => {
    createTech(data);
  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit(submit)}>
      <Input
        id="title"
        labelText="Nome"
        placeholder="Digite o nome da tecnologia"
        type="text"
        register={register("title")}
        error={errors.title}
      />
      <Select
        id="status"
        labelText="Selecionar status"
        options={[
          {
            value: "",
            text: "Selecionar status",
          },
          {
            value: "Iniciante",
            text: "Iniciante",
          },
          {
            value: "Intermediário",
            text: "Intermediário",
          },
          {
            value: "Avançado",
            text: "Avançado",
          },
        ]}
        register={register("status")}
        error={errors.status}
      />
      <Button type="submit" styleType="primary">
        {loading ? "Cadastrando..." : "Cadastrar tecnologia"}
      </Button>
    </StyledForm>
  );
};

export default AddTechForm;
