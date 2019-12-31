import styled from "styled-components";
import Container from "../Container/style";

export const HeaderBody = styled.header`
  position: relative;
  background: var(--white);
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: space-between;

  .header__button {
    &--signup {
      margin-left: 25px;
    }
  }
`;
