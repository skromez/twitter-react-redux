import React from 'react';
import { HeaderBody, HeaderContainer } from './style';
import Logo from '../Logo';
import Button from '../Button';
import ShownContext from '../Context/MyContext';

const Header = () => (
  <ShownContext.Consumer>
    {(context) => (
      <HeaderBody className="header">
        <HeaderContainer size="normal" padding="normal">
          <Logo />
          <div>
            <Button
              onClick={context.onToggleLogin}
              type="button"
              className="header__button header__button--login"
              size="105px"
              filled="false"
            >
              Login
            </Button>
            <Button
              onClick={context.onToggleSignup}
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
    )}
  </ShownContext.Consumer>

);

export default Header;
