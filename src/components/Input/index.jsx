import * as S from "./styles";

export const Input = ({
  title,
  defaultValue,
  register,
  name,
  error,
  onChange,
}) => {
  return (
    <S.EachInput>
      <span className="title">{title}</span>
      <S.Input
        {...register(name)}
        defaultValue={defaultValue}
        onChange={onChange}
      />

      <S.errorMessageArea>
        {error && <p className="error">{error}</p>}
      </S.errorMessageArea>
    </S.EachInput>
  );
};
