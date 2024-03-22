import { Home } from "../src/pages/Home";
import ProductContextProvider from "./contexts/ProductsContext";
import CustomersContextProvider from "./contexts/CustomersContext";
import RefForDetailsModalProvider from "./contexts/RefForDetailsModalContext";
import OrderContextProvider from "./contexts/OrderContext";

function App() {
  return (
    <>
      <RefForDetailsModalProvider>
        <OrderContextProvider>
          <CustomersContextProvider>
            <ProductContextProvider>
              <Home />
            </ProductContextProvider>
          </CustomersContextProvider>
        </OrderContextProvider>
      </RefForDetailsModalProvider>
    </>
  );
}

export default App;
