import React from 'react';
import sticker from '../../assets/images/join-us/sticker.png';
import JoinBody from './style';
import Button from '../Button';

const Join = () => (
  <JoinBody>
    <img src={sticker} alt="Sticker" />
    <h2 className="join__heading">
      Hey!
      <br />
      Why don't you join us?
    </h2>
    <p className="join__text">
      It's simple - just click on sign up
      <br />
      button!
    </p>
    <Button type="button" className="join__button" filled="true" size="105px">
      Sign Up
    </Button>
  </JoinBody>
);

export default Join;
