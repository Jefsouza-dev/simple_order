import * as S from "./styles";

export const EachOrder = () => {
  return (
    <S.OrderCard>
      <S.ContentSpace>
        <S.Acronym>
          <span className="text">IS</span>
        </S.Acronym>
        <S.OrderInfos>
          <span className="CustomerName">Império dos Sonhos</span>
          <span className="amount">Qtd. produtos: 123</span>
        </S.OrderInfos>

        <S.Price>
          <span className="text"> R$ 49,99 </span>
          <span></span>
        </S.Price>
      </S.ContentSpace>
    </S.OrderCard>
  );
};
