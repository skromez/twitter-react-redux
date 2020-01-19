import React from 'react';
import { connect } from 'react-redux';
import { HeaderBody, HeaderContainer } from './style';
import Logo from '../Logo';
import Button from '../Button';
import * as actions from '../../actions/actions';

const Header = ({ TOGGLE_MODAL }) => (
  <HeaderBody className="header">
    <HeaderContainer size="normal" padding="normal">
      <Logo />
      <div className="header__wrapper">
        <Button
          onClick={() => TOGGLE_MODAL('LOGIN')}
          type="button"
          className="header__button header__button--login"
          size="105px"
          filled="false"
        >
          Login
        </Button>
        <Button
          onClick={() => TOGGLE_MODAL('SIGNUP')}
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

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps, actions)(Header);
