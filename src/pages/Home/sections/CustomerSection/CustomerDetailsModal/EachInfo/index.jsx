import * as S from "./styles";

export const EachInfo = ({ title, data }) => {
  return (
    <S.EachInfo>
      <span className="title">{title}</span>
      <span className="data">{data}</span>
    </S.EachInfo>
  );
};
