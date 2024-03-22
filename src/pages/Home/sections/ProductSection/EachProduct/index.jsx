import * as S from "./styles";
import fill from "../../../../../assets/fill.svg";
import { useContext } from "react";
import { RefForDetailsModalContext } from "../../../../../contexts/RefForDetailsModalContext";

export const EachProduct = ({ openModal, product }) => {
  const { id, name, price } = product;
  const { setRefId } = useContext(RefForDetailsModalContext);

  const handleClickCard = () => {
    setRefId(id);
    openModal();
  };

  return (
    <S.productCard onClick={handleClickCard}>
      <S.img>
        <img src={fill} />
      </S.img>

      <S.DetailsSection>
        <span className="title">{name}</span>
        <span className="price">R$ {price}</span>
      </S.DetailsSection>
    </S.productCard>
  );
};
