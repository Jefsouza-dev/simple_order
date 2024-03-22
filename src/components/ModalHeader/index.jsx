import CloseIcon from "../../assets/closeIcon.svg";
import * as S from "./styles";

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
