import { useState } from "react";
import * as S from "./styles";
import { ActionBar } from "../../../../components/ActionBar";
import { EachProduct } from "./EachProduct";
import { NewProductModal } from "./NewProductModal";

export const ProductSection = () => {
  const [openAddNewProductModal, setOpenAddNewProductModal] = useState(false);

  const handleModalAddNewProduct = () => {
    setOpenAddNewProductModal(!openAddNewProductModal);
  };

  return (
    <>
      <ActionBar
        titleSection={"Produto"}
        setOpenModal={handleModalAddNewProduct}
      />
      <S.ProductListContainer>
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
        <EachProduct />
      </S.ProductListContainer>

      {openAddNewProductModal && (
        <NewProductModal closeModal={handleModalAddNewProduct} />
      )}
    </>
  );
};
