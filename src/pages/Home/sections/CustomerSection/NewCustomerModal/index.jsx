import * as S from "./styles";
import { Input } from "../../../../../components/Input";
import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import { ModalHeader } from "../../../../../components/ModalHeader";
import { ModalSeparator } from "../../../../../components/ModalSeparator";
import { ModalButton } from "../../../../../components/ModalButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { customersValidationSchema } from "../../../../../validations/customersValidation";
import { api } from "../../../../../services/api";

export const NewCustomerModal = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(customersValidationSchema),
  });

  const searchZipCode = async (code) => {
    try {
      const response = await api.get(`/${code}/json/`);
      const { uf: cidade, localidade, bairro, logradouro } = response.data;

      console.log(cidade, localidade, bairro, logradouro);
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (data) => {
    searchZipCode(data.zipCode);
  };

  return (
    <ModalAnimation>
      <S.ModalContent>
        <ModalHeader title="Cadastrar cliente" closeModal={closeModal} />

        <ModalSeparator />

        <S.inputArea>
          <Input
            title="Nome"
            register={register}
            name="name"
            error={errors.name?.message}
          />
          <Input
            title="CNPJ"
            register={register}
            name="cnpj"
            error={errors.cnpj?.message}
          />
          <Input
            title="Telefone"
            register={register}
            name="phone"
            error={errors.phone?.message}
          />
          <Input
            title="CEP"
            register={register}
            name="zipCode"
            error={errors.zipCode?.message}
          />
          <Input
            title="Estado"
            register={register}
            name="state"
            error={errors.state?.message}
          />
          <Input
            title="Cidade"
            register={register}
            name="city"
            error={errors.city?.message}
          />
          <Input
            title="Bairro"
            register={register}
            name="neighborhood"
            error={errors.neighborhood?.message}
          />
          <Input
            title="Endereço"
            register={register}
            name="address"
            error={errors.address?.message}
          />
          <Input
            title="Número"
            register={register}
            name="number"
            error={errors.number?.message}
          />
        </S.inputArea>

        <ModalSeparator />

        <S.ButtonContainer>
          <ModalButton submit={handleSubmit(onSubmit)} />
        </S.ButtonContainer>
      </S.ModalContent>
    </ModalAnimation>
  );
};
