// Components
import ModalContent from './components/ModalContent'
import { Modal as MUIModal, Fade } from '@mui/material';

interface MUIModalProps {
  open: boolean;
  handleClose: () => void;
}

const Modal = ({ open, handleClose}: MUIModalProps) => {

  return (
  <MUIModal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      sx={{ display: 'grid', placeContent: 'center'}}
    >
      <ModalContent/>
    </MUIModal>
  )
}

export default Modal