import { useState } from "react";
import { CustomerSection } from "./sections/CustomerSection";
import { OrderSection } from "./sections/OrderSection";
import { ProductSection } from "./sections/ProductSection";
import { Header } from "../../components/Header";

export const Home = () => {
  const [selectedSection, setSelectedSection] = useState("order");

  const sectionComponents = {
    customer: <CustomerSection />,
    order: <OrderSection />,
    product: <ProductSection />,
  };

  return (
    <>
      <Header
        setSelectedSection={setSelectedSection}
        selectedSection={selectedSection}
      />

      {selectedSection && sectionComponents[selectedSection]}
    </>
  );
};
