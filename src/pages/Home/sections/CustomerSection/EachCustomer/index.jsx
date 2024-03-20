import * as S from "./styles";

export const EachCustomer = ({ openModal }) => {
  return (
    <S.Customer onClick={openModal}>
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
