import * as S from "./styles";
import customersIcon from "../../assets/customersIcon.svg";
import orderIcon from "../../assets/orderIcon.svg";
import productIcon from "../../assets/productIcon.svg";

export const Header = ({ setSelectedSection }) => {
  return (
    <>
      <S.MainHeader>
        <S.ButtonWrapping>
          <S.Button onClick={() => setSelectedSection("customer")}>
            <S.itemButton src={customersIcon} />
            <S.titleButton>Clientes</S.titleButton>
          </S.Button>
          <S.Button onClick={() => setSelectedSection("order")}>
            <S.itemButton src={orderIcon} />
            <S.titleButton>Pedidos</S.titleButton>
          </S.Button>
          <S.Button onClick={() => setSelectedSection("product")}>
            <S.itemButton src={productIcon} />
            <S.titleButton>Produtos</S.titleButton>
          </S.Button>
        </S.ButtonWrapping>
      </S.MainHeader>
    </>
  );
};
