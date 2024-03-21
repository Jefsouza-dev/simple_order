import * as Yup from "yup";

export const productsValidationSchema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  price: Yup.string().required("Preço é obrigatório"),
  description: Yup.string().required("Descrição é obrigatória"),
});
