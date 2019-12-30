import React from "react";
import { HeaderBody, HeaderContainer } from "./style";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => (
  <HeaderBody>
    <HeaderContainer size="normal" padding="normal">
      <Logo />
      <div>
        <Button filled="false">Login</Button>
        <Button filled="true">Sign Up</Button>
      </div>
    </HeaderContainer>
  </HeaderBody>
);

export default Header;
