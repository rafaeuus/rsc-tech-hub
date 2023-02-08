import * as yup from "yup";

const updateTechSchema = yup.object().shape({
  status: yup.string().required("Este campo é obrigatório"),
});

export default updateTechSchema;
