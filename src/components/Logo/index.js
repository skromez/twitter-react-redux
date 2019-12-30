import React from "react";
import logo from "../../img/header/logo.svg";
import LogoBody from "./style";

const Logo = () => (
  <LogoBody className="logo">
    <img src={logo} alt="" />
    <p className="logo__text">Guccitter</p>
  </LogoBody>
);

export default Logo;