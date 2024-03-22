import * as S from "./styles";

export const ActionBar = ({ titleSection, setOpenModal, filterItem }) => {
  return (
    <S.ActionBarContainer>
      <S.Input type="text" placeholder="Pesquisar" onChange={filterItem} />
      <S.Button onClick={() => setOpenModal(true)}>
        Novo {titleSection}
      </S.Button>
    </S.ActionBarContainer>
  );
};
