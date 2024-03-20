import * as S from "./styles";

export const ActionBar = ({ titleSection, setOpenModal }) => {
  return (
    <S.ActionBarContainer>
      <S.Input type="text" placeholder="Pesquisar" />
      <S.Button onClick={() => setOpenModal(true)}>
        Novo {titleSection}
      </S.Button>
    </S.ActionBarContainer>
  );
};
