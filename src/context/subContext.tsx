import { createContext, useState } from "react";
import { AppContextInterface, ProviderProps } from "../common/types";

export const defaultValues: AppContextInterface = {
 subType: false,
 setSubType: () => true,
};

export const SubContext = createContext(defaultValues);

export const SubContextProvider = ({ children }: ProviderProps) => {
 const [subType, setSubType] = useState(false);

 return (
  <SubContext.Provider value={{ subType, setSubType }}>
   {children}
  </SubContext.Provider>
 );
};
