import * as Yup from "yup";

export const customersValidationSchema = Yup.object().shape({
  name: Yup.string().required("O campo Nome é obrigatório"),
  cnpj: Yup.string()
    .required("O campo CNPJ é obrigatório")
    .length(14, "O CNPJ deve ter exatamente 14 dígitos"),
  phone: Yup.string()
    .required("O campo Telefone é obrigatório")
    .min(8, "O telefone deve ter no mínimo 8 dígitos")
    .max(11, "O telefone deve ter no máximo 11 dígitos"),
  cep: Yup.string()
    .required("O campo CEP é obrigatório")
    .length(8, "O CEP deve ter exatamente 8 dígitos"),
  state: Yup.string().required("O campo Estado é obrigatório"),
  city: Yup.string().required("O campo Cidade é obrigatório"),
  neighborhood: Yup.string().required("O campo Bairro é obrigatório"),
  address: Yup.string().required("O campo Endereço é obrigatório"),
  number: Yup.string().required("O campo Número é obrigatório"),
});
