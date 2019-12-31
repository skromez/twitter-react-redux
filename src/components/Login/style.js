import styled from "styled-components";

const LoginBody = styled.section`
  margin-top: 10px;
  width: 100%;
  height: 100%;

  @media (max-width: 1300px) {
    display: none;
  }

  .login__container {
    padding: 15px;
    max-width: 260px;
    margin: 0 auto;

    background: var(--white);
  }

  .login__header {
    font-size: 14px;
    line-height: 19px;
    color: var(--gray);
    margin-bottom: 10px;
  }

  .login__form {
    display: flex;
    flex-direction: column;
  }

  .login__button {
    padding: 6.5px 30px;
  }

  .login__input {
    margin-bottom: 15px;
  }

  .form-login__label {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 11px;
    margin-bottom: 20px;
    padding-left: 20px;
    user-select: none;
  }

  .form-login__checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .form-login__checkmark {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    height: 15px;
    width: 15px;
    background-color: var(--white);
    border-radius: 2px;
    border: 1px solid var(--gray);
  }

  .form-login__label:checked ~,
  .form-login__checkmark {
    background-color: #2196f3;
  }

  .form-login__checkmark::after {
    content: "";
    position: absolute;
    display: none;
  }

  .form-login__label
    // eslint-disable-next-line prettier/prettier
    .form-login__checkbox:checked~ .form-login__checkmark::after {
    display: block;
  }

  .form-login__label .form-login__checkmark:after {
    left: 4px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid var(--gray);
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export default LoginBody;
