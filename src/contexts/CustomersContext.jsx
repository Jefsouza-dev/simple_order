import { createContext, useState } from "react";

export const CustomersContext = createContext({});

function CustomersContextProvider({ children }) {
  const [customers, setCustomers] = useState([]);

  return (
    <CustomersContext.Provider value={{ customers, setCustomers }}>
      {children}
    </CustomersContext.Provider>
  );
}

export default CustomersContextProvider;
