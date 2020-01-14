import React, { Component } from 'react';
import Avatar from '../Avatar';
import User from '../User';
import ModalBody from './style';
import Data from '../Data';
import avatar1 from '../../assets/images/tweet-modal/avatar1.jpg';
import avatar2 from '../../assets/images/tweet-modal/avatar2.jpg';
import avatar3 from '../../assets/images/tweet-modal/avatar3.jpg';
import UserAvatar from '../../assets/images/profile/avatar.jpg';
import Like from '../Like';

const ModalContent = () => (
  <ModalBody>
    <div className="modal">
      <div className="modal__container">
        <Avatar avatar={UserAvatar} className="modal__avatar" size="normal" />
        <User
          className="modal__user"
          direction="column"
          name="Dmitry Novikov"
          nick="skromez"
        />
      </div>
      <p className="modal__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <Data className="modal__data" data="17:26 - 01 Aug. 2019" />
      <div className="modal__likes likes">
        <p className="likes__amount">
          15 <span>Likes</span>
        </p>
        <Avatar className="modal__thumb" avatar={avatar1} size="small" />
        <Avatar className="modal__thumb" avatar={avatar2} size="small" />
        <Avatar className="modal__thumb" avatar={avatar3} size="small" />
      </div>
      <Like amount="15" fill="none" stroke="#657786" />
    </div>
  </ModalBody>
);

class Modal extends  Component {
  state = {
    shown: false
  };

  render() {
    const { shown } = this.state;
    const content = shown ? <ModalContent /> : null;

    return (
      <>
        {content}
      </>
    )

  }
}

export default Modal;
