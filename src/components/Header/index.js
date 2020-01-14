import React from 'react';
import { HeaderBody, HeaderContainer } from './style';
import Logo from '../Logo';
import Button from '../Button';

const Header = ({ onToggleSignup, onToggleLogin }) => (
  <HeaderBody className="header">
    <HeaderContainer size="normal" padding="normal">
      <Logo />
      <div>
        <Button
          onClick={onToggleLogin}
          type="button"
          className="header__button header__button--login"
          size="105px"
          filled="false"
        >
          Login
        </Button>
        <Button
          onClick={onToggleSignup}
          type="button"
          className="header__button header__button--signup"
          size="105px"
          filled="true"
        >
          Sign Up
        </Button>
      </div>
    </HeaderContainer>
  </HeaderBody>
);

export default Header;
