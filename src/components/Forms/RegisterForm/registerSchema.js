import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().required("Este campo é obrigatório"),
  email: yup
    .string()
    .required("Este campo é obrigatório")
    .email("O e-mail precisa ser válido"),
  password: yup
    .string()
    .required("Este campo é obrigatório")
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .matches(/(?=.*?[A-Z, a-z])/, "A senha deve conter ao menos uma letra")
    .matches(/(?=.*?[0-9])/, "A senha deve conter ao menos um dígito")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "A senha deve conter ao menos um caractere especial"
    ),
  passwordConfirm: yup
    .string()
    .required("Este campo é obrigatório")
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .matches(/(?=.*?[A-Z, a-z])/, "A senha deve conter ao menos uma letra")
    .matches(/(?=.*?[0-9])/, "A senha deve conter ao menos um dígito")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "A senha deve conter ao menos um caractere especial"
    )
    .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),
  bio: yup.string().required("Este campo é obrigatório"),
  contact: yup.string().required("Este campo é obrigatório"),
  course_module: yup.string().required("Este campo é obrigatório"),
});

export default registerSchema;
