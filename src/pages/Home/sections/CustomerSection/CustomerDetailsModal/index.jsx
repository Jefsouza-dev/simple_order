import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import * as S from "./styles";
import { useContext, useState, useEffect } from "react";
import { ModalHeader } from "../../../../../components/ModalHeader";
import { ModalSeparator } from "../../../../../components/ModalSeparator";
import { EachInfo } from "./EachInfo";
import { RefForDetailsModalContext } from "../../../../../contexts/RefForDetailsModalContext";
import {
  formatCnpj,
  formatPhoneNumber,
  formatZipCode,
} from "../../../../../services/formatFunctions";

export const CustomerDetailsModal = ({ closeModal }) => {
  const { refId } = useContext(RefForDetailsModalContext);
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    const searchCustomer = () => {
      const customersData = JSON.parse(localStorage.getItem("@customers"));
      const customer = customersData.find((customer) => customer.id === refId);
      setCustomerData(customer);
    };

    searchCustomer();
  }, [refId]);

  const formattedData = {
    cnpj: formatCnpj(customerData?.cnpj),
    phone: formatPhoneNumber(customerData?.phone),
    zipCode: formatZipCode(customerData?.zipCode),
    state: customerData?.state,
    city: customerData?.city,
    neighborhood: customerData?.neighborhood,
    number: customerData?.number,

    address: customerData?.address,
  };
  return (
    <ModalAnimation>
      <S.ModalContent>
        <ModalHeader title="Energia Verde" closeModal={closeModal} />
        <ModalSeparator />

        <S.InfoContainer>
          <EachInfo title="CPNJ" data={formattedData.cnpj} />
          <EachInfo title="Telefone" data={formattedData.phone} />
          <EachInfo title="CEP" data={formattedData.zipCode} />
          <EachInfo title="Estado" data={formattedData.state} />
          <EachInfo title="Cidade" data={formattedData.city} />
          <EachInfo title="Bairro" data={formattedData.neighborhood} />
          <EachInfo title="Número" data={formattedData.number} />
          <EachInfo title="Endereço" data={formattedData.address} />
        </S.InfoContainer>
      </S.ModalContent>
    </ModalAnimation>
  );
};
