import * as S from "./styles";
import CloseIcon from "../../../../../assets/closeIcon.svg";
import { Input } from "../../../../../components/Input";
import { ModalAnimation } from "../../../../../animation/ModalAnimation";

export const NewCustomerModal = ({ closeModal }) => {
  return (
    <ModalAnimation>
      <S.ModalContent>
        <S.Header>
          <span className="title"> Cadastrar cliente</span>
          <button onClick={closeModal}>
            <img className="closeButton" src={CloseIcon} alt="" />
          </button>
        </S.Header>

        <S.Separator />

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

        <S.Separator />

        <S.ButtonContainer>
          <S.Button>
            <span className="text"> Salvar </span>
          </S.Button>
        </S.ButtonContainer>
      </S.ModalContent>
    </ModalAnimation>
  );
};
