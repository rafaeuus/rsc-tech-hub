import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../contexts/TechContext";
import Button from "../../Button";
import Input from "../../Input";
import Select from "../../Select";
import StyledForm from "../style";
import updateTechSchema from "./updateTechSchema";

const UpdateTechForm = ({ selectedTech }) => {
  const [disable, setDisable] = useState(true);

  const { deleteTech, updateTech, loading } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateTechSchema),
    mode: "all",
    reValidateMode: "onChange",
  });

  const submit = (data) => {
    updateTech(selectedTech.id, data);
  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit(submit)}>
      <Input
        id="title"
        labelText="Nome"
        placeholder={selectedTech.title}
        type="text"
        disabled={true}
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
        value={selectedTech.status}
        onChange={() => setDisable(false)}
        register={register("status")}
        error={errors.status}
      />
      <div className="buttons-div">
        <Button
          type="submit"
          styleType="primary"
          disabled={disable}
          className="big"
        >
          {loading ? "Salvando..." : "Salvar alterações"}
        </Button>
        <Button
          type="button"
          styleType="disable"
          onClick={() => deleteTech(selectedTech.id)}
        >
          {loading ? "Excluindo..." : "Excluir"}
        </Button>
      </div>
    </StyledForm>
  );
};

export default UpdateTechForm;
