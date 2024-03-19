import * as S from "./styles";
import CloseIcon from "../../assets/closeIcon.svg";

export const ModalHeader = ({ title, closeModal }) => {
  return (
    <S.Header>
      <span className="title">{title}</span>
      <button onClick={closeModal}>
        <img className="closeButton" src={CloseIcon} alt="close modal" />
      </button>
    </S.Header>
  );
};
