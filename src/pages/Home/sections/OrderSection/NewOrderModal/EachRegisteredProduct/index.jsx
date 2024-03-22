import { useState, useEffect } from "react";
import * as S from "./styles";
import {
  formatName,
  extractNumericValue,
} from "../../../../../../services/formatFunctions";
import fill from "../../../../../../assets/fill.svg";

export const EachRegisteredProduct = ({
  product,
  setQuantityOfProducts,
  setTotal,
}) => {
  const { name, price } = product;

  const [amount, setAmount] = useState(0);

  const formatedPrice = extractNumericValue(price);

  const AddOneMoreUnit = () => {
    setAmount((prevAmount) => prevAmount + 1);
    setQuantityOfProducts((prevQuantity) => prevQuantity + 1);
    setTotal((prevTotal) => prevTotal + formatedPrice);
  };

  const subtractOneUnit = () => {
    if (amount < 1) {
      return;
    }

    setAmount((prevAmount) => prevAmount - 1);
    setQuantityOfProducts((prevQuantity) => prevQuantity - 1);
    setTotal((prevTotal) => prevTotal - formatedPrice);
  };

  return (
    <S.Product>
      <S.imgArea>
        <img src={fill} />
      </S.imgArea>

      <S.DetailsArea>
        <S.TitleArea>
          <span className="title">{formatName(name)}</span>
        </S.TitleArea>

        <S.AmountAndPriceArea>
          <div className="amountButtons">
            <S.HandleAmount onClick={subtractOneUnit}>
              <span className="text"> - </span>
            </S.HandleAmount>

            <span className="amount"> {amount} </span>

            <S.HandleAmount onClick={AddOneMoreUnit}>
              <span className="text"> + </span>
            </S.HandleAmount>
          </div>

          <span className="price">{price}</span>
        </S.AmountAndPriceArea>
      </S.DetailsArea>
    </S.Product>
  );
};
