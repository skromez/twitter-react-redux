import styled from "styled-components";

const FormBody = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .form__container {
    padding: 15px;
    max-width: 260px;
    margin: 0 auto;

    background: var(--white);
  }
`;

export default FormBody;
