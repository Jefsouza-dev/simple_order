import { useState, useContext, useEffect } from "react";
import { ActionBar } from "../../../../components/ActionBar";
import { OrderContext } from "../../../../contexts/OrderContext";
import { NewOrderModal } from "./NewOrderModal";
import { EachOrder } from "./EachOrder";
import * as S from "./styles";

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

  const [searchTerm, setSearchTerm] = useState("");
  const filterItem = (event) => setSearchTerm(event.target.value);

  return (
    <>
      <ActionBar
        titleSection={"Pedido"}
        setOpenModal={handleNewOrderSectionModal}
        filterItem={filterItem}
      />

      <S.OrderListContainer>
        {order
          .filter((order) =>
            order.customer.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((order) => (
            <EachOrder key={order.id} order={order} />
          ))}
      </S.OrderListContainer>

      {openNewOrderSectionModal && (
        <NewOrderModal closeModal={handleNewOrderSectionModal} />
      )}
    </>
  );
};
