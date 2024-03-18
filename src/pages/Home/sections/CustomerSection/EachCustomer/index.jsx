import * as S from "./styles";

export const EachCustomer = () => {
  return (
    <S.Customer>
      <S.CustomerAcronym>
        <span>EV</span>
      </S.CustomerAcronym>

      <S.CustomerData>
        <span className="customerName">Energia Verde</span>
        <span className="customerCNPJ">00.000.000/0000-00</span>
      </S.CustomerData>
    </S.Customer>
  );
};
