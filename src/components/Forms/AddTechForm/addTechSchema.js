import * as yup from "yup";

const addTechSchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  status: yup.string().required("Campo obrigatório"),
});

export default addTechSchema;
