import { Home } from "../src/pages/Home";
import ProductContextProvider from "./contexts/ProductsContext";
import CustomersContextProvider from "./contexts/CustomersContext";
import RefForDetailsModalProvider from "./contexts/RefForDetailsModalContext";

function App() {
  return (
    <>
      <RefForDetailsModalProvider>
        <CustomersContextProvider>
          <ProductContextProvider>
            <Home />
          </ProductContextProvider>
        </CustomersContextProvider>
      </RefForDetailsModalProvider>
    </>
  );
}

export default App;
