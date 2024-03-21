import * as S from "./styles";

export const Input = ({ title, register, name, error }) => {
  return (
    <S.EachInput>
      <span className="title">{title}</span>
      <S.Input {...register(name)} />

      <S.errorMessageArea>
        {error && <p className="error">{error}</p>}
      </S.errorMessageArea>
    </S.EachInput>
  );
};
