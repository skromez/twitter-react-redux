import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';
import LoginBody from './style';

const LoginContent = () => (
  <LoginBody className="login">
    <div className="login__container">
      <h2 className="login__header">Already signed up?</h2>
      <form className="login__form form-login">
        <Input className="login__input" placeholder="Login" />
        <Input className="login__input" placeholder="Password" />
        <label className="form-login__label">
          <input type="checkbox" className="form-login__checkbox" />
          <span className="form-login__checkmark" />
          Remember me
        </label>
        <Button
          className="login__button"
          size="100%"
          type="submit"
          filled="true"
        >
          Login
        </Button>
      </form>
    </div>
  </LoginBody>
);

class Login extends Component {
  state = {
    shown: false
  };
  render() {
    const { shown } = this.state;
    const content = shown ? <LoginContent /> : null;

    return (
      <>
        {content}
      </>
    )
  }
}

export default Login;
