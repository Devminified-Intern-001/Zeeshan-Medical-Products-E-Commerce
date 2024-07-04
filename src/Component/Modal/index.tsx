import Modal from 'react-modal';
import Button from '../Button';
import { ReactNode } from 'react';
interface ISignupModal {
  className?: string;
  modalIsOpen: boolean;
  closeModal: () => void;
  title: string;
  description?: string;
  children: ReactNode;
}
const customStyles = {
  content: {
    maxWidth:'500px',
    maxHeight:'500px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const RcModal = (props: ISignupModal) => {
  const { modalIsOpen, closeModal,title,description,children,className } = props;
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={className}
      >
        <Button onClick={closeModal}>close</Button>
        <h3>{title}</h3>
        {description}
        {children}
      </Modal>
    </div>
  );
};

export default RcModal;
