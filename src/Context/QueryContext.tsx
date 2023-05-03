import React, { useState, createContext, ReactNode, useContext } from "react";
type MyContextData = {
  useContext: any;
  setUseContext: React.Dispatch<React.SetStateAction<any>>;
};

type MyContextProps = {
  children: ReactNode;
};

export const QueryContext = createContext<MyContextData>({} as MyContextData);

export const MyContextProvider = ({ children }: MyContextProps) => {
  const [useContext, setUseContext] = useState(false);

  return (
    <QueryContext.Provider value={{ useContext, setUseContext }}>
      {children}
    </QueryContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useForm = () => {
  const context = useContext(QueryContext);

  if (!context) {
    throw new Error("UseForm deve ser usado em um formProvider");
  }

  return context;
};
