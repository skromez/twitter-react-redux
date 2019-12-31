import React from "react";
import InputBody from "./style";

const Input = ({ placeholder, className }) => (
  <InputBody className={className} type="text" placeholder={placeholder} />
);

export default Input;
