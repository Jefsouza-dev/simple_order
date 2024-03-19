import { ModalAnimation } from "../../../../../animation/ModalAnimation";
import * as S from "./styles";
import { ModalHeader } from "../../../../../components/ModalHeader";
import { ModalSeparator } from "../../../../../components/ModalSeparator";

export const ProductDetailsModal = ({ closeModal }) => {
  return (
    <ModalAnimation>
      <S.ModalContent>
        <ModalHeader title="Detalhes do produto" closeModal={closeModal} />

        <ModalSeparator />

        <S.ContainerInfo>
          <S.Image />

          <S.ProductInfo>
            <S.TitleAndPrice>
              <span className="title">Produto</span>
              <span className="price">R$ 23,99</span>
            </S.TitleAndPrice>

            <S.DescriptionArea>
              <p className="descriptionText">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum
                placeat recusandae mollitia illo impedit, iusto pariatur
                excepturi fugiat et ipsa quibusdam vel voluptate nam deserunt
                expedita provident? Nesciunt, illo commodi? Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Veritatis, neque sequi
                sed necessitatibus, quia, delectus amet velit exercitationem
                praesentium a deleniti ad eius facere temporibus quisquam
                tempora sint? Enim, tempore?
              </p>
            </S.DescriptionArea>
          </S.ProductInfo>
        </S.ContainerInfo>
      </S.ModalContent>
    </ModalAnimation>
  );
};
