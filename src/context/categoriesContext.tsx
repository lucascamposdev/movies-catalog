import { ReactNode, createContext, useState, Dispatch, SetStateAction } from "react";

// O que meu contexto oferece
export interface ContextInterface {
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
}

// Valor inicial do contexto
const defaultContext = {
    category: '',
    setCategory: (): void => {}, 
} as ContextInterface

// cria o contexto
export const categoriesContext = createContext(defaultContext)

type ProviderProps = {
    children: ReactNode
}

export default function CategoriesProvider ({ children }: ProviderProps){

    const [ category, setCategory ] = useState<string>('Categories')

    return (
        <categoriesContext.Provider 
        value={{ 
            category,
            setCategory
            }}>
          {children}
        </categoriesContext.Provider>
      );
}


 