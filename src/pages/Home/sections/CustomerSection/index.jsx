import { useState } from "react";
import * as S from "./styles";
import { ActionBar } from "../../../../components/ActionBar";
import { EachCustomer } from "./EachCustomer";
import { NewCustomerModal } from "./NewCustomerModal";
import { CustomerDetailsModal } from "./CustomerDetailsModal";

export const CustomerSection = () => {
  const [openAddNewCustomerModal, setOpenAddNewCustomerModal] = useState(false);
  const [openCustomerDetailsModal, setOpenCustomerDetailsModal] =
    useState(false);

  const handleAddNewCustomerModal = () => {
    setOpenAddNewCustomerModal(!openAddNewCustomerModal);
  };

  const handleCustomerDetailsModal = () => {
    setOpenCustomerDetailsModal(!openCustomerDetailsModal);
  };

  return (
    <>
      <ActionBar
        titleSection={"Cliente"}
        setOpenModal={handleAddNewCustomerModal}
      />
      <S.CustomerListContainer>
        <EachCustomer openModal={handleCustomerDetailsModal} />
      </S.CustomerListContainer>

      {openAddNewCustomerModal && (
        <NewCustomerModal closeModal={handleAddNewCustomerModal} />
      )}

      {openCustomerDetailsModal && (
        <CustomerDetailsModal closeModal={handleCustomerDetailsModal} />
      )}
    </>
  );
};
