import React from 'react';
import InputBody from './style';

const Input = ({ placeholder, className, type, onChange, name }) => (
  <InputBody
    name={name}
    onChange={onChange}
    type={type}
    className={className}
    placeholder={placeholder}
  />
);

export default Input;
