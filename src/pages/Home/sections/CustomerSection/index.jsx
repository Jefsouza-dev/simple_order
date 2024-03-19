import { useState } from "react";
import * as S from "./styles";
import { ActionBar } from "../../../../components/ActionBar";
import { EachCustomer } from "./EachCustomer";
import { NewCustomerModal } from "./NewCustomerModal";

export const CustomerSection = () => {
  const [openAddNewCustomerModal, setOpenAddNewCustomerModal] = useState(false);

  const handleAddNewCustomer = () => {
    setOpenAddNewCustomerModal(!openAddNewCustomerModal);
  };

  return (
    <>
      <ActionBar titleSection={"Cliente"} setOpenModal={handleAddNewCustomer} />
      <S.CustomerListContainer>
        <EachCustomer />
      </S.CustomerListContainer>

      {openAddNewCustomerModal && (
        <NewCustomerModal closeModal={handleAddNewCustomer} />
      )}
    </>
  );
};
