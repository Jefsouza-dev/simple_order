import * as S from "./styles";
import { ActionBar } from "../../../../components/ActionBar";
import { EachCustomer } from "./EachCustomer";

export const CustomerSection = () => {
  return (
    <>
      <ActionBar titleSection={"Cliente"} />
      <S.CustomerListContainer>
        <EachCustomer />
      </S.CustomerListContainer>
    </>
  );
};
