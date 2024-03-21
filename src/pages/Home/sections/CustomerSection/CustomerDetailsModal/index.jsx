import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import * as S from "./styles";
import { ModalHeader } from "../../../../../components/ModalHeader";
import { ModalSeparator } from "../../../../../components/ModalSeparator";
import { EachInfo } from "./EachInfo";
import {
  formatCnpj,
  formatPhoneNumber,
  formatZipCode,
} from "../../../../../services/formatFunctions";

export const CustomerDetailsModal = ({ closeModal, customer }) => {
  const formattedData = {
    cnpj: formatCnpj(customer.cnpj),
    phone: formatPhoneNumber(customer.phone),
    zipCode: formatZipCode(customer.zipCode),
    state: customer.state,
    city: customer.city,
    neighborhood: customer.neighborhood,
    number: customer.number,
    address: customer.address,
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
