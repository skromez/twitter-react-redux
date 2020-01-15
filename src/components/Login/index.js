import React, { Component } from 'react';
import Input from '../Input';
import Button from '../Button';
import LoginBody from './style';
import ShownContext from '../Context/MyContext';

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
    const { login,  password } = this.state;
    return (
      <ShownContext.Consumer>
        {(context) => (
          <LoginBody onClick={context.onToggleLogin} className="login">
            <div className="login__container">
              <button
                onClick={context.onToggleLogin}
                className="login__button login__button--icon"
                type="button"
              >
                <i onClick={context.onToggleLogin} className="far fa-times-circle" />
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
        )}
      </ShownContext.Consumer>
    );
  }
}

const Login = () => {
  return (
    <ShownContext.Consumer>
      {({state: { shownLogin }}) => {
        const content = shownLogin ? <LoginContent /> : null;
        return (
          <>
            {content}
          </>
        )
      }}
    </ShownContext.Consumer>
  );
};

export default Login;
