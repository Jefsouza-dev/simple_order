import { createContext, useState } from "react";

export const RefForDetailsModalContext = createContext({});

function RefForDetailsModalProvider({ children }) {
  const [refId, setRefId] = useState("");

  return (
    <RefForDetailsModalContext.Provider value={{ refId, setRefId }}>
      {children}
    </RefForDetailsModalContext.Provider>
  );
}

export default RefForDetailsModalProvider;
