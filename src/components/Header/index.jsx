import customersIcon from "../../assets/customersIcon.svg";
import orderIcon from "../../assets/orderIcon.svg";
import productIcon from "../../assets/productIcon.svg";
import * as S from "./styles";

export const Header = ({ setSelectedSection, selectedSection }) => {
  return (
    <>
      <S.MainHeader>
        <S.ButtonWrapping>
          <S.Button
            onClick={() => setSelectedSection("customer")}
            className={selectedSection === "customer" ? "active" : ""}
          >
            <S.ItemButton src={customersIcon} alt="" />
            <S.TitleButton>Clientes</S.TitleButton>
          </S.Button>
          <S.Button
            onClick={() => setSelectedSection("order")}
            className={selectedSection === "order" ? "active" : ""}
          >
            <S.ItemButton src={orderIcon} alt="" />
            <S.TitleButton>Pedidos</S.TitleButton>
          </S.Button>
          <S.Button
            onClick={() => setSelectedSection("product")}
            className={selectedSection === "product" ? "active" : ""}
          >
            <S.ItemButton src={productIcon} alt="" />
            <S.TitleButton>Produtos</S.TitleButton>
          </S.Button>
        </S.ButtonWrapping>
      </S.MainHeader>
    </>
  );
};

// import * as S from "./styles";
// import customersIcon from "../../assets/customersIcon.svg";
// import orderIcon from "../../assets/orderIcon.svg";
// import productIcon from "../../assets/productIcon.svg";

// export const Header = ({ setSelectedSection }) => {
//   return (
//     <>
//       <S.MainHeader>
//         <S.ButtonWrapping>
//           <S.Button onClick={() => setSelectedSection("customer")}>
//             <S.ItemButton src={customersIcon} alt="" />
//             <S.TitleButton>Clientes</S.TitleButton>
//           </S.Button>
//           <S.Button onClick={() => setSelectedSection("order")}>
//             <S.ItemButton src={orderIcon} alt="" />
//             <S.TitleButton>Pedidos</S.TitleButton>
//           </S.Button>
//           <S.Button onClick={() => setSelectedSection("product")}>
//             <S.ItemButton src={productIcon} alt="" />
//             <S.TitleButton>Produtos</S.TitleButton>
//           </S.Button>
//         </S.ButtonWrapping>
//       </S.MainHeader>
//     </>
//   );
// };
