import * as S from "./styles";
import { Input } from "../../../../../components/Input";
import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import { ModalHeader } from "../../../../../components/ModalHeader";
import { ModalSeparator } from "../../../../../components/ModalSeparator";
import { ModalButton } from "../../../../../components/ModalButton";

export const NewCustomerModal = ({ closeModal }) => {
  return (
    <ModalAnimation>
      <S.ModalContent>
        <ModalHeader title="Cadastrar cliente" closeModal={closeModal} />

        <ModalSeparator />

        <S.inputArea>
          <Input title="Nome" />
          <Input title="CNPJ" />
          <Input title="Telefone" />
          <Input title="CEP" />
          <Input title="Estado" />
          <Input title="Cidade" />
          <Input title="Bairro" />
          <Input title="Endereço" />
          <Input title="Número" />
        </S.inputArea>

        <ModalSeparator />

        <S.ButtonContainer>
          <ModalButton />
        </S.ButtonContainer>
      </S.ModalContent>
    </ModalAnimation>
  );
};
