import { Home } from "../src/pages/Home";
import ProductContextProvider from "./contexts/ProductsContext";
import CustomersContextProvider from "./contexts/CustomersContext";

function App() {
  return (
    <>
      <CustomersContextProvider>
        <ProductContextProvider>
          <Home />
        </ProductContextProvider>
      </CustomersContextProvider>
    </>
  );
}

export default App;
