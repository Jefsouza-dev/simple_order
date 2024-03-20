import { ActionBar } from "../../../../components/ActionBar";
import * as S from "./styles";
import { useState } from "react";
import { EachOrder } from "./EachOrder";
import { NewOrderModal } from "./NewOrderModal";

export const OrderSection = () => {
  const [openNewOrderSectionModal, setOpenNewOrderSectionModal] =
    useState(false);

  const handleNewOrderSectionModal = () => {
    setOpenNewOrderSectionModal(!openNewOrderSectionModal);
  };

  return (
    <>
      <ActionBar
        titleSection={"Pedido"}
        setOpenModal={handleNewOrderSectionModal}
      />

      <S.OrderListContainer>
        <EachOrder />
      </S.OrderListContainer>

      {openNewOrderSectionModal && (
        <NewOrderModal closeModal={handleNewOrderSectionModal} />
      )}
    </>
  );
};
