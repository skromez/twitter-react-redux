import styled from 'styled-components';

const SignUpBody = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);

  .signup__container {
    position: fixed;
    padding: 20px;
    max-width: 260px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    border-radius: 8px;
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
    
    &--icon {
      position: absolute;
      border: none;
      background: transparent;

      padding: 5px;
      margin: 0;

      font-size: 28px;
      color: var(--white);
      
      top: 0;
      right: -45px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
  }
`;

export default SignUpBody;
