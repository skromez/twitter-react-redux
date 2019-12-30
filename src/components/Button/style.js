import styled, { css } from "styled-components";

const login = css`
  background: var(--white);
  color: var(--blue);
`;

const signup = css`
  margin-left: 25px;
  background: var(--blue);
  color: var(--white);
`;

const ButtonBody = styled.button`
  font-size: 14px;
  line-height: 19px;
  font-weight: 700;
  border: none;
  border-radius: 100px;
  padding: 10px 30px;

  ${props => {
    switch (props.filled) {
      case "false":
        return login;
      case "true":
        return signup;
      default:
        return "";
    }
  }};
`;

export default ButtonBody;
