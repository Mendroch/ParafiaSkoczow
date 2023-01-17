import React from 'react';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ isOpen, children }) => {
  return (
    <ModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        },
      }}
    >
      {children}
    </ModalWrapper>
  );
};

export default Modal;
