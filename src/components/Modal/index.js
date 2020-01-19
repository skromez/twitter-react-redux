import React from 'react';
import { connect } from 'react-redux';
import ModalBody from './style';
import * as actions from '../../actions/actions';

const Modal = ({ children, type, size, TOGGLE_MODAL }) => (
  <ModalBody size={size} className="modal">
    <div className="modal__container">
      <button
        type="button"
        className="modal__button modal__button--icon"
        onClick={() => TOGGLE_MODAL(type)}
      >
        <i className="far fa-times-circle" />
      </button>
      {children}
    </div>
  </ModalBody>
);

const mapStateToProps = (state) => ({state});

export default connect(mapStateToProps, actions)(Modal);
