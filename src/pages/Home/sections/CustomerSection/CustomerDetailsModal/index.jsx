import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import * as S from "./styles";
import { ModalHeader } from "../../../../../components/ModalHeader";
import { ModalSeparator } from "../../../../../components/ModalSeparator";
import { EachInfo } from "./EachInfo";

export const CustomerDetailsModal = ({ closeModal }) => {
  return (
    <ModalAnimation>
      <S.ModalContent>
        <ModalHeader title="Energia Verde" closeModal={closeModal} />
        <ModalSeparator />

        <S.InfoContainer>
          <EachInfo title="CPNJ" data="00.000.000/0000-00" />
          <EachInfo title="Telefone" data="(00) 0000-0000" />
          <EachInfo title="CEP" data="12345-678" />
          <EachInfo title="Estado" data="São Paulo" />
          <EachInfo title="Cidade" data="Campinas" />
          <EachInfo title="Bairro" data="Jardim das Flores" />
          <EachInfo title="Número" data="123" />
          <EachInfo title="Endereço" data="Rua das Palmeiras" />
        </S.InfoContainer>
      </S.ModalContent>
    </ModalAnimation>
  );
};
