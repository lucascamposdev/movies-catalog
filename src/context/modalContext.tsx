import { ReactNode, createContext, useState, useContext } from "react";
import { Movie } from "types/types";
import { Modal } from "@components/index";

// O que meu contexto oferece
interface ModalContextProps  {
    isOpen: boolean;
    movieId: number | null;
    handleSelection: (movie: Movie) => void;
    closeModal: () => void;
}

// Valor inicial do contexto
// const defaultContext = {
//     movieId: 0,
//     isOpen: false,
//     handleSelection: (_movie: Movie): void => {}, 
//     closeModal: (): void => {}, 
// } as ModalContextProps 

// cria o contexto
export const ModalContext = createContext<ModalContextProps  | undefined>(undefined);

export const useModal = (): ModalContextProps => {
    const context = useContext(ModalContext);
    if (!context) {
      throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
  };

interface  ModalProviderProps {
    children: ReactNode
}

export default function ModalProvider ({ children }: ModalProviderProps){

    const [ movieId, setMovieId ] = useState<number | null>(null)  // MUDAR DEPOIS \/
    const [ isOpen, setIsOpen ] = useState<boolean>(false)

    const handleSelection = (movie: Movie): void => {
        setMovieId(movie.id)
        setIsOpen(true)
    }

    const closeModal = (): void =>{
        setIsOpen(false)
    }

    return (
        <ModalContext.Provider 
        value={{ 
            isOpen, 
            movieId, 
            handleSelection, 
            closeModal, 
            }}>
          {children}
          <Modal handleClose={closeModal} open={isOpen}/>
        </ModalContext.Provider>
      );
}


 