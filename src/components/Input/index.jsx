import * as S from "./styles";

export const Input = ({ title, type, register, name, error }) => {
  return (
    <S.EachInput>
      <span className="title">{title}</span>
      <S.Input type={type} {...register(name)} />

      <S.errorMessageArea>
        {error && <p className="error">{error}</p>}
      </S.errorMessageArea>
    </S.EachInput>
  );
};
