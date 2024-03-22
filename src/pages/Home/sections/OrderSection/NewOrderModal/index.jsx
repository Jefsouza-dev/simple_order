import { useState, useEffect, useContext } from "react";
import { v4 as randomId } from "uuid";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as S from "./styles";
import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import { ModalHeader } from "../../../../../components/ModalHeader";
import { ModalSeparator } from "../../../../../components/ModalSeparator";
import { ModalButton } from "../../../../../components/ModalButton";
import { EachRegisteredProduct } from "./EachRegisteredProduct";
import { OrderContext } from "../../../../../contexts/OrderContext";
import { formatToCurrency } from "../../../../../services/formatFunctions";
import { notifySuccess } from "../../../../../animation/ToastSucess";

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
    if (!selectedCustomer) {
      alert("Você deve selecionar um cliente");
      return;
    }

    if (quantityOfProducts === 0) {
      alert("Você deve selecionar no mínimo um produto");
      return;
    }

    const newOrder = {
      id: randomId(),
      customer: selectedCustomer,
      quantity: quantityOfProducts,
      total,
    };

    const allOrder = [...order, newOrder];

    setOrder(allOrder);

    localStorage.setItem("@order", JSON.stringify(allOrder));

    notifySuccess("Pedido registrado com sucesso");

    setTimeout(() => {
      closeModal();
    }, 1500);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filterItem = (event) => setSearchTerm(event.target.value);

  return (
    <ModalAnimation>
      <ToastContainer />
      <S.ModalContent>
        <div className="topArea">
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

            <S.SearchInput
              placeholder="Pesquisar produtos"
              onChange={filterItem}
            />
          </S.InputArea>

          <S.ProductsArea>
            {products &&
              products
                .filter((product) =>
                  product.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((product) => (
                  <EachRegisteredProduct
                    key={product.id}
                    product={product}
                    setQuantityOfProducts={setQuantityOfProducts}
                    setTotal={setTotal}
                  />
                ))}
          </S.ProductsArea>
        </div>

        <div className="bottomArea">
          <S.SeparatorBaseboard />
          <S.infoArea>
            <h2 className="totalPrice">
              <span>Total: </span> {formatToCurrency(total)}
            </h2>
            <ModalButton submit={addNewOrder} />
          </S.infoArea>
        </div>
      </S.ModalContent>
    </ModalAnimation>
  );
};
