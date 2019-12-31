import React from "react";
import Input from "../Input";
import Button from "../Button";
import LoginBody from "./style";

const Login = () => (
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

export default Login;
