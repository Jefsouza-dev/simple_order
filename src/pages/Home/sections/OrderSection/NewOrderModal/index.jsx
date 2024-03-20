import { useState } from "react";
import * as S from "./styles";
import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import { ModalHeader } from "../../../../../components/ModalHeader";
import { ModalSeparator } from "../../../../../components/ModalSeparator";
import { ModalButton } from "../../../../../components/ModalButton";
import { EachRegisteredProduct } from "./EachRegisteredProduct";

export const NewOrderModal = ({ closeModal }) => {
  const [selectedCustomer, setSelectedCustomer] = useState("");

  const handleSelectChange = (event) => {
    setSelectedCustomer(event.target.value);
  };

  return (
    <ModalAnimation>
      <S.ModalContent>
        <ModalHeader title="Cadastro de pedido" closeModal={closeModal} />
        <ModalSeparator />
        <S.InputArea>
          <S.CustomerSelect
            value={selectedCustomer}
            onChange={handleSelectChange}
          >
            <option value="" disabled hidden>
              Selecionar um cliente
            </option>
            <option value="customer1">Cliente 1</option>
          </S.CustomerSelect>

          <span className="text">Produtos</span>

          <S.SearchInput placeholder="Pesquisar produtos" />
        </S.InputArea>

        <S.ProductsArea>
          <EachRegisteredProduct />
          <EachRegisteredProduct />
          <EachRegisteredProduct />
          <EachRegisteredProduct />
          <EachRegisteredProduct />
          <EachRegisteredProduct />
        </S.ProductsArea>
      </S.ModalContent>
    </ModalAnimation>
  );
};
