import { Dispatch, SetStateAction } from "react";

export interface AppContextInterface {
 subType: boolean;
 setSubType: Dispatch<SetStateAction<boolean>>;
}

export interface ProviderProps {
 children: React.ReactNode;
}

export interface Characteristics {
 id: string;
 name: string;
}

export interface Subcription {
 id: number;
 anual: string;
 montly: string;
 title: string;
 characteristic: Characteristics[];
}
