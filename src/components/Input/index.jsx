import * as S from "./styles";

export const Input = ({ title }) => {
  return (
    <S.EachInput>
      <span className="title">{title}</span>
      <S.Input type="text" />
    </S.EachInput>
  );
};
