import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().required("É necessário preencher o e-mail"),
  password: yup.string().required("É necessário preencher a senha"),
});

export default loginSchema;
