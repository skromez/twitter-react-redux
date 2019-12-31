import styled from "styled-components";

const SignUpBody = styled.section`
  margin-top: 10px;
  width: 100%;
  height: 100%;

  @media (max-width: 1300px) {
    display: none;
  }

  .signup__container {
    padding: 15px;
    max-width: 260px;
    margin: 0 auto;

    background: var(--white);
  }

  .signup__heading {
    margin-bottom: 25px;

    text-align: center;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    color: var(--gray);
  }

  .signup__input {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  .signup__button {
    margin-top: 10px;
    padding: 6.5px 30px;
  }

  .form {
    display: flex;
    flex-direction: column;
  }
`;

export default SignUpBody;
