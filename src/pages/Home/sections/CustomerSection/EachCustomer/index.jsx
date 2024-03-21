import * as S from "./styles";
import {
  formatCnpj,
  formatName,
  generateAcronym,
} from "../../../../../services/formatFunctions";

export const EachCustomer = ({ openModal, customer }) => {
  const { name, cnpj } = customer;

  return (
    <S.Customer onClick={openModal}>
      <S.CustomerAcronym>
        <span>{generateAcronym(name)}</span>
      </S.CustomerAcronym>

      <S.CustomerData>
        <span className="customerName">{formatName(name)}</span>
        <span className="customerCNPJ">{formatCnpj(cnpj)}</span>
      </S.CustomerData>
    </S.Customer>
  );
};
