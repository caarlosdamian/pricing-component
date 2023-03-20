import {
 createContext,
 Dispatch,
 SetStateAction,
 useState,
 ReactNode,
} from "react";

interface AppContextInterface {
 subType: boolean;
 setSubType: Dispatch<SetStateAction<boolean>>;
}

interface ProviderProps {
 children: React.ReactNode;
}

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
