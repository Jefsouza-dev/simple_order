import * as S from "./styles";
import searchIcon from "../../assets/searchIcon.svg";
import plusIcon from "../../assets/plusIcon.svg";

export const ActionBar = ({ titleSection }) => {
  return (
    <S.ActionBarContainer>
      <S.Input type="text" placeholder="Pesquisar" />
      <S.Button>Novo {titleSection}</S.Button>
    </S.ActionBarContainer>
  );
};
