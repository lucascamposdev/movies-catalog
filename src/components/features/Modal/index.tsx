// React
import { useContext, useEffect } from 'react'

// Styles
import * as S from './styles'

// Context
import { modalContext } from '@context/modalContext'

// Components
import ModalContent from './components/ModalContent'

const Modal = () => {

  const { closeModal } = useContext(modalContext)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.id == 'outside') {
        closeModal();
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [closeModal]);

  return (
    <S.Container id="outside" >
      <ModalContent/>
    </S.Container>
  )
}

export default Modal