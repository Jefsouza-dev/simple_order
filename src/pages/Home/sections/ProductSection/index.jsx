import { useState, useEffect, useContext } from "react";
import * as S from "./styles";
import { ActionBar } from "../../../../components/ActionBar";
import { EachProduct } from "./EachProduct";
import { NewProductModal } from "./NewProductModal";
import { ProductDetailsModal } from "./ProductDetailsModal";
import { ProductsContext } from "../../../../contexts/ProductsContext";

export const ProductSection = () => {
  const { products, setProducts } = useContext(ProductsContext);
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

  const [searchTerm, setSearchTerm] = useState("");
  const filterItem = (event) => setSearchTerm(event.target.value);

  return (
    <>
      <ActionBar
        titleSection={"Produto"}
        setOpenModal={handleAddNewProductModal}
        filterItem={filterItem}
      />
      <S.ProductListContainer>
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <EachProduct
              key={product.id}
              openModal={handleProductDetailsModal}
              product={product}
            />
          ))}
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
