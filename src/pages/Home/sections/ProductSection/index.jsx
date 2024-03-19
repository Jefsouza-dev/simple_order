import { useState } from "react";
import * as S from "./styles";
import { ActionBar } from "../../../../components/ActionBar";
import { EachProduct } from "./EachProduct";
import { NewProductModal } from "./NewProductModal";
import { ProductDetailsModal } from "./ProductDetailsModal";

export const ProductSection = () => {
  const [openAddNewProductModal, setOpenAddNewProductModal] = useState(false);
  const [openProductDetailsModal, setOpenProductDetailsModal] = useState(true);

  const handleAddNewProductModal = () => {
    setOpenAddNewProductModal(!openAddNewProductModal);
  };

  const handleProductDetailsModal = () => {
    setOpenProductDetailsModal(!openProductDetailsModal);
  };

  return (
    <>
      <ActionBar
        titleSection={"Produto"}
        setOpenModal={handleAddNewProductModal}
      />
      <S.ProductListContainer>
        <EachProduct />
      </S.ProductListContainer>

      {openAddNewProductModal && (
        <NewProductModal closeModal={handleAddNewProductModal} />
      )}

      {openProductDetailsModal && (
        <ProductDetailsModal closeModal={handleProductDetailsModal} />
      )}
    </>
  );
};
