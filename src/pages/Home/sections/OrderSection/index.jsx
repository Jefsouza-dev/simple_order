import { ActionBar } from "../../../../components/ActionBar";
import * as S from "./styles";
import { useState, useContext, useEffect } from "react";
import { EachOrder } from "./EachOrder";
import { NewOrderModal } from "./NewOrderModal";
import { OrderContext } from "../../../../contexts/OrderContext";

export const OrderSection = () => {
  const { order, setOrder } = useContext(OrderContext);

  const [openNewOrderSectionModal, setOpenNewOrderSectionModal] =
    useState(false);

  const handleNewOrderSectionModal = () => {
    setOpenNewOrderSectionModal(!openNewOrderSectionModal);
  };

  useEffect(() => {
    const searchOrder = () => {
      const storedOrder = JSON.parse(localStorage.getItem("@order")) || [];
      setOrder(storedOrder);
    };

    searchOrder();
  }, []);

  return (
    <>
      <ActionBar
        titleSection={"Pedido"}
        setOpenModal={handleNewOrderSectionModal}
      />

      <S.OrderListContainer>
        {order.map((order) => (
          <EachOrder key={order.id} order={order} />
        ))}
      </S.OrderListContainer>

      {openNewOrderSectionModal && (
        <NewOrderModal closeModal={handleNewOrderSectionModal} />
      )}
    </>
  );
};
