import React from 'react';
import Modal from '../Modal';
import SignUp from '../SignUp';

const SignUpModal = ({ handleModal }) => (
  <Modal handleModal={handleModal} type="signUp" size="smallModal">
    <SignUp />
  </Modal>
);

export default SignUpModal;
