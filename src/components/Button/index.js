import React from "react";
import ButtonBody from "./style";

const Button = ({ children, filled }) => (
  <ButtonBody filled={filled}>{children}</ButtonBody>
);

export default Button;
