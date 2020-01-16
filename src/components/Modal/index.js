import React from 'react';

import ModalBody from './style';

const Modal = ({ children, type, size, handleModal }) => (
  <ModalBody size={size} className="modal">
    <div className="modal__container">
      <button
        type="button"
        className="modal__button modal__button--icon"
        onClick={() => handleModal(type)}
      >
        <i className="far fa-times-circle" />
      </button>
      {children}
    </div>
  </ModalBody>
);

export default Modal;
