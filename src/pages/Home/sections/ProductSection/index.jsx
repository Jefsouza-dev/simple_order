import { useState, useEffect, useContext } from "react";
import * as S from "./styles";
import { ActionBar } from "../../../../components/ActionBar";
import { EachProduct } from "./EachProduct";
import { NewProductModal } from "./NewProductModal";
import { ProductDetailsModal } from "./ProductDetailsModal";
import { ProductsContext } from "../../../../contexts/ProductsContext";

export const ProductSection = () => {
  const { products, setProducts } = useContext(ProductsContext);
  const productTeste = products[0];
  const [openAddNewProductModal, setOpenAddNewProductModal] = useState(false);
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(false);

  const handleAddNewProductModal = () => {
    setOpenAddNewProductModal(!openAddNewProductModal);
  };

  const handleProductDetailsModal = () => {
    setOpenProductDetailsModal(!openProductDetailsModal);
  };

  useEffect(() => {
    const searchProducts = () => {
      const storedProducts =
        JSON.parse(localStorage.getItem("@products")) || [];
      setProducts(storedProducts);
    };

    searchProducts();
  }, []);

  return (
    <>
      <ActionBar
        titleSection={"Produto"}
        setOpenModal={handleAddNewProductModal}
      />
      <S.ProductListContainer>
        {products?.map((product) => (
          <EachProduct key={product.id} openModal={handleProductDetailsModal} />
        ))}
      </S.ProductListContainer>

      {openAddNewProductModal && (
        <NewProductModal closeModal={handleAddNewProductModal} />
      )}

      {openProductDetailsModal && (
        <ProductDetailsModal
          product={productTeste}
          closeModal={handleProductDetailsModal}
        />
      )}
    </>
  );
};
