import { useContext } from "react";
import { RefForDetailsModalContext } from "../../../../../contexts/RefForDetailsModalContext";
import * as S from "./styles";
import {
  formatCnpj,
  formatName,
  generateAcronym,
} from "../../../../../services/formatFunctions";

export const EachCustomer = ({ openModal, customer }) => {
  const { id, name, cnpj } = customer;
  const { setRefId } = useContext(RefForDetailsModalContext);

  const handleClickCard = () => {
    setRefId(id);
    openModal();
  };

  return (
    <S.Customer onClick={handleClickCard}>
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
