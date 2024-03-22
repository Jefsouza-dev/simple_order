import * as S from "./styles";
import {
  formatToCurrency,
  generateAcronym,
} from "../../../../../services/formatFunctions";

export const EachOrder = ({ order }) => {
  const { customer, quantity, total } = order;

  return (
    <S.OrderCard>
      <S.ContentSpace>
        <S.Acronym>
          <span className="text">{generateAcronym(customer)}</span>
        </S.Acronym>
        <S.OrderInfos>
          <span className="CustomerName">{customer}</span>
          <span className="amount">Qtd. produtos: {quantity}</span>
        </S.OrderInfos>

        <S.Price>
          <span className="text"> {formatToCurrency(total)} </span>
        </S.Price>
      </S.ContentSpace>
    </S.OrderCard>
  );
};
