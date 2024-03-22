import * as S from "./styles";
import fill from "../../../../../assets/fill.svg";
import { useContext } from "react";
import { RefForDetailsModalContext } from "../../../../../contexts/RefForDetailsModalContext";
import { formatName } from "../../../../../services/formatFunctions";

export const EachProduct = ({ openModal, product }) => {
  const { id, name, price } = product;
  const { setRefId } = useContext(RefForDetailsModalContext);

  const handleClickCard = () => {
    setRefId(id);
    openModal();
  };

  return (
    <S.productCard onClick={handleClickCard}>
      <S.imgArea>
        <img src={fill} />
      </S.imgArea>

      <S.DetailsSection>
        <span className="title">{formatName(name)}</span>
        <span className="price">R$ {price}</span>
      </S.DetailsSection>
    </S.productCard>
  );
};
