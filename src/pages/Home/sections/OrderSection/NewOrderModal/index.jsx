import { useState, useEffect, useContext } from "react";
import * as S from "./styles";
import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import { ModalHeader } from "../../../../../components/ModalHeader";
import { ModalSeparator } from "../../../../../components/ModalSeparator";
import { ModalButton } from "../../../../../components/ModalButton";
import { EachRegisteredProduct } from "./EachRegisteredProduct";
import { OrderContext } from "../../../../../contexts/OrderContext";
import { formatToCurrency } from "../../../../../services/formatFunctions";
import { v4 as randomId } from "uuid";

export const NewOrderModal = ({ closeModal }) => {
  const { order, setOrder } = useContext(OrderContext);

  const [costumers, setCostumers] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [quantityOfProducts, setQuantityOfProducts] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const searchCustomer = () => {
      const customersData = JSON.parse(localStorage.getItem("@customers"));
      setCostumers(customersData);
    };

    searchCustomer();
  }, []);

  useEffect(() => {
    const searchProducts = () => {
      const productsData = JSON.parse(localStorage.getItem("@products"));
      setProducts(productsData);
    };

    searchProducts();
  }, []);

  const addNewOrder = () => {
    const newOrder = {
      id: randomId(),
      customer: selectedCustomer,
      quantity: quantityOfProducts,
      total,
    };

    const allOrder = [...order, newOrder];

    setOrder(allOrder);

    localStorage.setItem("@order", JSON.stringify(allOrder));
  };

  return (
    <ModalAnimation>
      <S.ModalContent>
        <ModalHeader title="Cadastro de pedido" closeModal={closeModal} />
        <ModalSeparator />
        <S.InputArea>
          <S.CustomerSelect
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
          >
            <option value="" disabled hidden>
              Selecionar um cliente
            </option>
            {costumers.map((customer) => (
              <option key={customer.id} value={customer.name}>
                {customer.name}
              </option>
            ))}
          </S.CustomerSelect>

          <span className="text">Produtos</span>

          <S.SearchInput placeholder="Pesquisar produtos" />
        </S.InputArea>

        <S.ProductsArea>
          {products.map((product) => (
            <EachRegisteredProduct
              key={product.id}
              product={product}
              setQuantityOfProducts={setQuantityOfProducts}
              setTotal={setTotal}
            />
          ))}
        </S.ProductsArea>

        <S.SeparatorBaseboard />
        <h1>{formatToCurrency(total)}</h1>
        <ModalButton submit={addNewOrder} />
      </S.ModalContent>
    </ModalAnimation>
  );
};
