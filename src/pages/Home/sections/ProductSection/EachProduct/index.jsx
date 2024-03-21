import * as S from "./styles";
import fill from "../../../../../assets/fill.svg";

export const EachProduct = ({ openModal }) => {
  return (
    <S.productCard onClick={openModal}>
      <S.img>
        <img src={fill} />
      </S.img>

      <S.DetailsSection>
        <span className="title">Produto</span>
        <span className="price">R$ 23,99</span>
      </S.DetailsSection>
    </S.productCard>
  );
};
