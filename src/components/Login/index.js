import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';
import LoginBody from './style';

class LoginContent extends Component {
  state = {
    login: null,
    password: null,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  };
  render() {
    const { onToggleLogin } = this.props;
    const { login,  password } = this.state;
    return (
      <LoginBody className="login">
        <div className="login__container">
          <button
            onClick={onToggleLogin}
            className="login__button login__button--icon"
            type="button"
          >
            <i className="far fa-times-circle" />
          </button>
          <h2 className="login__header">Already signed up?</h2>
          <form onSubmit={this.handleSubmit} className="login__form form-login">
            <Input
              type="text"
              name="login"
              className="login__input"
              placeholder="Login"
              value={login}
              onChange={this.handleInputChange}
            />
            <Input
              type="password"
              name="password"
              className="login__input"
              placeholder="Password"
              value={password}
              onChange={this.handleInputChange}
            />
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
  }
}

const Login = ({ shown, onToggleLogin }) => {
  const content = shown ? <LoginContent onToggleLogin={onToggleLogin} /> : null;
  return (
    <>
      {content}
    </>
  );
};

export default Login;
