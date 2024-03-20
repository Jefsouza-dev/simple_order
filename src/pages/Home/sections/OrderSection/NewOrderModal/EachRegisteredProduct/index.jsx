import * as S from "./styles";

export const EachRegisteredProduct = () => {
  return (
    <S.Product>
      <S.img />

      <S.DetailsArea>
        <S.TitleArea>
          <span className="title">Produto</span>
        </S.TitleArea>

        <S.AmountAndPriceArea>
          <div className="amountButtons">
            <S.HandleAmount>
              <span className="text"> - </span>
            </S.HandleAmount>

            <span className="amount"> 1 </span>

            <S.HandleAmount>
              <span className="text"> + </span>
            </S.HandleAmount>
          </div>

          <span className="price">R$ 9,99</span>
        </S.AmountAndPriceArea>
      </S.DetailsArea>
    </S.Product>
  );
};
