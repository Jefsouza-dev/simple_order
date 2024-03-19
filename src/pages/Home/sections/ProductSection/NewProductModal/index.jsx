import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import * as S from "./styles";
import uploadImage from "../../../../../assets/uploadImage.svg";
import { Input } from "../../../../../components/Input";
import { ModalHeader } from "../../../../../components/ModalHeader";
import { ModalSeparator } from "../../../../../components/ModalSeparator";
import { ModalButton } from "../../../../../components/ModalButton";

export const NewProductModal = ({ closeModal }) => {
  return (
    <ModalAnimation>
      <S.ModalContent>
        <ModalHeader title="Cadastrar produto" closeModal={closeModal} />

        <ModalSeparator />

        <S.inputArea>
          <div className="defaultInput">
            <Input title="Nome" />
            <Input title="Preço" />
          </div>
          <div className="biggerInputs">
            <span className="inputLabel">Descrição</span>
            <S.DescriptionInput />

            <span className="inputLabel">Foto do produto</span>
            <S.UploadPhotoArea>
              <S.UploadPhotoButton>
                <img className="buttonICon" src={uploadImage} />
                <span className="buttonTitle">Faca o upload da foto</span>
              </S.UploadPhotoButton>

              <span className="warning">JPG e PNG, somente</span>
            </S.UploadPhotoArea>
          </div>
        </S.inputArea>

        <ModalSeparator />

        <S.ButtonContainer>
          <ModalButton />
        </S.ButtonContainer>
      </S.ModalContent>
    </ModalAnimation>
  );
};
