import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import * as S from "./styles";
import { ModalHeader } from "../../../../../components/ModalHeader";
import { ModalSeparator } from "../../../../../components/ModalSeparator";
import fill from "../../../../../assets/fill.svg";
import { useContext, useState, useEffect } from "react";
import { RefForDetailsModalContext } from "../../../../../contexts/RefForDetailsModalContext";

export const ProductDetailsModal = ({ closeModal }) => {
  const { refId } = useContext(RefForDetailsModalContext);
  const [productData, setproductData] = useState(null);

  useEffect(() => {
    const searchProducts = () => {
      const productsData = JSON.parse(localStorage.getItem("@products"));
      const product = productsData.find((product) => product.id === refId);
      setproductData(product);
    };

    searchProducts();
  }, [refId]);

  return (
    <ModalAnimation>
      <S.ModalContent>
        <ModalHeader title="Detalhes do produto" closeModal={closeModal} />

        <ModalSeparator />

        <S.ContainerInfo>
          <S.ImageArea>
            <img src={fill} />
          </S.ImageArea>

          <S.ProductInfo>
            <S.TitleAndPrice>
              <span className="title">{productData?.name}</span>
              <span className="price">{productData?.price}</span>
            </S.TitleAndPrice>

            <S.DescriptionArea>
              <p className="descriptionText">{productData?.description}</p>
            </S.DescriptionArea>
          </S.ProductInfo>
        </S.ContainerInfo>
      </S.ModalContent>
    </ModalAnimation>
  );
};
