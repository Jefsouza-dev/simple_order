import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import * as S from "./styles";
import { ModalHeader } from "../../../../../components/ModalHeader";
import { ModalSeparator } from "../../../../../components/ModalSeparator";
import fill from "../../../../../assets/fill.svg";

export const ProductDetailsModal = ({ closeModal, product }) => {
  const { name, price, description } = product;

  return (
    <ModalAnimation>
      <S.ModalContent>
        <ModalHeader title="Detalhes do produto" closeModal={closeModal} />

        <ModalSeparator />

        <S.ContainerInfo>
          <S.Image>
            <img src={fill} />
          </S.Image>

          <S.ProductInfo>
            <S.TitleAndPrice>
              <span className="title">{name}</span>
              <span className="price">{price}</span>
            </S.TitleAndPrice>

            <S.DescriptionArea>
              <p className="descriptionText">{description}</p>
            </S.DescriptionArea>
          </S.ProductInfo>
        </S.ContainerInfo>
      </S.ModalContent>
    </ModalAnimation>
  );
};
