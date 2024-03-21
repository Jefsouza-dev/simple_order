import * as S from "./styles";

export const ModalButton = ({ submit }) => {
  return (
    <S.Button onClick={submit}>
      <span className="text"> Salvar </span>
    </S.Button>
  );
};
