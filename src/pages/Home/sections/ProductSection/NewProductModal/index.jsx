import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import * as S from "./styles";
import closeIcon from "../../../../../assets/closeIcon.svg";
import uploadImage from "../../../../../assets/uploadImage.svg";
import { Input } from "../../../../../components/Input";

export const NewProductModal = ({ closeModal }) => {
  return (
    <ModalAnimation>
      <S.ModalContent>
        <S.Header>
          <span className="title"> Cadastrar Produto</span>
          <button onClick={closeModal}>
            <img className="closeButton" src={closeIcon} alt="" />
          </button>
        </S.Header>

        <S.Separator />

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
      </S.ModalContent>
    </ModalAnimation>
  );
};
