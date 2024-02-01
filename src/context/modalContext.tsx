import { ReactNode, createContext, useState } from "react";
import { Movie } from "types/types";

// O que meu contexto oferece
export interface ContextInterface {
    isOpen: boolean;
    movieId: number;
    handleSelection: (movie: Movie) => void;
    closeModal: () => void;
}

// Valor inicial do contexto
const defaultContext = {
    movieId: 0,
    isOpen: false,
    handleSelection: (_movie: Movie): void => {}, 
    closeModal: (): void => {}, 
} as ContextInterface

// cria o contexto
export const modalContext = createContext(defaultContext)

type ProviderProps = {
    children: ReactNode
}

export default function modalProvider ({ children }: ProviderProps){

    const [ movieId, setMovieId ] = useState<number>(0)  // MUDAR DEPOIS \/
    const [ isOpen, setIsOpen ] = useState<boolean>(false)

    const handleSelection = (movie: Movie): void => {
        setMovieId(movie.id)
        setIsOpen(true)
    }

    const closeModal = (): void =>{
        setIsOpen(false)
    }

    return (
        <modalContext.Provider 
        value={{ 
            isOpen, 
            movieId, 
            handleSelection, 
            closeModal, 
            }}>
          {children}
        </modalContext.Provider>
      );
}


 