import { ReactNode, createContext, useState, Dispatch, SetStateAction } from "react";

// O que meu contexto oferece
interface ContextInterface {
    isOpen: boolean;
    query:  string | undefined;
    pageNum: number;
    setQuery: Dispatch<SetStateAction<string | undefined>>;
    setPageNum: Dispatch<SetStateAction<number>>;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// Valor inicial do contexto
const defaultContext = {
    isOpen: true,
    query: '',
    pageNum: 1,
    setQuery: (_) => {},
    setPageNum: (_) => {},
    setIsOpen: (_) => {},
} as ContextInterface

// cria o contexto
export const searchContext = createContext(defaultContext)

type ProviderProps = {
    children: ReactNode
}

export default function SearchProvider ({ children }: ProviderProps){

    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    const [ query, setQuery ] = useState<string | undefined>()
    const [ pageNum, setPageNum ] = useState<number>(1)

    return (
        <searchContext.Provider 
        value={{ 
            isOpen, 
            query,
            pageNum,
            setIsOpen,
            setQuery,
            setPageNum 
            }}>
          {children}
        </searchContext.Provider>
      );
}


 